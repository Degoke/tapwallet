import { ACTIVITIES, ActivitiesType } from 'src/common/types/activities.type';
import { Customer } from 'src/user/entities/customer.entity';
import { Wallet } from 'src/wallet/entities/wallet.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Activity } from './activity.entity';

@Entity()
export class TvSubscriptionActivity extends Activity {
  @Column({ default: ACTIVITIES.TV_SUBSCRIPTION })
  type: ActivitiesType;

  @Column()
  billersCode: string;

  @Column()
  quantity: number;

  @ManyToOne(() => Customer, (user: Customer) => user.tvSubscriptionActivities)
  user: Customer;

  @ManyToOne(() => Wallet, (wallet: Wallet) => wallet.tvSubscriptionActivities)
  wallet: Wallet;
}
