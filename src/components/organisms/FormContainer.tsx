import { ReactNode } from 'react';

import ProgressBar from '../molecules/ProgressBar';

interface FormLayoutProps {
  children: ReactNode;
}

const FormContainer: React.FC<FormLayoutProps> = ({ children }) => {
  return (
    <div className='relative flex rounded-xl flex-col transition-opacity ease-in-out delay-150 z-20 bg-white/50 h-[650px] md:h-[450px] lg:w-[624px] lg:h-[400px] text-black text-lg'>
      <ProgressBar />

      {children}
    </div>
  );
};

export default FormContainer;
