import { create } from 'zustand';
import { InputValues } from '../types/InputTypes';

interface IStep {
  step: number;
  addStep: (newStep: number) => void;
  data: InputValues;
  updateData: (newData: InputValues) => void;
  updateFasting: (newFasting: boolean) => void;
}

const initialState = {
  name: '',
  lastname: '',
  allergies: '',
  age: 0,
  weight: 0,
  height: 0,
  gender: [],
  fasting: false,
  fastingFreq: [],
};

export const useStepStore = create<IStep>((set) => ({
  step: 0,
  addStep: (newStep: number) => set({ step: newStep }),
  data: initialState,

  updateData: (newData: InputValues) =>
    set((state) => ({ data: { ...state.data, ...newData } })),

  updateFasting: (newFasting: boolean) =>
    set((state) => ({ data: { ...state.data, fasting: newFasting } })),
}));
