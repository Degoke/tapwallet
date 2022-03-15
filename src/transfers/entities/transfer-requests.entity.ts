import { Currency } from 'src/common/types/currency.type';
import { TRANSFER_TYPES, TransferTypes } from 'src/common/types/transfer.type';
import { Customer } from 'src/user/entities/customer.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Transfer } from './transfer.entity';

@Entity()
export class TransferRequest extends Transfer {
  @Column()
  public currency: Currency;

  @Column({ default: TRANSFER_TYPES.REQUEST })
  public type: TransferTypes;

  @ManyToOne(() => Customer, (user: Customer) => user.sentRequests)
  public fromUser: Customer;

  @ManyToOne(() => Customer, (user: Customer) => user.receivedRequests)
  public toUser: Customer;

  @Column()
  public fromUserId: number;

  @Column()
  public toUserId: number;
}
