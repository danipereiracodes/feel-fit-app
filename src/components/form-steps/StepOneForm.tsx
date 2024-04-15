import { useForm, SubmitHandler } from 'react-hook-form';

enum GenderEnum {
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
  onHandleSubmit: (data: Inputs) => void;
}

const enumToSelectOptions = (genderEnumObject: typeof GenderEnum) => {
  return Object.keys(genderEnumObject).map((key) => ({
    value: genderEnumObject[key as keyof typeof genderEnumObject],
    label: key,
  }));
};

const genderOptions = enumToSelectOptions(GenderEnum);

const StepOneForm: React.FC<StepOneFormProps> = ({
  onHandleSubmit,
  title,
  gridCols,
}) => {
  const {
    register,
    handleSubmit,
    /* watch, */
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    onHandleSubmit(data);
  };

  return (
    <section className='text-center'>
      <header className=' h-16 mb-8 border-b border-black text-2xl text-black flex items-center justify-center'>
        <h1>{title}</h1>
      </header>
      <form
        className={`grid ${String(gridCols)} gap-8 text-black text-start`}
        onSubmit={handleSubmit(onSubmit)}
      >
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
      </form>
    </section>
  );
};

export default StepOneForm;
