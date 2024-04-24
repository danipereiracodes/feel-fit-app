import { DietEnum } from '../enums/DietEnums';
import {
  ExerciseExpEnum,
  ExerciseFreqEnum,
  FitnessGoal,
} from '../enums/ExerciseExp';
import { FastingFrequencyEnum } from '../enums/FastingFreqEnum';
import { GenderEnum } from '../enums/GenderEnums';

export interface InputValues {
  name: string;
  lastname: string | null;
  allergies: string;
  diet: DietEnum[];
  age: number | null;
  height: number | null;
  weight: number | null;
  gender: GenderEnum[];
  fasting: boolean;
  fastingFreq: FastingFrequencyEnum[];
  injuries: string | null;
  exerciseFreq: ExerciseFreqEnum[];
  exerciseExp: ExerciseExpEnum[];
  goal: FitnessGoal[];
}
