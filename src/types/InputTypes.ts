import { GenderEnum } from '../enums/GenderEnums';

export interface InputValues {
  name: string;
  lastname: string | null;
  allergies: string;
  age: number;
  height: number;
  weight: number;
  gender: GenderEnum[];
  fasting: boolean | undefined;
}
