import { EntityRepository, Repository } from 'typeorm';
import { Transaction } from '../entities/transaction.entity';

@EntityRepository(Transaction)
export class TransactionRepository extends Repository<Transaction> {
  findByReference(reference: string) {
    return this.findOne({ reference });
  }

  findByMerchantId(merchantId: number) {
    return this.findOne({ merchantId });
  }
}
