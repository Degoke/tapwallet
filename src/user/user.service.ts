import {
  forwardRef,
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import Wallet from 'src/wallet/entities/wallet.entity';
import { WalletService } from 'src/wallet/wallet.service';
import { Connection, Not, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import User from './entities/user.entity';
import { Tvsubscription } from '../tvsubscription/entities/tvsubscription.entity';
import { UserInterface } from './interfaces/User.interface';
import { ReturnTypeContainer } from '../common/containers/Container.entity';
import * as crypto from 'crypto';
import * as bcrypt from 'bcrypt';
import { SmsService } from 'src/sms/sms.service';
import { ConfigService } from '@nestjs/config';
import { EmailService } from 'src/email/email.service';
import { object } from 'joi';
import { UserPermission } from '../common/types/user-permissions.interface';
import { AuthService } from 'src/auth/auth.service';
import { ReferralService } from 'src/referral/referral.service';
import { Electricitybill } from 'src/electricitybill/entities/electricitybill.entity';
import { Role } from 'src/common/types/user-role.type';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
    private readonly walletService: WalletService,
    private readonly smsService: SmsService,
    private readonly configService: ConfigService,
    private readonly emailService: EmailService,
    private connection: Connection,
    private readonly referralService: ReferralService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const queryRunner = this.connection.createQueryRunner();
    try {
      const { email, phoneNumber, referralCode } = createUserDto;

      const emailAlreadyExists = await this.userRepository.findOne({ email });

      const phoneNumberAlreadyExists = await this.userRepository.findOne({
        phoneNumber,
      });

      if (emailAlreadyExists) {
        throw new HttpException('Email Already in use', HttpStatus.CONFLICT);
      }

      if (phoneNumberAlreadyExists) {
        throw new HttpException(
          'Phone Number Already in use',
          HttpStatus.CONFLICT,
        );
      }

      let referrerId;

      if (referralCode) {
        referrerId = await this.verifyReferralCode(referralCode);
      }

      // make this into a transaction
      const hashedPassword = await bcrypt.hash(createUserDto.password, 10);

      const code = await this.createReferralCode(createUserDto.firstName);

      await queryRunner.connect();
      await queryRunner.startTransaction();

      try {
        const wallet = new Wallet();
        const newUser = await queryRunner.manager.create(User, {
          ...createUserDto,
          password: hashedPassword,
          referralCode: code,
          role: Role.Level_2,
          wallet,
        });

        await queryRunner.manager.save(User, newUser);

        if (referralCode) {
          await this.referralService.createReferral(
            { referrerId, userId: newUser.id },
            queryRunner,
          );
        }

        await this.emailService.sendVerificationCode(
          newUser.email,
          queryRunner,
        );

        if (referralCode) {
        }

        await queryRunner.commitTransaction();
        return newUser;
      } catch (error) {
        await queryRunner.rollbackTransaction();
        throw error;
      }
    } catch (error) {
      throw error;
    }
  }

  async findByEmail(email: string): Promise<ReturnTypeContainer<any>> {
    try {
      const user = await this.userRepository.findOne(
        { email },
        {
          relations: [
            'wallet',
            'transfers',
            'transactions',
            'accounts',
            'airtimeActivities',
            'mobileDataActivities',
            'electricityActivities',
            'tvSubscriptionActivities',
          ],
        },
      );
      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      return {
        message: 'na GOKE DO AM 0',
        data: user,
      };
    } catch (error) {
      throw error;
    }
  }
  async findById(id: number) {
    try {
      return await this.userRepository.findOne(id, {
        relations: [
          'wallet',
          'transfers',
          'transactions',
          'accounts',
          'airtimeActivities',
        ],
      });
    } catch (error) {
      throw error;
    }
  }

  async find() {
    try {
      return await this.userRepository.find({
        relations: ['wallet', 'accounts', 'transactions', 'transfers'],
      });
    } catch (error) {
      throw error;
    }
  }

  async findByPhone(phoneNumber: string): Promise<ReturnTypeContainer<any>> {
    try {
      const user = await this.userRepository.findOne(
        { phoneNumber },
        {
          relations: ['wallet'],
        },
      );
      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      return {
        message: 'SUCCESS',
        data: user,
      };
    } catch (error) {
      throw error;
    }
  }

  async findByFirstName(firstName: string): Promise<ReturnTypeContainer<any>> {
    try {
      const user = await this.userRepository.findOne(
        { firstName },
        {
          relations: ['wallet'],
        },
      );
      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      return {
        message: 'SUCCESS',
        data: user,
      };
    } catch (error) {
      throw error;
    }
  }
  async findByLastName(lastName: string): Promise<ReturnTypeContainer<any>> {
    try {
      const user = await this.userRepository.findOne(
        { lastName },
        {
          relations: ['wallet'],
        },
      );
      if (!user) {
        throw new HttpException('User not found', HttpStatus.NOT_FOUND);
      }
      return {
        message: 'SUCCESS',
        data: user,
      };
    } catch (error) {
      throw error;
    }
  }

  async getByEmail(email) {
    return await this.userRepository.findOne({ email });
  }
  async createReferralCode(firstName) {
    try {
      const hash = await crypto.randomBytes(4).toString('hex').substring(0, 3);
      return `${firstName}${hash}`;
    } catch (error) {
      throw error;
    }
  }

  async markPhonenumberAsConfirmed(id) {
    try {
      return this.userRepository.update(id, {
        isPhoneNumberVerified: true,
      });
    } catch (error) {}
  }

  async markEmailAsConfirmed(email) {
    try {
      return this.userRepository.update(
        { email },
        {
          isEmailVerified: true,
        },
      );
    } catch (error) {
      throw error;
    }
  }

  async verifyEmail(code, email) {
    try {
      await this.emailService.verifyMail(code, email);

      await this.markEmailAsConfirmed(email);

      return {
        message: 'Email Verified Successfully',
      };
    } catch (error) {}
  }

  async initiatePhoneNumberVerification(phoneNumber: string) {
    try {
      return this.smsService.sendPhoneNumberOtp(phoneNumber);
    } catch (error) {
      throw error;
    }
  }

  async verifyPhoneNumberOtp(
    phoneNumber: string,
    verificationCode: string,
    id: number,
  ) {
    try {
      const data = await this.smsService.verifyPhoneNumberOtp(
        phoneNumber,
        verificationCode,
      );

      await this.markPhonenumberAsConfirmed(id);
      return data;
    } catch (error) {
      throw error;
    }
  }

  async delete(id) {
    return this.userRepository.delete(id);
  }

  async setPin(email: string, pin: number) {
    return await this.userRepository.update({ email }, { pin });
  }

  async verifyReferralCode(referralCode: string) {
    try {
      const user = await this.userRepository.findOne({ referralCode });
      if (!user) {
        throw new HttpException('Invalid referralCode', HttpStatus.BAD_REQUEST);
      }
      return user.id;
    } catch (error) {
      throw error;
    }
  }

  async markAsAdmin(email: string) {
    try {
      await this.userRepository.update({ email }, { role: Role.Admin });
    } catch (error) {
      throw error;
    }
  }

  async getTotalNumberOfUsers() {
    try {
      const totalUsers = await this.userRepository.count({
        role: Not(Role.Admin),
      });

      return { totalUsers };
    } catch (error) {
      throw error;
    }
  }
}
