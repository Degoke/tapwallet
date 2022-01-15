import Wallet from '../../wallet/entities/wallet.entity';

export interface UserInterface {
  id?: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  phoneNumber: string;
  isEmailVerified: boolean;
  isIdentityVerified: boolean;
  isPhoneNumberVerified: boolean;
  isBvnVerified: boolean;
  isSuspended: boolean;
  wallet: Wallet;
}

export interface Users {
  User: object;
  Recipient: object;
}
