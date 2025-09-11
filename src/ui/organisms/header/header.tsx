// src/ui/organisms/Header.tsx
import { useState } from "react";
import { Logo, Button } from "../../atoms";
import { DropdownMenu } from "../../molecules/";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";



// Datos para los menús
const featuresItems = [
  { label: "No monthly fees", href: "#" },
  { label: "The App", href: "#" },
  { label: "Debit card", href: "#" },
];
const resourcesItems = [
  { label: "Learning Hub", href: "#" },
  { label: "Free tools", href: "#" },
];
const whyModakItems = [
  { label: "About us", href: "#" },
  { label: "FAQ", href: "#" },
];


export const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="relative z-10 bg-[#f6f6fa] px-4 py-3 text-white backdrop-blur-md sm:px-8">
      <div className="container mx-auto flex items-center justify-between">
        <Logo />

        {/* Navegación para Escritorio */}
        <nav className="hidden items-center gap-2 lg:flex">
          <DropdownMenu triggerText="Features" items={featuresItems} />
          <DropdownMenu triggerText="Resources" items={resourcesItems} />
          <DropdownMenu triggerText="Why Modak" items={whyModakItems} />
        </nav>

        {/* Botones de Acción para Escritorio */}
        <div className="hidden items-center gap-4 lg:flex">
          <Button variant="secondary">Log in</Button>
          <Button variant="primary">Get started</Button>
        </div>

        {/* Botón de Menú Móvil (Hamburguesa) */}
        <div className="lg:hidden">
          <button onClick={toggleMobileMenu} aria-label="Toggle menu">
            {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Menú Desplegable para Móvil */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute left-0 top-full mt-2 w-full bg-gray-900 p-4 lg:hidden"
          >
            <nav className="flex flex-col items-center gap-4">
              <DropdownMenu triggerText="Features" items={featuresItems} />
              <DropdownMenu triggerText="Resources" items={resourcesItems} />
              <DropdownMenu triggerText="Why Modak" items={whyModakItems} />
              <hr className="w-full border-gray-700" />
              <Button variant="secondary" className="w-full">
                Log in
              </Button>
              <Button variant="primary" className="w-full">
                Get started
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};