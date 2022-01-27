export enum BillCategories {
  AIRTIME = 'airtime',
  DATABUNDLE = 'data_bundle',
  INTERNET = 'internet',
  POWER = 'power',
  CABLES = 'cables',
}

export type BillCategoryType = keyof Record<BillCategories, string>;
