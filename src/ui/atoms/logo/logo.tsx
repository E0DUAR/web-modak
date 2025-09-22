type LogoVariant = 'primary' | 'white';

type LogoProps = {
  variant?: LogoVariant;
  className?: string;
};

const logoSources: Record<LogoVariant, string> = {
  primary: '/img/logo.svg',        // El logo principal de color
  white: '/img/logo-w.svg',    // Asumo que el logo blanco se llama así
};

export const Logo = ({ variant = 'primary', className = '' }: LogoProps) => {
  return (
    <div className={className}>
      <img 
        src={logoSources[variant]} 
        alt="Modak logo" 
        className="align-middle max-w-full border-0"
      />
    </div>
  );
};