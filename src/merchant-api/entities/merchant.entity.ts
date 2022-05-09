import { EntityContainer } from 'src/common/types/entity';
import { Customer } from 'src/user/entities/customer.entity';
import { Entity, ManyToOne, OneToMany } from 'typeorm';

@Entity()
export class Merchant extends EntityContainer {
  @ManyToOne(() => Customer, (customer: Customer) => customer.merchantAccounts)
  public owner: Customer;

  @OneToMany(() => Customer, (customer: Customer) => customer.merchant)
  public userAccounts: Customer[];
}
