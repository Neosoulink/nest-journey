import { DataSource } from 'typeorm';

// ENTITIES
import { Basic } from '@/basics/entities/basic.entity';
import { Type } from '@/basics/entities/type.entity';
import { EventEntity } from '@/basics/event/event.entity';

// MIGRATIONS
import { BasicRefactor1705205685332 } from '@/migrations/1705205685332-BasicRefactor';
import { SchemaSync1705205791530 } from '@/migrations/1705205791530-SchemaSync';

export default new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'root',
  password: 'root',
  database: 'nest-journey-db',
  entities: [Basic, Type, EventEntity],
  migrations: [BasicRefactor1705205685332, SchemaSync1705205791530],
});
