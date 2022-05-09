import { AccountTypes } from 'src/common/types/account.type';
import { EntityContainer } from 'src/common/types/entity';
import { PaymentMerchant } from 'src/settings/entities/payment-merchant.entity';
import { Customer } from 'src/user/entities/customer.entity';
import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';

@Entity()
export class Account extends EntityContainer {
  @Column()
  public accountName: string;

  @Column()
  public bankCode: string;

  @Column()
  public accountNumber: string;

  @Column()
  public userId: number;

  @ManyToOne(() => Customer, (customer: Customer) => customer.accounts)
  public user: Customer;

  @Column()
  public type: AccountTypes;

  @ManyToOne(
    () => PaymentMerchant,
    (merchant: PaymentMerchant) => merchant.accounts,
  )
  public merchant: PaymentMerchant;
}
