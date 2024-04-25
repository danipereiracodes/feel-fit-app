import { UseStepsEnum } from '../types/enums/UseStepsEnums';

export const enumToSelectOptions = (enumObject: UseStepsEnum) => {
  return Object.keys(enumObject).map((key) => ({
    value: enumObject[key as keyof typeof enumObject],
    name: key,
  }));
};
