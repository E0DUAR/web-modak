import { useState } from "react";
import { Logo, Button } from "../../atoms";
import { DropdownMenu } from "../../molecules/";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Button as MuiButton } from "@mui/material";

// --- Datos para los menús desplegables ---
const featuresItems = [
  { label: "No monthly fees", href: "#" },
  { label: "The App", href: "#" },
  { label: "Debit card", href: "#" },
];
const resourcesItems = [
  { label: "Learning Hub", href: "#" },
  { label: "Free tools", href: "#" },
];

export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // --- Estilos unificados para todos los enlaces de navegación ---
  const navLinkStyles = {
    color: "#3f4947",
    fontWeight: 500,
    lineHeight: "24px",
    fontSize: "14px",
    textTransform: "none",
    padding: "18px 24px",
    display: "block",
    ":hover": { backgroundColor: "transparent", color: "#006a61" },
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-0 md:px-10 lg:px-10">
      <div className="relative flex h-[64px] w-full max-w-[1200px] flex-row items-center justify-between bg-[#f5faf8bf] backdrop-blur-lg pl-[64px] pr-[48px] rounded-none mt-0 mx-0  py-[8px]   md:rounded-[100px] md:mt-6 md:mx-0 md:pl-[24px] md:pr-[8px] lg:mx-auto lg:pr-[16px] lg:pl-[24px]">
        <div className="flex flex-1  items-center h-full  justify-end md:justify-between">
          {/* Lado Izquierdo: Logo */}

          <a href="#">
            <Logo className="bg-transparent self-center mt-0 float-left no-underline relative pl-[10px] md:pl-0 md:self-auto" />
          </a>

          <div className="flex flex-row flex-1 justify-end items-center">
            <nav className="hidden lg:flex flex-row static float-right">
              {/* Contenedor para enlaces con separador */}
              <div className="flex flex-row flex-initial justify-start items-center no-underline">
                <DropdownMenu triggerText="Features" items={featuresItems} />
                <DropdownMenu triggerText="Resources" items={resourcesItems} />
                <MuiButton sx={navLinkStyles}>Why Modak</MuiButton>
                <MuiButton sx={navLinkStyles}>About us</MuiButton>
                <MuiButton sx={{ ...navLinkStyles, borderRight: "none" }}>
                  FAQ
                </MuiButton>
              </div>

              {/* Contenedor para botones de acción */}
              <div className="flex flex-initial self-center mr-[8px]">
                <Button variant="primary">Log in</Button>
              </div>
            </nav>

            <Button variant="secondary" className="hidden md:flex">
              Get started
            </Button>
          </div>

          {/* --- Botón de Menú Móvil (Hamburguesa) --- */}

          {/*          <div className=" md:block lg:hidden float-right cursor-pointer select-none relative p-[12px] text-[24px] text-[#262733] bg-transparent rounded-[16px]">            
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="text-[#3f4947]"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon fontSize="small" />}
            </button>
          </div> */}

          <div className="md:block lg:hidden float-right cursor-pointer select-none relative p-[12px] rounded-[16px] bg-transparent text-[#262733]">
            
            <button onClick={toggleMobileMenu} aria-label="Toggle menu" className="text-inherit">
              {isMobileMenuOpen ? (
                <CloseIcon sx={{ fontSize: 24 }} className="align-middle" />
              ) : (
                <MenuIcon sx={{ fontSize: 24 }} className="align-middle" />
              )}
            </button>

          </div>

        </div>
      </div>
    </header>
  );
};
