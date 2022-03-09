import User from 'src/user/entities/user.entity';

export enum WALLETTYPE {
  NAIRA = 'Naira',
}

export type WalletType = WALLETTYPE;

export class CreateWalletDto {
  balance: number;
  type: WalletType;
  owner: User;
}
