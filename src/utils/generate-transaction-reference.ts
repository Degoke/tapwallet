import * as crypto from 'crypto';

export const getTransactionReference = async () => {
  const hash = await crypto.randomBytes(4).toString('hex').substring(0, 9);
  return `TM-${hash}`;
};

export const getRequestId = async () => {
  const date = yyyymmdd();
  const hash = await crypto.randomBytes(4).toString('hex').substring(0, 9);
  return `${date}${hash}`;
};

function yyyymmdd() {
  var now = new Date();
  var y = now.getFullYear();
  var m = now.getMonth() + 1;
  var d = now.getDate();
  return '' + y + (m < 10 ? '0' : '') + m + (d < 10 ? '0' : '') + d;
}
