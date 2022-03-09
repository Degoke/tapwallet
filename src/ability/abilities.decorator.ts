import { SetMetadata } from '@nestjs/common';
import { UserPermission } from 'src/common/types/user-permissions.interface';
import User from 'src/user/entities/user.entity';
import { Subjects } from './ability.factory';

export interface RequiredRule {
  action: UserPermission;
  subject: Subjects;
}

export const CHECK_ABILITY = 'check_ability';

export const CheckAbilities = (...requirements: RequiredRule[]) =>
  SetMetadata(CHECK_ABILITY, requirements);

export class SEND_USER_PERMSSION implements RequiredRule {
  action = UserPermission.SEND;
  subject = User;
}

export class ADMIN_PERMISSION implements RequiredRule {
  action = UserPermission.Manage;
  subject = User;
}
