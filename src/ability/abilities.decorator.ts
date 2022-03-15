import { SetMetadata } from '@nestjs/common';
import { UserActions, USER_ACTIONS } from 'src/common/types/permissions.type';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import { Transfer } from 'src/transfers/entities/transfer.entity';
import User from 'src/user/entities/user.entity';
import { Subjects } from './ability.factory';

const { READ, CREATE, EDIT, DELETE, MANAGE } = USER_ACTIONS;

export interface RequiredRule {
  action: UserActions;
  subject: Subjects;
}

export const CHECK_ABILITY = 'check_ability';

export const CheckAbilities = (...requirements: RequiredRule[]) =>
  SetMetadata(CHECK_ABILITY, requirements);

/**
 *
 * user
 */

export class ReadUserPermission implements RequiredRule {
  action = READ;
  subject = User;
}

export class CreateUserPermission implements RequiredRule {
  action = CREATE;
  subject = User;
}

export class EditUserPermission implements RequiredRule {
  action = EDIT;
  subject = User;
}

export class DeleteUserPermission implements RequiredRule {
  action = DELETE;
  subject = User;
}

/**
 *
 * Transfer
 */

export class ReadTransferPermission implements RequiredRule {
  action = READ;
  subject = Transfer;
}

export class CreateTransferPermission implements RequiredRule {
  action = CREATE;
  subject = Transfer;
}

export class EditTransferPermission implements RequiredRule {
  action = EDIT;
  subject = Transfer;
}

export class DeleteTransferPermission implements RequiredRule {
  action = DELETE;
  subject = Transfer;
}

/**
 *
 * Transaction
 */

export class ReadTransactionPermission implements RequiredRule {
  action = READ;
  subject = Transaction;
}

export class CreateTransactionPermission implements RequiredRule {
  action = CREATE;
  subject = Transaction;
}

export class EditTransactionPermission implements RequiredRule {
  action = EDIT;
  subject = Transaction;
}

export class DeleteTransactionPermission implements RequiredRule {
  action = DELETE;
  subject = Transaction;
}
