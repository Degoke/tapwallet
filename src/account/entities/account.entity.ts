import { AccountTypes } from 'src/common/types/account.type';
import { EntityContainer } from 'src/common/types/entity';
import { Merchant } from 'src/settings/entities/merchant.entity';
import { Customer } from 'src/user/entities/customer.entity';
import { Column, ManyToMany, ManyToOne } from 'typeorm';

export abstract class Account extends EntityContainer {
  @Column()
  public accountName: string;

  @Column()
  public bankCode: string;

  @Column()
  public accountNumber: string;

  @Column()
  public userId: number;

  @ManyToOne(() => Customer, (customer: Customer) => customer.monnifyAccounts)
  public user: Customer;

  @Column()
  public type: AccountTypes;

  @ManyToOne(() => Merchant, (merchant: Merchant) => merchant.accounts)
  public merchant: Merchant;
}
