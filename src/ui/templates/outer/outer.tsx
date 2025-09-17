import { type ComponentProps, type ElementType } from 'react';

// Usamos genéricos de TypeScript. T será el tipo del elemento HTML.
type OuterProps<T extends ElementType> = {
  as?: T; // Ahora la prop 'as' es aceptada
  children: React.ReactNode;
  className?: string;
} & ComponentProps<T>; // Heredamos todos los props del elemento HTML (ej. 'id', 'aria-label')

export const Outer = <T extends ElementType = 'section'>({
  as,
  children,
  className = '',
  ...props
}: OuterProps<T>) => {
  // Si se pasa la prop 'as', usamos ese componente. Si no, usamos 'section' por defecto.
  const Component = as || 'section';

  return (
    <Component className={`w-full ${className}`} {...props}>
      {children}
    </Component>
  );
};