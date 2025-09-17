import React from "react"; // Importamos React para usar React.cloneElement
import { Logo } from "../../atoms/";
import { Outer, Inner } from "../../templates/";

// Importamos los iconos necesarios
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import RedditIcon from "@mui/icons-material/Reddit";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TikTokIcon from "@mui/icons-material/MusicNote"; // Placeholder

// --- Componentes Internos ---

const FooterLinkColumn = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) => (
  <div>
    <h3 className="mb-6 text-[18px] font-semibold text-[#cce8e3]">{title}</h3>
    <ul className="space-y-4">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="text-sm font-normal text-[#cce8e3]/90 hover:text-white hover:underline"
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

const SocialLink = ({
  label,
  href,
  icon,
}: {
  label: string;
  href: string;
  icon: React.ReactElement; // Se espera un elemento React para poder clonarlo
}) => (
  <a
    href={href}
    aria-label={label}
    className="flex flex-col items-center gap-2 text-[#cce8e3] transition hover:text-white"
  >
    {React.cloneElement(icon)}

    {/* Forzamos el tamaño de fuente a 9px y el peso a 400 (font-normal) */}
    <span className="text-[9px] font-normal">{label}</span>
  </a>
);

// --- Componente Principal del Footer ---

export const Footer = () => {
  // Datos de los enlaces
  const featureLinks = [
    { label: "No Monthly fees", href: "#" },
    { label: "The App", href: "#" },
    { label: "Debit card", href: "#" },
    { label: "Chores & Allowance", href: "#" },
    { label: "Good habits, gamified", href: "#" },
    { label: "Savings", href: "#" },
    { label: "Money management", href: "#" },
    { label: "Safety", href: "#" },
  ];
  const companyLinks = [
    { label: "Why Modak", href: "#" },
    { label: "About us", href: "#" },
    { label: "Legal", href: "#" },
    { label: "Terms and Conditions", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Contact Us", href: "#" },
  ];
  const resourceLinks = [
    { label: "Learning Hub", href: "#" },
    { label: "Wall of Gratitude", href: "#" },
    { label: "Modak Vs Greenlight", href: "#" },
    { label: "Modak Vs Current", href: "#" },
    { label: "FAQ", href: "#" },
    { label: "Modak Vs Acorns Early", href: "#" },
  ];
  const socialLinks = [
    { label: "Instagram", href: "#", icon: <InstagramIcon /> },
    { label: "TikTok", href: "#", icon: <TikTokIcon /> },
    { label: "Youtube", href: "#", icon: <YouTubeIcon /> },
    { label: "Reddit", href: "#", icon: <RedditIcon /> },
    { label: "Facebook", href: "#", icon: <FacebookIcon /> },
    { label: "Twitter", href: "#", icon: <TwitterIcon /> },
    { label: "LinkedIn", href: "#", icon: <LinkedInIcon /> },
  ];

  return (
    <Outer as="footer" className="bg-[#3c4947] flex flex-col justify-center items-center py-[88px] px-[64px]">
      <Inner>
        <div className="py-20">
          {/* --- SECCIÓN 1: Links Grid con 12 columnas para control de espaciado --- */}
          <div className="grid grid-cols-2 items-start gap-x-6 gap-y-12 md:grid-cols-4 lg:grid-cols-12">
            
            {/* Columna 1: Logo */}
            <div className="col-span-2 lg:col-span-2">
              <Logo variant="white" className="w-40"/>
            </div>

            {/* Spacer: Un div invisible para crear el espacio extra */}
            <div className="hidden lg:block lg:col-span-1" />

            {/* Columna 2: Features */}
            <div className="lg:col-span-2"> 
              <FooterLinkColumn title="Features" links={featureLinks} />
            </div>
            
            {/* Columna 3: Company */}
            <div className="lg:col-span-2"> 
              <FooterLinkColumn title="Company & Legal" links={companyLinks} />
            </div>
            
            {/* Columna 4: Resources */}
            <div className="lg:col-span-2"> 
              <FooterLinkColumn title="Resources" links={resourceLinks} />
            </div>

            {/* Columna 5: Redes Sociales */}
            <div className="lg:col-span-3">
              <h3 className="mb-6 text-[18px] font-semibold text-[#cce8e3]">
                Stay Tuned
              </h3>
              {/* Grid de 4 columnas para los iconos */}
              <div className="grid grid-cols-4 gap-x-1 gap-y-4">
                {socialLinks.map((link) => (
                  <SocialLink key={link.label} {...link} />
                ))}
              </div>
            </div>
          </div>

          <hr className="my-16 border-white/10" />

          {/* --- SECCIÓN 2: Descargos de responsabilidad Legal --- */}
          <div className="space-y-4 text-xs text-[#cce8e3]/70">
            <p>
              Deposit account and the Modak Visa® debit card issued by Legend
              Bank, N.A., FDIC-insured.
            </p>
            <p>
              Modak is a financial technology company and not a FDIC insured
              financial institution.
            </p>
            <p>
              Funds deposited into a Deposit Account may be eligible for up to
              $250,000 of FDIC insurance. The FDIC's deposit insurance coverage
              only protects against the failure of an FDIC-insured depository
              institution.
            </p>
          </div>
        </div>

        {/* --- SECCIÓN FINAL: Copyright --- */}
        <div className="border-t border-white/10 pt-8 pb-12 text-center text-xs text-[#cce8e3]/70">
          <p>
            ©{new Date().getFullYear()} Modak | All Rights Reserved.
          </p>
        </div>
      </Inner>
    </Outer>
  );
};