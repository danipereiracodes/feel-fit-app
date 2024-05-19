import { UseFormRegister } from 'react-hook-form';
import { InputValues } from '../../types/InputTypes';

type ValidationRules = {
  required: string | false | undefined;
  pattern: {
    value: RegExp;
    message: string;
  };
};

interface InputProps {
  name: string;
  register: UseFormRegister<InputValues>;

  onBlurHandler?: (e: React.FocusEvent<HTMLInputElement>) => void;
  validationRules: ValidationRules;
  placeholder: string;

  type: string;
}

const Input: React.FC<InputProps> = ({
  type,
  name,
  validationRules,
  register,
  onBlurHandler,
  placeholder,
}) => {
  return (
    <input
      type={type}
      {...register(name as keyof InputValues, validationRules)}
      onBlur={onBlurHandler}
      placeholder={placeholder}
      className={`${type === 'text' ? 'input__text' : 'input__number'}`}
    />
  );
};

export default Input;
