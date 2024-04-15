import { create } from 'zustand';
import { type Inputs } from '../components/form-steps/CustomForm';
import { GenderEnum } from '../components/form-steps/CustomForm';

interface IStep {
  step: number;
  addStep: (newStep: number) => void;
  data: Inputs;
  updateData: (newData: Inputs) => void;
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

  updateData: (newData: Inputs) =>
    set((state) => ({ data: { ...state.data, ...newData } })),
}));
