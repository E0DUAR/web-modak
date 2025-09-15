// src/ui/templates/Inner.tsx
import { type ComponentProps } from 'react';

type InnerProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<'div'>;

const Inner = ({ children, className = '', ...props }: InnerProps) => {

  const combinedClasses = `mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`;

  return (
    <div className={combinedClasses} {...props}>
      {children}
    </div>
  );
};

export default Inner;