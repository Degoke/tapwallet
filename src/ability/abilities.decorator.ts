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

export class RECEIVE_PERMISSION implements RequiredRule {
  action = UserPermission.RECEIVE;
  subject = User;
}

export class WITHDRAW_PERMISSION implements RequiredRule {
  action = UserPermission.WITHDRAW;
  subject = User;
}

export class DEPOSIT_PERMISSION implements RequiredRule {
  action = UserPermission.DEPOSIT;
  subject = User;
}

export class EDIT_PERMISSION implements RequiredRule {
  action = UserPermission.EDIT;
  subject = User;
}
