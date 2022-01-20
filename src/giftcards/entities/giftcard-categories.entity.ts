import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class GiftcardCategories {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
