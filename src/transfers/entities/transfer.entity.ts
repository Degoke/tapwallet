import { Column } from 'typeorm';
import { EntityContainer } from 'src/common/types/entity';
import { TransactionStatus } from 'src/common/types/status.type';

export abstract class Transfer extends EntityContainer {
  @Column({ type: 'real' })
  public amount: number;

  @Column()
  public remarks: string;

  @Column({ type: 'real' })
  public balance: string;

  @Column()
  public status: TransactionStatus;
}
