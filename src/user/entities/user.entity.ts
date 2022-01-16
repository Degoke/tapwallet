import { Exclude } from 'class-transformer';
import Wallet from 'src/wallet/entities/wallet.entity';
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
  @Column()
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

  @OneToMany(() => User, (user: User) => user.email)
  referrals: User[];

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @OneToMany(() => Account, (account: Account) => account.owner)
  public accounts: Account[];

  @OneToOne(() => Wallet, (wallet: Wallet) => wallet.owner, {
    cascade: true,
  })
  @JoinColumn()
  public wallet: Wallet;
}

export default User;
