import { DietEnum } from '../enums/DietEnums';
import { ExerciseExpEnum, ExerciseFreqEnum } from '../enums/ExerciseExp';
import { FastingFrequencyEnum } from '../enums/FastingFreqEnum';
import { GenderEnum } from '../enums/GenderEnums';
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
};
