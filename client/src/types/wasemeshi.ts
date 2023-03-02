export interface Wasemeshi {
  _id: string;
  title: string;
  image: string | null;
  themeColor: string;
  category: string;
  openTime1: number;
  closeTime1: number;
  openTime2: number;
  closeTime2: number;
  regularDayOff: Array<number>;
  price: number;
  timesToVisit: string;
  desc: string;
}