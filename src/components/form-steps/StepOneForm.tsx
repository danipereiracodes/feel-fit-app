import { useForm, SubmitHandler } from 'react-hook-form';

enum GenderEnum {
  FEMALE = 'Female',
  MALE = 'Male',
  NOBIN = 'No Binary',
  RNS = 'Rather not say',
}

const enumToSelectOptions = (genderEnumObject: typeof GenderEnum) => {
  return Object.keys(genderEnumObject).map((key) => ({
    value: genderEnumObject[key as keyof typeof genderEnumObject],
    label: key,
  }));
};

const genderOptions = enumToSelectOptions(GenderEnum);

interface Inputs {
  age: number;
  weight: number;
  height: number;
  gender: GenderEnum[];
}

const StepOneForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    /* watch, */
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
  };

  return (
    <>
      <form
        className='grid grid-cols-1 grid-rows-4 gap-4 text-black'
        onSubmit={handleSubmit(onSubmit)}
      >
        <select defaultValue={'Female'} {...register('gender')}>
          {genderOptions.map((option) => (
            <option key={option.label}>{option.value}</option>
          ))}
        </select>
        <input
          type='number'
          defaultValue={14}
          {...register('age', { min: 16, max: 100 })}
        />
        <input
          type='number'
          defaultValue={30}
          {...register('weight', { min: 30, max: 200 })}
        />

        <input
          type='number'
          defaultValue={100}
          {...register('height', { min: 100, max: 230 })}
        />
        <button
          type='submit'
          className='bg-bright-secondary rounded-xl py-2 px-4 text-white font-normal text-lg'
        >
          Next Step
        </button>
      </form>
    </>
  );
};

export default StepOneForm;
