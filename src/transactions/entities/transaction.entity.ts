import User from '../../user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import {
  TransactionModes,
  TransactionStatus,
  TransactionType,
  TRANSACTION_MODES,
} from 'src/common/types/status.type';
import { Currency } from 'src/common/types/currency.type';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public type: TransactionType;

  @Column()
  public amount: number;

  @Column()
  accountNumber: string;

  @Column()
  accountBank: string;

  @Column()
  currency: Currency;

  @Column()
  public status: TransactionStatus;

  @Column()
  public reference: string;

  @Column()
  public merchantId: number;

  @Column({ default: TRANSACTION_MODES.BANK_ACCOUNT })
  public mode: TransactionModes;

  @CreateDateColumn()
  public createdDate: Date;

  @UpdateDateColumn()
  public updatedDate: Date;

  @ManyToOne(() => User, (user) => user.transactions, { onDelete: 'SET NULL' })
  public user: User;

  @Column()
  public userId: number;
}
