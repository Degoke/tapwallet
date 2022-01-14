import User from 'src/user/entities/user.entity';

export type WalletType = 'NAIRA';

export class CreateWalletDto {
  balance: number;
  type: WalletType;
  owner: User;
}
