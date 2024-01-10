import { Inject, Injectable, NotFoundException } from '@nestjs/common';

// ENTITIES
import { Basics } from './entities/basics.entity';

// ENUMS
import Providers from './enums/providers';

@Injectable()
export class BasicsService {
  private data: Basics[] = [
    {
      id: 1,
      name: 'One',
      types: ['1', '2', '3'],
    },
  ];

  constructor(
    @Inject(Providers.ASYNC_DATABASE_CONNECTION)
    private readonly database: string,
  ) {}

  getDatabase(): string {
    return this.database;
  }

  findAll() {
    return this.data;
  }

  findOne(id: number) {
    const item = this.data.find((item) => item.id === +id);
    if (!item) throw new NotFoundException(`Item ${id} not found`);
    return item;
  }

  create(createDto: any) {
    this.data.push(createDto);
    return createDto;
  }

  update(id: number, updateDto: any) {
    const existingCoffee = this.findOne(id);
    if (existingCoffee) {
      console.log(updateDto);
    }
  }

  remove(id: string) {
    const coffeeIndex = this.data.findIndex((item) => item.id === +id);
    if (coffeeIndex >= 0) {
      this.data.splice(coffeeIndex, 1);
    }
  }
}
