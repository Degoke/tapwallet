import User from 'src/user/entities/user.entity';
import { ManyToOne } from 'typeorm';

export class Tvsubscription {
  @ManyToOne(() => User, (user: User) => user.tvSubscriptionActivities)
  owner: User[];
}
