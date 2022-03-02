import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  ExtractSubjectType,
  InferSubjects,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { UserPermission } from 'src/common/types/user-permissions.interface';
import { Role } from 'src/common/types/user-role.type';
import User from 'src/user/entities/user.entity';

export enum Action {
  Manage = 'manage',
  Create = 'create',
  Read = 'read',
  Update = 'update',
  Delete = 'delete',
}

export type Subjects = InferSubjects<typeof User> | 'all';

export type AppAbility = Ability<[UserPermission, Subjects]>;

@Injectable()
export class AbilityFactory {
  defineAbility(user: User) {
    const { can, cannot, build } = new AbilityBuilder(
      Ability as AbilityClass<AppAbility>,
    );
    if (user.role === Role.Admin) {
      can(UserPermission.Manage, 'all');
    } else if (user.role === Role.Level_0) {
      can(UserPermission.RECEIVE, 'all');
    } else if (user.role === Role.Level_1) {
      can(UserPermission.RECEIVE, 'all');
      can(UserPermission.SEND, 'all');
    } else if (user.role === Role.Level_2) {
      can(UserPermission.RECEIVE, 'all');
      can(UserPermission.DEPOSIT, 'all');
      can(UserPermission.WITHDRAW, 'all');
      can(UserPermission.SEND, 'all');
    } else {
      can(UserPermission.RECEIVE, 'all');
      cannot(UserPermission.WITHDRAW, 'all').because('Only Level3 users can');
    }

    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
