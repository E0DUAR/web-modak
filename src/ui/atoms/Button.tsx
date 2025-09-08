import type { ComponentProps, PropsWithChildren } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'tertiary';

type ButtonProps = PropsWithChildren<{
  variant?: ButtonVariant;
  className?: string;
}> & ComponentProps<'button'>;

const Button = ({
  variant = 'primary',
  children,
  className = '',
  type = 'button',
  ...props
}: ButtonProps) => {
  const baseStyles =
    'px-6 py-3 font-semibold rounded-full transition-colors duration-300 ease-in-out';

  const variantStyles = {
    primary:   'bg-[#cce8e3] text-[#006a61] hover:bg-[#cce8e3] cursor-pointer',
    secondary: 'bg-[#006a61] text-white hover:bg-[#006a61] cursor-pointer',
    tertiary:  'px-10 bg-white text-black hover:bg-gray-100 cursor-pointer'
  } satisfies Record<ButtonVariant, string>;

  const combinedClassName = [baseStyles, variantStyles[variant], className]
    .filter(Boolean)
    .join(' ');

  return (
    <button
      className={combinedClassName}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
