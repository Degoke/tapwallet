/* eslint-disable prefer-const */
import User from 'src/user/entities/user.entity';
import Wallet from 'src/wallet/entities/wallet.entity';
import { Transaction } from 'src/transactions/entities/transaction.entity';
import { Transfer } from '../../transfers/entities/transfer.entity';

let userData: User;
let walletData: Wallet;
let transactionData: Transaction;
let transferData: Transfer;

walletData = {
  id: 1,
  balance: 0,
  owner: userData,
  type: 'NAIRA',
  createdDate: new Date(),
  updatedDate: new Date(),
};

transactionData = {
  id: 1,
  type: 'deposit',
  amount: 300,
  balance: 5000,
  remarks: 'debit transfer to precious adedibu',
  createdDate: new Date(),
  updatedDate: new Date(),
  user: userData,
};

transferData = {
  id: 1,
  type: 'credit',
  amount: 200,
  balance: 5000,
  remarks: 'debit transfer to precious adedibu',
  createdDate: new Date(),
  updatedDate: new Date(),
  user: userData,
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
  transfers: transferData,
  transactions: transactionData,
  createdDate: new Date(),
  updatedDate: new Date(),
  pin: 1234,
  referrals: [],
  referralCode: 'hhdf55679',
};

const userMocks = { userData, walletData, transactionData };

export default userMocks;
