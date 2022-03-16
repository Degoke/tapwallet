import { ACTIVITIES, ActivitiesType } from 'src/common/types/activities.type';
import { Customer } from 'src/user/entities/customer.entity';
import { Wallet } from 'src/wallet/entities/wallet.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Activity } from './activity.entity';

@Entity()
export class MobileDataActivity extends Activity {
  @Column({ default: ACTIVITIES.MOBILE_DATA })
  type: ActivitiesType;

  @ManyToOne(() => Customer, (user: Customer) => user.mobileDataActivities)
  user: Customer;

  @ManyToOne(() => Wallet, (wallet: Wallet) => wallet.mobileDataActivities)
  wallet: Wallet;
}
