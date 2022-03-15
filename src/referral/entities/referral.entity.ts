import {
  Column,
  CreateDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Referral {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  referrerId: number;

  @Column()
  userId: number;

  @CreateDateColumn()
  createdAt: Date;
}
