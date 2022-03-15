import { Customer } from 'src/user/entities/customer.entity';
import { Wallet } from 'src/wallet/entities/wallet.entity';
import { Entity, ManyToOne } from 'typeorm';
import { Transaction } from './transaction.entity';

@Entity()
export class Withdrawal extends Transaction {
  @ManyToOne(() => Customer, (customer: Customer) => customer.withdrawals)
  user: Customer;

  @ManyToOne(() => Wallet, (wallet: Wallet) => wallet.withdrawals)
  wallet: Wallet;
}