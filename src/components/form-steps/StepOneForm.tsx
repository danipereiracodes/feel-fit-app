/* eslint-disable react-refresh/only-export-components */
import { useForm, SubmitHandler } from 'react-hook-form';
import { useStepStore } from '../../store/StepStore';

//TODO: EXPORT TYPES AND ENUMS
export enum GenderEnum {
  NONE = ' ',
  FEMALE = 'Female',
  MALE = 'Male',
  NOBIN = 'No Binary',
  RNS = 'Rather not say',
}

export interface Inputs {
  age: number;
  weight: number;
  height: number;
  gender: GenderEnum[];
}

interface StepOneFormProps {
  title: string;
  gridCols: string;
  onNextStep: () => void;
}

const enumToSelectOptions = (genderEnumObject: typeof GenderEnum) => {
  return Object.keys(genderEnumObject).map((key) => ({
    value: genderEnumObject[key as keyof typeof genderEnumObject],
    label: key,
  }));
};

const genderOptions = enumToSelectOptions(GenderEnum);

const StepOneForm: React.FC<StepOneFormProps> = ({
  gridCols,
  title,
  onNextStep,
}) => {
  const {
    register,
    handleSubmit,
    /* watch, */
  } = useForm<Inputs>();

  const inputData = useStepStore((state) => state.data);
  const updateData = useStepStore((state) => state.updateData);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    updateData(data);
    onNextStep();
  };

  return (
    <form className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
      <fieldset
        className={`grid ${String(gridCols)} gap-8 text-black text-start`}
      >
        <legend>{title}</legend>

        <label htmlFor='gender'>Gender</label>
        <select
          id='gender'
          {...register('gender')}
          className='backdrop-blur-sm bg-white/30 px-2 py-1'
        >
          {' '}
          <option value={''}>Select</option>
          {genderOptions.map((option) => (
            <option key={option.label}>{option.value}</option>
          ))}
        </select>

        <label htmlFor='age'>Age</label>
        <input
          id='age'
          type='number'
          {...register('age')}
          className='backdrop-blur-sm bg-white/30 px-2 py-1'
        />
        <label htmlFor='weight'>Weight</label>
        <input
          id='weight'
          type='number'
          {...register('weight')}
          className='backdrop-blur-sm bg-white/30 px-2 py-1'
        />
        <label htmlFor='height'>Height</label>
        <input
          id='height'
          type='number'
          {...register('height')}
          className='backdrop-blur-sm bg-white/30 px-2 py-1'
        />

        <button
          type='submit'
          className='z-20 bg-bright-secondary rounded-xl py-2 text-white font-normal text-lg col-span-2 w-52 place-self-end'
        >
          Next step
        </button>
        {inputData && (
          <div>
            <ul>
              <li>{inputData.gender && inputData.gender}</li>
              <li>{inputData.age > 0 && inputData.age}</li>
              <li>{inputData.height > 0 && inputData.height}</li>
              <li>{inputData.weight > 0 && inputData.weight}</li>
            </ul>
          </div>
        )}
      </fieldset>
    </form>
  );
};

export default StepOneForm;
