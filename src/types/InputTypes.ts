import { GenderEnum } from '../enums/GenderEnums';

export interface InputValues {
  name: string;
  lastname: string | null;
  age: number;
  height: number;
  weight: number;
  gender: GenderEnum[];
}
