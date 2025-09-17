import type { ComponentProps, PropsWithChildren } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

type ButtonProps = PropsWithChildren<{

  variant?: ButtonVariant;
  className?: string;

}> & ComponentProps<'button'>;

export const Button = ({
  variant = 'primary',
  children,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) => {
  
const baseStyles = 'flex flex-row w-auto h-[48px] self-center justify-center items-center mr-[0px] py-[10px] px-[24px] border-0 rounded-full text-sm font-semibold text-center cursor-pointer';

  const variantStyles = {

    primary: 'bg-[#cce8e3] text-[#006a61] hover:bg-[#cce8e3]',
    secondary: 'bg-[#006a61] text-white hover:bg-[#006a61]',
    tertiary: 'px-12 bg-white text-black hover:bg-white'

  } satisfies Record<ButtonVariant, string>;

  const combinedClassName = [baseStyles, variantStyles[variant], className]
    .filter(Boolean)
    .join(' ');
    
  return (
    <button className={combinedClassName} type={type} {...props} > {children} </button>
  );

};