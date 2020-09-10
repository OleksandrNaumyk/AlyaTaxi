export interface TripInterface {
  _id: string;
  start: string;
  finish: string;
  length: number;
  cost?: number;
  commission?: number;
  id_user?: number;
  id_driver?: number;
  comment?: string;
  status_trip?: number;
  date_start?: string;
  date_finish?: string;
}
