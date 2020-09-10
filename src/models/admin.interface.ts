export interface AdminInterface {
  _id: string;
  name: string;
  surname: string;
  phone: string;
  password: string;
  age: number;
  photo?: string;
  city_id?: string;
}
