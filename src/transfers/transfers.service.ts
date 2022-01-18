import { Injectable, HttpStatus, HttpException } from '@nestjs/common';
import { CreateTransferDto } from './dto/create-transfer.dto';
import { UpdateTransferDto } from './dto/update-transfer.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Connection } from 'typeorm';
import { Transfer } from './entities/transfer.entity';
import User from '../user/entities/user.entity';
import { UserService } from '../user/user.service';
import { WalletService } from 'src/wallet/wallet.service';
import Wallet from '../wallet/entities/wallet.entity';
import { ReturnTypeContainer } from 'src/common/containers/Container.entity';

@Injectable()
export class TransfersService {
  constructor(
    private connection: Connection,
    @InjectRepository(Transfer)
    private transfersRepository: Repository<Transfer>,
    private readonly userService: UserService,
    private readonly walletService: WalletService,
  ) {}

  async transferFunds(
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
      await queryRunner.manager.increment(
        Wallet,
        { id: recipientWalletId },
        'balance',
        amount,
      );
      await queryRunner.manager.decrement(
        Wallet,
        { id: senderWalletId },
        'balance',
        amount,
      );

      await queryRunner.commitTransaction();
      return {
        message: 'Transfer completed successfully',
      };
    } catch (err) {
      throw err;
      // since we have errors lets rollback the changes we made
      await queryRunner.rollbackTransaction();
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
  }
}
