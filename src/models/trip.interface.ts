export interface TripInterface {
  _id: string;
  start: [x: string, y:string];
  finish: [x: string, y:string];
  length: number;
  cost?: number;
  commission?: number;
  id_user?: number;
  id_driver?: number;
  comment?: string;
  status_trip: number;
  date_start?: string;
  date_finish?: string;

}
