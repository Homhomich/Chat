export enum Gender {
  MALE = 'MALE',
  FEMALE = 'FEMALE'
}

export interface User {
  id: number;
  username: string;
  password: string;
  gender: string;
  birthday: string;
  phone: string;
  email: string;
}
