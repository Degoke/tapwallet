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
} from 'typeorm';
import { WalletType } from '../dto/create-wallet.dto';

@Entity()
class Wallet {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column({ type: 'real' })
  public balance: number;

  @Column()
  public type: WalletType;

  @CreateDateColumn()
  createdDate: Date;

  @UpdateDateColumn()
  updatedDate: Date;

  @OneToOne(() => User, (user: User) => user.wallet)
  public owner: User;
}

export default Wallet;
