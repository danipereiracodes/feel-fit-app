import { DietEnum } from '../enums/DietEnums';
import { ExerciseExpEnum, ExerciseFreqEnum } from '../enums/ExerciseExp';
import { FastingFrequencyEnum } from '../enums/FastingFreqEnum';
import { GenderEnum } from '../enums/GenderEnums';

export interface InputValues {
  name: string;
  lastname: string | null;
  allergies: string;
  diet: DietEnum[];
  age: number;
  height: number;
  weight: number;
  gender: GenderEnum[];
  fasting: boolean;
  fastingFreq: FastingFrequencyEnum[];
  injuries: string | null;
  exerciseFreq: ExerciseFreqEnum[];
  exerciseExp: ExerciseExpEnum[];
}
