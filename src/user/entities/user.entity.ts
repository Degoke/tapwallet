import { Exclude } from 'class-transformer';
import Wallet from 'src/wallet/entities/wallet.entity';
import { Transfer } from '../../transfers/entities/transfer.entity';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  RelationId,
  UpdateDateColumn,
} from 'typeorm';
import { Account } from 'src/account/entities/account.entity';
import { UserRoles } from '../interfaces/User.interface';
import Permission from 'src/common/types/permission.type';
import { Role } from '../interfaces/user-role.type';
import { RolePage } from 'twilio/lib/rest/chat/v1/service/role';
import { Airtime } from 'src/airtime/entities/airtime.entity';
import { Mobiledatum } from 'src/mobiledata/entities/mobiledatum.entity';

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

  @Column({ nullable: true })
  profileImage: string;

  @OneToMany(() => User, (user: User) => user.email)
  referrals: User[];

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @OneToMany(() => Account, (account: Account) => account.owner, {
    cascade: true,
  })
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
  public wallet: Wallet;

  @Column({ type: 'enum', enum: Role, default: Role.User })
  role: Role;

  @Column({ type: 'enum', enum: Permission, array: true, default: [] })
  permissions: Permission[];

  @OneToMany(() => Airtime, (airtime: Airtime) => airtime.owner)
  airtimeActivities: Airtime[];

  @OneToMany(() => Mobiledatum, (mobileDatum: Mobiledatum) => mobileDatum.owner)
  mobileDataPurchases: Mobiledatum[];
}

export default User;
