import { EntityContainer } from 'src/common/types/entity';
import { ServicesType } from 'src/common/types/service.type';
import { TransactionStatus } from 'src/common/types/status.type';
import { Column } from 'typeorm';

export abstract class Activity extends EntityContainer {
  @Column()
  customer: string;

  @Column()
  userId: number;

  @Column()
  walletId: number;

  @Column()
  serviceID: string;

  @Column()
  variation_code: string;

  @Column()
  transactionReference: string;

  @Column()
  service: ServicesType;

  @Column({ type: 'real' })
  amount: number;

  @Column({ type: 'real' })
  balance: number;

  @Column()
  public remarks: string;

  @Column()
  status: TransactionStatus;
}
