export enum TRANSACTIONSTATUS {
  PENDING = 'PENDING',
  COMPLETED = 'COMPLETED',
  CANCELLED = 'CANCELLED',
  FAILED = 'FAILED',
  QUEUED = 'QUEUED',
}

export type TransactionStatus = TRANSACTIONSTATUS;

export enum TRANSACTION {
  DEPOSIT = 'Deposit',
  WITHDRAWAL = 'Withdrawal',
  DEBIT = 'Debit',
  CREDIT = 'Credit',
}

export type TransactionType = TRANSACTION;

export enum TRANSACTION_MODES {
  BANK_ACCOUNT = 'Bank Account',
}

export type TransactionModes = TRANSACTION_MODES;
