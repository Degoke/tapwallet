import User from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class Airtime {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  biller: string;

  @Column()
  category: string;

  @Column()
  customer: string;

  @ManyToOne(() => User, (user: User) => user.id)
  owner: User;

  @Column()
  transactionReference: string;

  @Column()
  merchantReference: string;

  @Column()
  merchant: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
