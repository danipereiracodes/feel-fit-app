import { create } from 'zustand';

interface IStep {
  step: number;
  addStep: (newStep: number) => void;
}

export const useStepStore = create<IStep>((set) => ({
  step: 0,
  addStep: (newStep: number) => set({ step: newStep }),
}));
