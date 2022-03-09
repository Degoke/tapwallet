import User from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToOne,
  JoinTable,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
  RelationId,
} from 'typeorm';
import { WALLETTYPE, WalletType } from '../dto/create-wallet.dto';

@Entity()
class Wallet {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'real', default: 0.0 })
  public balance: number;

  @Column({ default: WALLETTYPE.NAIRA })
  public type: WalletType;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @OneToOne(() => User, (user: User) => user.wallet)
  public owner: User;
}

export default Wallet;
