import { ACTIVITIES, ActivitiesType } from 'src/common/types/activities.type';
import { Customer } from 'src/user/entities/customer.entity';
import { Wallet } from 'src/wallet/entities/wallet.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Activity } from './activity.entity';

@Entity()
export class AirtimeActivity extends Activity {
  @Column({ default: ACTIVITIES.AIRTIME })
  type: ActivitiesType;

  @ManyToOne(() => Customer, (user: Customer) => user.airtimeActivities)
  user: Customer;

  @ManyToOne(() => Wallet, (wallet: Wallet) => wallet.mobileDataActivities)
  wallet: Wallet;
}
