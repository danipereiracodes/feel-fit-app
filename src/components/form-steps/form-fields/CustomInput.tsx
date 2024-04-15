import { useForm } from 'react-hook-form';

interface CustomInputProps {
  label: string | null;
  name: string;
  type: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ type, label, name }) => {
  const { register } = useForm();

  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        {...register(name)}
        className='backdrop-blur-sm bg-white/30 px-2 py-1'
      />
    </>
  );
};

export default CustomInput;
