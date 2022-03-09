import { ServicesType } from 'src/common/types/service.type';
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
export class Mobiledatum {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'data' })
  type: string;

  @Column()
  customer: string;

  @Column()
  serviceID: string;

  @Column()
  variation_code: string;

  @ManyToOne(() => User, (user: User) => user.id)
  owner: User;

  @Column()
  ownerId: number;

  @Column()
  transactionReference: string;

  // @Column()
  // merchantReference: string;

  @Column()
  service: ServicesType;

  @Column()
  amount: number;

  @Column()
  balance: number;

  // @Column({ default: 'NGN' })
  // currency: CurrencyType;

  // @Column({ type: 'jsonb' })
  // details: any;

  @Column()
  public remarks: string;

  // @Column()
  // status: TransactionStatusType;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
