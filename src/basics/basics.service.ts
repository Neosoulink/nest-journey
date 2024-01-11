import { Inject, Injectable, NotFoundException } from '@nestjs/common';

// ENTITIES
import { Basics } from './entities/basics.entity';

// ENUMS
import Providers from './enums/providers';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateDto } from './dto/create.dto';
import { UpdateDto } from './dto/update.dto';

@Injectable()
export class BasicsService {
  constructor(
    @InjectRepository(Basics)
    private readonly basicRepository: Repository<Basics>,
    @Inject(Providers.ASYNC_DATABASE_CONNECTION)
    private readonly database: string,
  ) {}

  getDatabase(): string {
    return this.database;
  }

  findAll() {
    return this.basicRepository.find();
  }

  async findOne(id: string) {
    const item = await this.basicRepository.findOne({ where: { id: +id } });

    if (!item) throw new NotFoundException(`Item ${id} not found`);

    return item;
  }

  create(createDto: CreateDto) {
    const newEntity = this.basicRepository.create(createDto);
    return this.basicRepository.save(newEntity);
  }

  async update(id: string, updateDto: UpdateDto) {
    const preloadedEntity = await this.basicRepository.preload({
      id: +id,
      ...updateDto,
    });

    if (!preloadedEntity) throw new NotFoundException(`Item ${id} not found`);

    return this.basicRepository.save(preloadedEntity);
  }

  async remove(id: string) {
    const entity = await this.findOne(id);
    return this.basicRepository.remove(entity);
  }
}
