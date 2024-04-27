type ButtonType = 'submit' | 'reset' | 'button' | undefined;

interface ButtonProps {
  type: ButtonType;
  styles: string | undefined;
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, styles, text, onClick }) => {
  return (
    <button type={type} className={styles} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
