import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Batch {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  batchCode: string;

  @Column()
  rate: number;
}
