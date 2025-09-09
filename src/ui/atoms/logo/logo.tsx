type LogoProps = {
    className?: string;
};

export const Logo = ({ className = '' }: LogoProps) => {
    return (
        <div className={`${className}`}>
          <img src="../../../public/img/logo.svg" alt="logo Modak" />
        </div>
    );
};