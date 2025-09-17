import { useState } from "react";
import { Logo, Button } from "../../atoms"; // Tu Button personalizado de atoms
import { DropdownMenu } from "../../molecules/";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import { Button as MuiButton } from "@mui/material"; // Button de MUI renombrado

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
    fontSize: "14px",
    textTransform: 'none',
    padding: "18px 24px",
    display: "block",
    ":hover": { backgroundColor: "transparent", color: "#006a61" },
  };

  return (
    <header className="bg-[green] fixed inset-x-0 top-0 z-50 px-4 md:px-10">
      <div className="bg-[red] relative mx-auto mt-0 flex h-[64px] max-w-[1200px] flex-row flex-wrap items-center justify-between rounded-none bg-[#f5faf8bf] py-2 pr-4 pl-6 backdrop-blur-xl md:mt-6 md:rounded-[100px] md:pr-[8px] md:pl-[24px]">
        <div className="bg-[blue] flex flex-1 justify-between items-center h-full">
          {/* Lado Izquierdo: Logo */}
          <a href="#"><Logo className="float-left relative" /></a>
          
          <div className="bg-[yellow] flex flex-row flex-1 justify-end items-center">
            <nav className="bg-cyan-300 flex flex-row static float-right">

                {/* Contenedor para enlaces con separador */}
                <div className="bg-[beige] flex flex-row flex-initial justify-start items-center">
                  <DropdownMenu triggerText="Features" items={featuresItems} />
                  <DropdownMenu triggerText="Resources" items={resourcesItems} />
                  <MuiButton sx={navLinkStyles}>Why Modak</MuiButton>
                  <MuiButton sx={navLinkStyles}>About us</MuiButton>
                  <MuiButton sx={{...navLinkStyles, borderRight: 'none'}}>FAQ</MuiButton>
                </div>

                {/* Contenedor para botones de acción */}
                <div className="flex flex-initial self-center mr-[8px]">
                  <Button variant="primary">Log in</Button>
                </div>

            </nav>

            <Button variant="secondary">Get started</Button>
          </div>




          {/* --- Botón de Menú Móvil (Hamburguesa) --- */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
              className="text-gray-800"
            >
              {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
          
        </div>        
 
      </div>

      {/* --- Menú Desplegable para Móvil con Animación --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden bg-white lg:hidden" // Damos un fondo al menú móvil
          >
            {/* ... Tu código actual para el menú móvil está bien ... */}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};