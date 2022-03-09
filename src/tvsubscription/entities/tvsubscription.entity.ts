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
export class Tvsubscription {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: 'tvsubscription' })
  type: string;

  @Column()
  customer: string;

  @Column()
  quantity: number;

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

  @Column()
  billersCode: string;

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
