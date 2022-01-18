import { Exclude } from 'class-transformer';
import Wallet from 'src/wallet/entities/wallet.entity';
import { Transaction } from '../../transactions/entities/transaction.entity';
import { Transfer } from '../../transfers/entities/transfer.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import Account from './account.entity';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public firstName: string;

  @Column()
  public lastName: string;

  @Column({ unique: true })
  public email: string;

  @Column({ unique: true })
  public phoneNumber: string;

  @Exclude()
  @Column()
  public password: string;

  @Exclude()
  @Column({ nullable: true })
  public pin: number;

  @Column({ default: false })
  isEmailVerified: boolean;

  @Column({ default: false })
  isIdentityVerified: boolean;

  @Column({ default: false })
  isPhoneNumberVerified: boolean;

  @Column({ default: false })
  isBvnVerified: boolean;

  @Column({ default: false })
  isSuspended: boolean;

  @Column({ nullable: true })
  referralCode: string;

  @OneToMany(() => User, (user: User) => user.email)
  referrals: User[];

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @OneToMany(() => Account, (account: Account) => account.owner)
  public accounts: Account[];

  @OneToMany(
    () => Transaction,
    (transaction: Transaction) => transaction.user,
    {
      cascade: true,
    },
  )
  @JoinColumn()
  transactions: Transaction;

  @OneToMany(() => Transfer, (transfer: Transfer) => transfer.user, {
    cascade: true,
  })
  @JoinColumn()
  transfers: Transfer;

  @OneToOne(() => Wallet, (wallet: Wallet) => wallet.owner, {
    cascade: true,
  })
  @JoinColumn()
  wallet: Wallet;
}

export default User;
