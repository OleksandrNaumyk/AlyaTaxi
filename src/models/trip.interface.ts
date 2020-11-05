export interface TripInterface {
  _id: string;
  start: [x: string, y:string];
  finish: [x: string, y:string];
  length: number;
  cost?: number;
  commission?: number;
  userId: string;
  driverId?: string;
  comment?: string;
  status_trip: number;
  date_start?: string;
  date_finish?: string;

}
