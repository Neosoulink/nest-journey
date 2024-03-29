import { DataSource, Repository } from 'typeorm';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

// ENTITIES
import { Basic } from './entities/basic.entity';
import { Type } from './entities/type.entity';

// ENUMS
import Providers from './enums/providers';

// DTO
import { CreateBasicDto } from './dto/create-basic.dto';
import { UpdateBasicDto } from './dto/update-basic.dto';
import { PaginationQueryDto } from './common/dto/pagination-query.dto';
import { EventEntity } from './event/event.entity';

// Basic Service definition using the `@injectable` decorator
@Injectable()
export class BasicsService {
  constructor(
    @InjectRepository(Basic)
    private readonly basicRepository: Repository<Basic>,
    @Inject(Providers.ASYNC_DATABASE_CONNECTION)
    private readonly database: string,
    @InjectRepository(Type) private readonly typeRepository: Repository<Type>,
    private readonly dataSource: DataSource,
  ) {}

  getDatabase(): string {
    return this.database;
  }

  findAll(paginationQueryDto: PaginationQueryDto) {
    return this.basicRepository.find({
      relations: { types: true },
      skip: paginationQueryDto.offset,
      take: paginationQueryDto.limit,
    });
  }

  async findOne(id: string) {
    const item = await this.basicRepository.findOne({
      where: { id: +id },
      relations: { types: true },
    });

    if (!item) throw new NotFoundException(`Item ${id} not found`);

    return item;
  }

  async create(createDto: CreateBasicDto) {
    const types = await Promise.all(
      createDto.types.map((name) => this.preloadTypeByName(name)),
    );
    const newEntity = this.basicRepository.create({ ...createDto, types });
    return this.basicRepository.save(newEntity);
  }

  async update(id: string, updateDto: UpdateBasicDto) {
    const types =
      updateDto.types &&
      (await Promise.all(
        updateDto.types.map((name) => this.preloadTypeByName(name)),
      ));
    const preloadedEntity = await this.basicRepository.preload({
      id: +id,
      ...updateDto,
      types,
    });

    if (!preloadedEntity) throw new NotFoundException(`Item ${id} not found`);

    return this.basicRepository.save(preloadedEntity);
  }

  async remove(id: string) {
    const entity = await this.findOne(id);
    return this.basicRepository.remove(entity);
  }

  async recommendBasic(basic: Basic) {
    const queryRunner = this.dataSource.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();

    try {
      basic.recommendations++;

      const recommendEvent = new EventEntity();
      recommendEvent.name = `recommendation_${basic.recommendations}`;
      recommendEvent.type = 'basic';
      recommendEvent.payload = { basicId: basic.id };

      await queryRunner.manager.save(basic);
      await queryRunner.manager.save(recommendEvent);

      await queryRunner.commitTransaction();
    } catch {
      await queryRunner.rollbackTransaction();
    } finally {
      await queryRunner.release();
    }
  }

  private async preloadTypeByName(name: string) {
    const existingType = await this.typeRepository.findOne({ where: { name } });

    if (existingType) return existingType;

    return this.typeRepository.create({ name });
  }
}
