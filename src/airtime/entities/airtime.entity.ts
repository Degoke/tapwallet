import { CurrencyType } from 'src/common/types/currency.type';
import { ServicesType } from 'src/common/types/service.type';
import { TransactionStatusType } from 'src/common/types/status.type';
import User from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Airtime {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'airtime' })
  type: string;

  @Column()
  customer: string;

  @ManyToOne(() => User, (user: User) => user.id)
  owner: User;

  @Column()
  ownerId: number;

  @Column()
  transactionReference: string;

  @Column()
  merchantReference: string;

  @Column()
  service: ServicesType;

  @Column()
  amount: number;

  @Column({ default: 'NGN' })
  currency: CurrencyType;

  @Column({ type: 'jsonb' })
  details: any;

  @Column()
  status: TransactionStatusType;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
