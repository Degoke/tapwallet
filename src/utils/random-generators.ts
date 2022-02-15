import * as crypto from 'crypto';

export const getTransactionReference = async () => {
  const hash = await crypto.randomBytes(4).toString('hex').substring(0, 9);
  return `TM-${hash}`;
};

export const generateVerificationCode = async () => {
  const hash = await crypto.randomBytes(4).toString('hex').substring(0, 6);
  return hash;
};
