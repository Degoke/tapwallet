import User from 'src/user/entities/user.entity';
import { ManyToOne } from 'typeorm';

export class Electricitybill {
  @ManyToOne(() => User, (user: User) => user.electricityActivities)
  owner: User[];
}
