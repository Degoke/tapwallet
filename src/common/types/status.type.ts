export enum TransactionStatus {
  PENDING = 'PENDING',
  SUCCESSFUL = 'SUCCESSFUL',
  CANCELLED = 'CANCELLED',
  FAILED = 'FAILED',
}

export type TransactionStatusType = keyof Record<TransactionStatus, string>;
