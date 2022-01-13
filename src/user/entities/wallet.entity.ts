import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import User from './user.entity';

@Entity()
class Wallet {
  @PrimaryGeneratedColumn()
  public walletId: number;

  @Column()
  public walletCode: string;

  @OneToOne(() => User, (user: User) => user.wallet)
  public owner: User;
}

export default Wallet;
