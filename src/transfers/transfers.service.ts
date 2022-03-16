import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { UpdateTransferDto } from './dto/update-transfer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Connection } from 'typeorm';
import { Transfer } from './entities/transfer.entity';
import { UserService } from '../user/user.service';
import { WalletService } from 'src/wallet/wallet.service';
import { ReturnTypeContainer } from 'src/common/containers/Container.entity';
import { ReceiveTransferRepository } from './repositories/receive-transfer.repository';
import { SendTransferRepository } from './repositories/send-transfer.repository';
import { TransferRequestRepository } from './repositories/transfer-request.repository';

@Injectable()
export class TransfersService {
  constructor(
    private connection: Connection,
    @InjectRepository(ReceiveTransferRepository)
    private receiveTransferRepository: ReceiveTransferRepository,
    @InjectRepository(SendTransferRepository)
    private sendTransferRepository: SendTransferRepository,
    @InjectRepository(TransferRequestRepository)
    private transferrequestRepository: TransferRequestRepository,
    private readonly userService: UserService,
    private readonly walletService: WalletService,
  ) {}

  /*async transferFunds(
    createTransferDto: CreateTransferDto,
  ): Promise<ReturnTypeContainer<string>> {
    const queryRunner = this.connection.createQueryRunner();

    const { recipientEmail, senderEmail, amount } = createTransferDto;
    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      const recipient = await this.userService.findByEmail(recipientEmail);
      const sender = await this.userService.findByEmail(senderEmail);

      const recipientWalletId = recipient.data.wallet.id;
      const senderWalletId = sender.data.wallet.id;

      const recipientWallet = await this.walletService.findById(
        recipientWalletId,
      );
      const senderWallet = await this.walletService.findById(senderWalletId);

      if (senderWallet.balance < amount) {
        throw new HttpException(
          {
            status: HttpStatus.FORBIDDEN,
            error: 'Insufficient funds',
          },
          HttpStatus.FORBIDDEN,
        );
      }

      const creditTransaction = new Transfer();
      creditTransaction.amount = amount;
      creditTransaction.balance =
        Number(recipientWallet.balance) + Number(amount);
      creditTransaction.user = recipient.data;
      creditTransaction.type = 'credit';
      creditTransaction.remarks = `Credit transfer from ${sender.data.firstName} ${sender.data.lastName}`;

      const debitTransaction = new Transfer();
      debitTransaction.amount = amount;
      debitTransaction.balance = Number(senderWallet.balance) - Number(amount);
      debitTransaction.user = sender.data;
      debitTransaction.type = 'debit';
      debitTransaction.remarks = `Debit transfer to ${recipient.data.firstName} ${recipient.data.lastName}`;

      //   console.log({ sender: sender, recipient: recipient });

      sender.data.transfers.push(debitTransaction);
      recipient.data.transfers.push(creditTransaction);
      await queryRunner.manager.save(sender.data);
      await queryRunner.manager.save(recipient.data);
      await queryRunner.manager.increment(
        Wallet,
        { id: recipientWalletId },
        'balance',
        Number(amount),
      );
      await queryRunner.manager.decrement(
        Wallet,
        { id: senderWalletId },
        'balance',
        Number(amount),
      );
      //      console.log({ credit: credit, debit: debit });

      await queryRunner.commitTransaction();
      return {
        message: 'Transfer completed successfully',
      };
    } catch (err) {
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
      throw err;
    } finally {
      // you need to release a queryRunner which was manually instantiated
      await queryRunner.release();
    }
  }

  findAll() {
    return `This action returns all transfers`;
  }

  findOne(id: number) {
    return `This action returns a #${id} transfer`;
  }

  update(id: number, updateTransferDto: UpdateTransferDto) {
    return `This action updates a #${id} transfer`;
  }

  remove(id: number) {
    return `This action removes a #${id} transfer`;
  }*/
}
