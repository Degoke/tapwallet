import { Exclude } from 'class-transformer';
import {
  Column,
  Entity,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Account from './account.entity';
import Wallet from './wallet.entity';

@Entity()
class User {
  @PrimaryGeneratedColumn()
  public userId: number;

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

  @Column({ default: false })
  isEmailVerified: boolean;

  @Column({ default: false })
  isIdentityVerified: boolean;

  @Column({ default: false })
  isPhoneNumberVerified: boolean;

  @Column({ default: false })
  isBvnVerified: boolean;

  @OneToMany(() => Account, (account: Account) => account.owner)
  public accounts: Account[];

  @OneToOne(() => Wallet, (wallet: Wallet) => wallet.owner)
  public wallet: Wallet;
}

export default User;
