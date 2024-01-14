import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index(['name', 'type'])
@Entity({ name: 'event' })
export class EventEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  type: string;

  @Column()
  @Index()
  name: string;

  @Column('json')
  payload: Record<string, any>;
}
