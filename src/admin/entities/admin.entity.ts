import { AdminLevels } from 'src/common/types/roles.type';
import { User } from 'src/user/entities/user.entity';
import { Column, Entity } from 'typeorm';

@Entity()
export class Admin extends User {
  @Column()
  public level: AdminLevels;
}
