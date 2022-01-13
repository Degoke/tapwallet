import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import User from './user.entity';

@Entity()
class Account {
  @PrimaryGeneratedColumn()
  public accountId: number;

  @Column()
  public accountNumber: string;

  @Column()
  public accountName: string;

  @Column()
  public bank: string;

  @ManyToOne(() => User, (user: User) => user.accounts)
  public owner: User;
}

export default Account;
