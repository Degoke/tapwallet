import { Currency } from 'src/common/types/currency.type';
import { TRANSFER_TYPES, TransferTypes } from 'src/common/types/transfer.type';
import { Customer } from 'src/user/entities/customer.entity';
import { Wallet } from 'src/wallet/entities/wallet.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Transfer } from './transfer.entity';

@Entity()
export class ReceiveTransfer extends Transfer {
  @Column()
  public currency: Currency;

  @Column({ default: TRANSFER_TYPES.RECEIVE })
  public type: TransferTypes;

  @ManyToOne(() => Customer, (user: Customer) => user.receivedTransfers)
  public receiveUser: Customer;

  @ManyToOne(() => Wallet, (wallet: Wallet) => wallet.receivedTransfers)
  public receiveWallet: Wallet;

  @ManyToOne(() => Customer, (user: Customer) => user.receivedTransfers)
  public sendUser: Customer;

  @Column()
  public sendUserId: number;

  @Column()
  public receiveUserId: number;

  @Column()
  public receiveWalletId: number;
}
