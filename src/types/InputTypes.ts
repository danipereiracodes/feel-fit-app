import { GenderEnum } from '../enums/GenderEnums';

export interface InputValues {
  age: number;
  height: number;
  weight: number;
  gender: GenderEnum[];
}
