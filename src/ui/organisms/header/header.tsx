import { useState } from "react";
import { Logo, Button } from "../../atoms"; // Tu Button personalizado de atoms
import { DropdownMenu } from "../../molecules/";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import { Button as MuiButton } from '@mui/material'; // Button de MUI renombrado

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

  const navLinkStyles = {
    color: '#646867',
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "24px",
    ":hover": { backgroundColor: "transparent", color: "#006a61" },  };

  return (
    <header className="sticky top-6 z-50 mx-auto max-w-7xl rounded-full bg-[#f6f6fa]/90 px-6 py-2 backdrop-blur-md ring-1 ring-black/5">
      
      {/* --- Contenedor Principal de Flexbox --- */}
      <div className="flex items-center justify-between">
        
        {/* Lado Izquierdo: Logo */}
        <Logo />

        {/* Lado Derecho: Contiene toda la navegación y botones (solo para escritorio) */}
        <nav className="hidden items-center gap-4 lg:flex">
          <DropdownMenu triggerText="Features" items={featuresItems} />
          <DropdownMenu triggerText="Resources" items={resourcesItems} />
          
          {/* Enlaces simples usando el Button de MUI renombrado */}
          <MuiButton sx={navLinkStyles}>Why Modak</MuiButton>
          <MuiButton sx={navLinkStyles}>About us</MuiButton>
          <MuiButton sx={navLinkStyles}>FAQ</MuiButton>

          {/* Botones de acción usando tu Button de `atoms` */}
          <Button variant="primary">Log in</Button>
          <Button variant="secondary">Get started</Button>
        </nav>

        {/* Botón de Menú Móvil (Hamburguesa) */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} aria-label="Toggle menu" className="text-gray-800">
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* --- Menú Desplegable para Móvil con Animación --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden lg:hidden"
          >
            <nav className="mt-4 flex flex-col items-start gap-2 border-t border-gray-200 pt-4">
              <DropdownMenu triggerText="Features" items={featuresItems} />
              <DropdownMenu triggerText="Resources" items={resourcesItems} />
              <MuiButton sx={{ ...navLinkStyles, justifyContent: 'flex-start' }}>Why Modak</MuiButton>
              <MuiButton sx={{ ...navLinkStyles, justifyContent: 'flex-start' }}>About us</MuiButton>
              <MuiButton sx={{ ...navLinkStyles, justifyContent: 'flex-start' }}>FAQ</MuiButton>
              
              <div className="mt-4 flex w-full flex-col gap-2 border-t border-gray-200 pt-4">
                 <Button variant="primary" className="!w-full">Log in</Button>
                 <Button variant="secondary" className="!w-full">Get started</Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};