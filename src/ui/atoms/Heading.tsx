import type { ComponentProps, ElementType } from 'react';

type HeadingProps<T extends ElementType> = {
  as?: T; // Permite cambiar la etiqueta (h1, h2, etc.)
  className?: string;
  children: React.ReactNode;
} & ComponentProps<T>;

const Heading = <T extends ElementType = 'h1'>({
  as,
  children,
  className = '',
  ...props
}: HeadingProps<T>) => {
  const Component = as || 'h1';
  
  // Estilos base para los encabezados
  const baseStyles = 'font-bold';

  return (
    <Component className={`${baseStyles} ${className}`} {...props}>
      {children}
    </Component>
  );
};

export default Heading;