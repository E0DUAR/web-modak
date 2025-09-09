type LogoProps = {
    className?: string;
};

const Logo = ({ className = '' }: LogoProps) => {
    return (
        <div className={`${className}`}>
          <img src="../../../public/img/logo.svg" alt="logo Modak" />
        </div>
    );
};

export default Logo;