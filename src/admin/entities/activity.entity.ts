// import {
//   ViewEntity,
//   ViewColumn,
//   CreateDateColumn,
//   UpdateDateColumn,
//   Connection,
// } from 'typeorm';

// @ViewEntity({
//   expression:
//     'SELECT  type, amount, balance, remarks, ownerid, createdat, updatedat FROM airtime UNION SELECT type, amount, balance, remarks, ownerid, createdat, updatedat FROM electricitybill UNION SELECT type, amount, balance, remarks, ownerid, createdat, updatedat FROM tvsubscription',
// })
// export class Activity {
//   @ViewColumn()
//   type: string;

//   @ViewColumn()
//   amount: string;

//   @ViewColumn()
//   balance: string;

//   @ViewColumn()
//   remarks: string;

//   @ViewColumn()
//   ownerid: string;

//   @ViewColumn()
//   createdat: Date;

//   @ViewColumn()
//   updatedat: Date;
// }
