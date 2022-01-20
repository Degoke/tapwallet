import User from 'src/user/entities/user.entity';
import { Column, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accountName: string;

  @Column()
  bankCode: string;

  @Column()
  accountNumber: string;

  @ManyToOne(() => User, (user: User) => user.id)
  owner: User;

  isPrimaryAccount: boolean;
}
