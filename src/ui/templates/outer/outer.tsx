import { type ComponentProps } from "react";

type OuterProps = {
  children: React.ReactNode;
  className?: string;
} & ComponentProps<"section">;

export const Outer = ({ children, className = "", ...props }: OuterProps) => {
  return (
    <section className={`w-full ${className}`} {...props}>
      {children}
    </section>
  );
};
