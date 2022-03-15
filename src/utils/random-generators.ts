import * as crypto from 'crypto';

export const getTransactionReference = async () => {
  const hash = await crypto.randomBytes(4).toString('hex').substring(0, 12);
  return `TM-${hash}`;
};

export const generateVerificationCode = async () => {
  const hash = await crypto.randomBytes(4).toString('hex').substring(0, 6);
  return hash;
};
export const getRequestId = async () => {
  const date = yyyymmdd();
  const hash = await crypto.randomBytes(4).toString('hex').substring(0, 9);
  return `${date}${hash}`;
};

function yyyymmdd() {
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth() + 1;
  const d = now.getDate();
  return '' + y + (m < 10 ? '0' : '') + m + (d < 10 ? '0' : '') + d;
}
