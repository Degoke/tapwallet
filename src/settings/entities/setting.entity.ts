import { Column, PrimaryGeneratedColumn, UpdateDateColumn } from 'typeorm';

export class Setting {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  isActive: true;

  @Column()
  value: string;

  @UpdateDateColumn()
  updatedAt: Date;
}
