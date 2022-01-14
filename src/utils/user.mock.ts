/* eslint-disable prefer-const */
import User from 'src/user/entities/user.entity';
import Wallet from 'src/wallet/entities/wallet.entity';

let userData: User;
let walletData: Wallet;

walletData = {
  id: 1,
  balance: 0,
  owner: userData,
  type: 'NAIRA',
  createdDate: new Date(),
  updatedDate: new Date(),
};

userData = {
  id: 1,
  firstName: 'Adegoke',
  lastName: 'Adewoye',
  password: 'password',
  email: 'adewoye@adegoke.comn',
  phoneNumber: '08000000000',
  isEmailVerified: false,
  isIdentityVerified: false,
  isPhoneNumberVerified: false,
  isBvnVerified: false,
  isSuspended: false,
  accounts: [],
  wallet: walletData,
  createdDate: new Date(),
  updatedDate: new Date(),
};

const userMocks = { userData, walletData };

export default userMocks;
