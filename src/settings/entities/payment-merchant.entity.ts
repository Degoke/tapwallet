import { Account } from 'src/account/entities/account.entity';
import { EntityContainer } from 'src/common/types/entity';
import { ServiceStatus, SERVICE_STATUS } from 'src/common/types/status.type';
import { Column, Entity, OneToMany } from 'typeorm';

@Entity()
export class PaymentMerchant extends EntityContainer {
  @Column()
  public name: string;

  @Column({ default: SERVICE_STATUS.ACTIVE })
  public status: ServiceStatus;

  @OneToMany(() => Account, (account: Account) => account.merchant)
  public accounts: Account[];
}
