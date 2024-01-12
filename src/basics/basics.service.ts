import { Inject, Injectable, NotFoundException } from '@nestjs/common';

// ENTITIES
import { Basic } from './entities/basic.entity';

// ENUMS
import Providers from './enums/providers';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBasicDto } from './dto/create-basic.dto';
import { UpdateBasicDto } from './dto/update-basic.dto';
import { Type } from './entities/type.entity';

@Injectable()
export class BasicsService {
  constructor(
    @InjectRepository(Basic)
    private readonly basicRepository: Repository<Basic>,
    @Inject(Providers.ASYNC_DATABASE_CONNECTION)
    private readonly database: string,
    @InjectRepository(Type) private readonly typeRepository: Repository<Type>,
  ) {}

  getDatabase(): string {
    return this.database;
  }

  findAll() {
    return this.basicRepository.find({ relations: { types: true } });
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

  private async preloadTypeByName(name: string) {
    const existingType = await this.typeRepository.findOne({ where: { name } });

    if (existingType) return existingType;

    return this.typeRepository.create({ name });
  }
}
