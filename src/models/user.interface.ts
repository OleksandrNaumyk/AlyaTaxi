export interface UserInterface {
  _id: string;
  name: string;
  surname: string;
  phone: string;
  password: string;
  age: number;
  photo?: string;
  rating?: number;
  date_add: string;
  status_id: string;
  city_id: string;
}