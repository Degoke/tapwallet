import {
  Ability,
  AbilityBuilder,
  AbilityClass,
  createAliasResolver,
  ExtractSubjectType,
  InferSubjects,
} from '@casl/ability';
import { Injectable } from '@nestjs/common';
import { UserActions, USER_ACTIONS } from 'src/common/types/permissions.type';
import {
  ADMIN_ROLES,
  USER_LEVELS,
  USER_ROLES,
} from 'src/common/types/roles.type';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import { Transfer } from 'src/transfers/entities/transfer.entity';
import User from 'src/user/entities/user.entity';
import Wallet from 'src/wallet/entities/wallet.entity';

const { CREATE, MANAGE, EDIT, DELETE, READ } = USER_ACTIONS;

type InferredTypes =
  | typeof User
  | typeof Transfer
  | typeof Transaction
  | typeof Wallet;

export type Subjects = InferSubjects<InferredTypes> | 'all';

export type AppAbility = Ability<[UserActions, Subjects]>;

@Injectable()
export class AbilityFactory {
  defineAbility(user: User) {
    const { can, cannot, build } = new AbilityBuilder(
      Ability as AbilityClass<AppAbility>,
    );

    /*
      subjects
      user
      transactions
      activities
      kyc
      transfers
      wallet
      settings

      acyions
      manage
      delete
      create send receive
      edit
      read

      superadmin manage all

      subadmin manage all cannot edit settings

      level0 
        read all
        edit delete user,

      level 1
        ...level 0
        create transactions // limited
        create activities
        create kyc
        send transfers 
        receive transfers
      
      level 2
        ... level 1
        unlimited
    */

    if (user.role === ADMIN_ROLES.SUPER_ADMIN) {
      can(MANAGE, 'all');
    }

    if (user.role === ADMIN_ROLES.SUB_ADMIN) {
      can(MANAGE, 'all');
      cannot(CREATE, Transfer);
      cannot(CREATE, Transaction);
    }

    if (user.role === USER_ROLES.USER) {
      if (user.kyc.level === USER_LEVELS.ZERO) {
      }

      if (
        user.kyc.level === USER_LEVELS.ONE ||
        user.kyc.level === USER_LEVELS.TWO
      ) {
        can([READ, EDIT, DELETE], User);
        can(READ, [Transfer, Transaction, Wallet]);
        can(CREATE, [Transfer, Transaction]);
      }
    }

    if (user.role === USER_ROLES.SUSPENDED) {
      can(READ, [User, Transfer, Transaction, Wallet]);
      cannot(CREATE, 'all');
      cannot(EDIT, 'all');
    }

    return build({
      detectSubjectType: (item) =>
        item.constructor as ExtractSubjectType<Subjects>,
    });
  }
}
