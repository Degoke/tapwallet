import User from 'src/user/entities/user.entity';
import { ManyToOne } from 'typeorm';

export class Mobiledatum {
  @ManyToOne(() => User, (user: User) => user.mobileDataActivities)
  owner: User[];
}
