import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

// ENTITIES
import { Type } from '../entities/type.entity';

@Entity()
export class Basic {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @JoinTable()
  @ManyToMany(() => Type, (type) => type.basics, { cascade: true })
  types: Type[];
}
