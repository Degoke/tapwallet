import { Column, PrimaryGeneratedColumn } from 'typeorm';

export class Giftcard {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cardNumber: string;

  @Column()
  price: number;

  @Column()
  country: string;

  @Column()
  category: string;

  @Column()
  batch: string;
}
