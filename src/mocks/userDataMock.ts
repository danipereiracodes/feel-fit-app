import { DietEnum } from '../types/enums/DietEnums';
import {
  ExerciseExpEnum,
  ExerciseFreqEnum,
  FitnessGoal,
} from '../types/enums/ExerciseExp';
import { FastingFrequencyEnum } from '../types/enums/FastingFreqEnum';
import { GenderEnum } from '../types/enums/GenderEnums';
import { InputValues } from '../types/InputTypes';

export const mockInputValues: InputValues = {
  name: 'John',
  lastname: 'Doe',
  allergies: 'Peanuts',
  diet: [DietEnum.VEGAN],
  age: 30,
  height: 180,
  weight: 75,
  gender: [GenderEnum.MALE],
  fasting: true,
  fastingFreq: [FastingFrequencyEnum.SIXTEEN],
  injuries: null,
  exerciseFreq: [ExerciseFreqEnum.EVERYDAY],
  exerciseExp: [ExerciseExpEnum.BEGINNER],
  goal: [FitnessGoal.GENERALFITNESS],
};
