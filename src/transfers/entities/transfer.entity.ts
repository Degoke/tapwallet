// import User from '../../user/entities/user.entity';
// import {
//   Column,
//   CreateDateColumn,
//   Entity,
//   JoinColumn,
//   OneToMany,
//   OneToOne,
//   ManyToOne,
//   PrimaryGeneratedColumn,
//   UpdateDateColumn,
// } from 'typeorm';

// @Entity()
// export class Transfer {
//   @PrimaryGeneratedColumn()
//   id: number;

//   @Column()
//   type: string;

//   @Column()
//   balance: number;

//   @Column()
//   amount: number;

//   @Column()
//   remarks: string;

//   @CreateDateColumn()
//   createdDate: Date;

//   @UpdateDateColumn()
//   updatedDate: Date;

//   @ManyToOne(() => User, (user: User) => user.transfers)
//   public author: User;

// }
