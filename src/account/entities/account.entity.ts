import User from 'src/user/entities/user.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  accountName: string;

  @Column()
  bankCode: string;

  @Column()
  accountNumber: string;

  @ManyToOne(() => User, (user: User) => user.accounts)
  owner: User;

  @Column()
  ownerId: number;

  @CreateDateColumn()
  createdAt: Date;
}
