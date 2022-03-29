import { ViewEntity, ViewColumn, Connection } from 'typeorm';

@ViewEntity({
  expression:
    'SELECT  type, amount, balance, remarks, email, userid, walletid, createddate, updateddate FROM airtime_activity UNION SELECT type, amount, balance, remarks, email, userid, walletid, createddate, updateddate FROM electricity_bill_activity UNION SELECT type, amount, balance, remarks, email, userid, walletid, createddate, updateddate FROM tv_subscription_activity UNION SELECT type, amount, balance, remarks, email, userid, walletid, createddate, updateddate FROM mobile_data_activity',
})
export class Activity {
  @ViewColumn()
  type: string;

  @ViewColumn()
  amount: string;

  @ViewColumn()
  balance: string;

  @ViewColumn()
  remarks: string;

  @ViewColumn()
  email: string;

  @ViewColumn()
  userid: string;

  @ViewColumn()
  walletid: string;

  @ViewColumn()
  createddate: Date;

  @ViewColumn()
  updateddate: Date;
}
