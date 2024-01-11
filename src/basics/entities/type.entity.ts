import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Basic } from './basic.entity';

@Entity()
export class Type {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToMany(() => Basic, (basic) => basic.types)
  basics: Basic[];
}
