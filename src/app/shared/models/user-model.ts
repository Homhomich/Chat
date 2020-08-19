export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

export interface User {
  id?: number;
  username: string;
  password: number;
  gender: Gender;
  birthday: string;
  phone: string;
  email: string;
}
