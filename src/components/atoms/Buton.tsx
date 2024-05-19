type ButtonType = 'submit' | 'reset' | 'button' | undefined;

interface ButtonProps {
  type: ButtonType;

  text: string;
  onClick?: () => void;
  className: string | undefined;
}

const Button: React.FC<ButtonProps> = ({ type, text, onClick, className }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
