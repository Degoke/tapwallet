import { TRANSFER_TYPES, TransferTypes } from 'src/common/types/transfer.type';
import { Customer } from 'src/user/entities/customer.entity';
import { Wallet } from 'src/wallet/entities/wallet.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Transfer } from './transfer.entity';

@Entity()
export class SendTransfer extends Transfer {
  @Column({ default: TRANSFER_TYPES.SEND })
  public type: TransferTypes;

  @ManyToOne(() => Customer, (user: Customer) => user.sentTransfers)
  public receiveUser: Customer;

  @ManyToOne(() => Customer, (user: Customer) => user.sentTransfers)
  public sendUser: Customer;

  @ManyToOne(() => Wallet, (wallet: Wallet) => wallet.sentTransfers)
  public sendWallet: Wallet;

  @Column()
  public sendUserId: number;

  @Column()
  public sendWalletId: number;

  @Column()
  public receiveUserId: number;
}
