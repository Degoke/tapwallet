import { EntityRepository, Repository } from 'typeorm';
import { Admin } from '../entities/admin.entity';

@EntityRepository(Admin)
export class AdminRepository extends Repository<Admin> {
  findByEmail(email: string) {
    return this.findOne({ email });
  }

  findById(id: number) {
    return this.findOne({ id });
  }

  findByPhoneNumber(phoneNumber: string) {
    return this.findOne({ phoneNumber });
  }
}
