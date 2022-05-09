import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class SeedingLogEntry {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public reference: string;

  @CreateDateColumn()
  creationDate: Date;

  constructor(reference: string) {
    this.reference = reference;
  }
}
