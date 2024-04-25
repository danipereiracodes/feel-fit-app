import { DietEnum } from './DietEnums';
import { ExerciseExpEnum, ExerciseFreqEnum, FitnessGoal } from './ExerciseExp';
import { FastingFrequencyEnum } from './FastingFreqEnum';
import { GenderEnum } from './GenderEnums';

export type UseStepsEnum =
  | typeof GenderEnum
  | typeof DietEnum
  | typeof FastingFrequencyEnum
  | typeof ExerciseExpEnum
  | typeof ExerciseFreqEnum
  | typeof FitnessGoal;
