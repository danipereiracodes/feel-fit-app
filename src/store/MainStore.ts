import { create } from 'zustand';
import { InputValues } from '../types/InputTypes';

interface IStore {
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
  age: null,
  weight: null,
  height: null,
  gender: [],
  fasting: false,
  fastingFreq: [],
  injuries: '',
  diet: [],
  exerciseFreq: [],
  exerciseExp: [],
  goal: [],
};

export const useMainStore = create<IStore>((set) => ({
  step: 0,
  addStep: (newStep: number) => set({ step: newStep }),
  data: initialState,

  updateData: (newData: InputValues) =>
    set((state) => ({ data: { ...state.data, ...newData } })),

  updateFasting: (newFasting: boolean) =>
    set((state) => ({ data: { ...state.data, fasting: newFasting } })),
}));
