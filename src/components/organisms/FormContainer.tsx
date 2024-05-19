import { ReactNode } from 'react';

import ProgressBar from '../molecules/ProgressBar';

interface FormLayoutProps {
  children: ReactNode;
}

const FormContainer: React.FC<FormLayoutProps> = ({ children }) => {
  return (
    <div className='step'>
      {/* <ProgressBar /> */}

      {children}
    </div>
  );
};

export default FormContainer;
