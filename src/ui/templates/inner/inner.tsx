// src/ui/templates/Inner.tsx
import { type ComponentProps, type ElementType } from 'react';

type InnerProps<T extends ElementType> = {
  as?: T;
  children: React.ReactNode;
  className?: string;
} & ComponentProps<T>;

export const Inner = <T extends ElementType = 'div'>({
  as,
  children,
  className = '',
  ...props
}: InnerProps<T>) => {
  const Component = as || 'div';
  const combinedClasses = `flex justify-between flex-col mx-auto  px-4 sm:px-6 lg:px-8 ${className}`;

  return (
    <Component className={combinedClasses} {...props}>
      {children}
    </Component>
  );
};