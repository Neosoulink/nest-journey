import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Basics {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('json', { nullable: true })
  types: string[];
}
