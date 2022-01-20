import { Injectable, forwardRef, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { number } from 'joi';
import { ReturnTypeContainer } from 'src/common/containers/Container.entity';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import { UserService } from 'src/user/user.service';
import { Repository } from 'typeorm';
import { CreateWalletDto } from './dto/create-wallet.dto';
import { TransactionDto } from './dto/transaction.dto';
import { UpdateWalletDto } from './dto/update-wallet.dto';
import Wallet from './entities/wallet.entity';

@Injectable()
export class WalletService {
  constructor(
    @InjectRepository(Wallet) private walletRepository: Repository<Wallet>,
    @Inject(forwardRef(() => UserService))
    private readonly userService: UserService,
  ) {}
  async create(createWalletDto: CreateWalletDto) {
    try {
      const newWallet = await this.walletRepository.create(createWalletDto);

      await this.walletRepository.save(newWallet);

      return newWallet;
    } catch (error) {
      throw error;
    }
  }

  async deposit(
    transactionDto: TransactionDto,
  ): Promise<ReturnTypeContainer<any>> {
    const { email, amount } = transactionDto;
    // return {
    //   message: 'hello',
    //   data: transactionDto,
    // };

    try {
      const user = await this.userService.findByEmail(email);
      const walletId = user.data.wallet.id;
      await this.walletRepository.increment(
        { id: walletId },
        'balance',
        amount,
      );
      const wallet = await this.walletRepository.findOne({ id: walletId });
      return {
        message: 'success',
        data: { balance: wallet.balance },
      };
    } catch (error) {
      throw error;
    }
  }


  async find() {
    return await this.walletRepository.find({ relations: ['owner'] });
  }

  async findById(id: number) {
    return await this.walletRepository.findOne(id);
  }

  // async addMoney(balance: number, walletId: number) {
  //   const wallet = await this.walletRepository.find({ id: walletId });
  // }

  // async removeMoney(balance: number) {}
}
