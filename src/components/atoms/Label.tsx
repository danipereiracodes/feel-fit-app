import { ReactNode } from 'react';

interface LabelProps {
  children: ReactNode;
}

const Label: React.FC<LabelProps> = ({ children }) => {
  return <label>{children}</label>;
};

export default Label;
