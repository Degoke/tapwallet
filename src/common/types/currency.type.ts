export enum Currency {
  NGN = 'NGN',
}

export type CurrencyType = keyof Record<Currency, string>;
