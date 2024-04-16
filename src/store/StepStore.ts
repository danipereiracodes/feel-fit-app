import { create } from 'zustand';
import { InputValues } from '../types/InputTypes';
import { GenderEnum } from '../enums/GenderEnums';

interface IStep {
  step: number;
  addStep: (newStep: number) => void;
  data: InputValues;
  updateData: (newData: InputValues) => void;
}

export const useStepStore = create<IStep>((set) => ({
  step: 0,
  addStep: (newStep: number) => set({ step: newStep }),
  data: {
    age: 0,
    weight: 0,
    height: 0,
    gender: [GenderEnum.NONE],
  },

  updateData: (newData: InputValues) =>
    set((state) => ({ data: { ...state.data, ...newData } })),
}));
