export enum Services {
  FLUTTERWAVE = 'flutterwave',
  TWILIO = 'twilio',
  PAYSTACK = 'paystack',
  VTPASS = 'vtpass',
  MONNIFY = 'monnify',
}

export type ServicesType = keyof Record<Services, string>;
