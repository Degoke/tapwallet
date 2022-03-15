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
import { Role_name } from '../../common/types/user-role.type';
import { RolePage } from 'twilio/lib/rest/chat/v1/service/role';
import { Airtime } from 'src/airtime/entities/airtime.entity';
import { Tvsubscription } from 'src/tvsubscription/entities/tvsubscription.entity';
import { Electricitybill } from 'src/electricitybill/entities/electricitybill.entity';
import { Mobiledatum } from 'src/mobiledata/entities/mobiledatum.entity';
import Role from 'src/role/entities/role.entity';

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

  @Column()
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

  @OneToOne(() => Role, (role: Role) => role.owner, {
    cascade: true,
  })
  @JoinColumn()
  public role: Role;

  @Column({ type: 'enum', enum: Permission, array: true, default: [] })
  permissions: Permission[];

  @OneToMany(() => Airtime, (airtime: Airtime) => airtime.owner)
  airtimeActivities: Airtime[];

  @OneToMany(
    () => Tvsubscription,
    (tvSubscription: Tvsubscription) => tvSubscription.owner,
  )
  tvSubscriptionActivities: Tvsubscription[];

  @OneToMany(
    () => Electricitybill,
    (electricityBill: Electricitybill) => electricityBill.owner,
  )
  electricityActivities: Electricitybill[];

  @OneToMany(() => Mobiledatum, (mobiledatum: Mobiledatum) => mobiledatum.owner)
  mobileDataActivities: Mobiledatum[];
}

export default User;
