import { useState, useCallback } from "react";
import { Logo, Button } from "../../atoms";
import { DropdownMenu, MobileVerticalMenu } from "../../molecules/";
import MenuIcon from "@mui/icons-material/Menu";
import { Button as MuiButton, Drawer, Box } from "@mui/material";

// --- Datos para los menús desplegables ---
const featuresItems = [
  { label: "No monthly fees", href: "#" },
  { label: "The App", href: "#" },
  { label: "Debit card", href: "#" },
  { label: "Chores & Allowances", href: "#" },
  { label: "Good habits, gamified", href: "#" },
  { label: "Money management", href: "#" },
  { label: "Safety", href: "#" },
];
const resourcesItems = [
  { label: "Learning Hub", href: "#" },
  { label: "Free tools", href: "#" },
];

export const Header = () => {
  // --- Estado y funciones para el Drawer (menú móvil) ---
  const [open, setOpen] = useState(false);
  const handleClose = useCallback(() => setOpen(false), []);
  const toggle = useCallback(() => setOpen((prev) => !prev), []);

 

  // --- Estilos unificados para todos los enlaces de navegación ---
  const navLinkStyles = {
    color: "#3f4947",
    fontWeight: 500,
    lineHeight: "24px",
    fontSize: "14px",
    textTransform: "none",
    padding: "18px 24px",
    display: "block",
    textAlign: "left",
    ":hover": { backgroundColor: "transparent", color: "#006a61" },
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-auto px-0 md:px-10">
      <div className="relative flex h-[56px] md:h-[64px] w-full md:max-w-[1200px] flex-row items-center justify-between bg-[#f5faf8bf] backdrop-blur-lg pl-[20px] pr-[16px] rounded-none mt-0 mx-0  py-[8px] md:rounded-[100px] md:mt-6 md:mx-0 md:pl-[24px] md:pr-[8px] lg:mx-auto lg:pt-[8px] lg:pr-[16px] lg:pl-[24px] lg:pb-[8px]">
        <div className="flex flex-1  items-center h-full  justify-end md:justify-between">
          {/* Lado Izquierdo: Logo */}
          <a href="#">
            <Logo className="bg-transparent self-center mt-0 float-left no-underline relative md:pl-0 md:self-auto" />
          </a>

          <div className="flex flex-row flex-1 justify-end items-center h-auto static w-auto :bg-transparent">
            {/*el div de abajo es hidden por defecto, se muestra en lg y mayores*/}
            <nav className="hidden top-0 lg:flex lg:flex-row lg:static lg:float-right">

              {/* Contenedor para enlaces con separador */}
              <div className="flex flex-col lg:flex-row flex-initial justify-start items-center no-underline">
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

          {/* Modal que se abre en mobile al dar click al boton de menú */}
          <Drawer
            id="top-drawer"
            anchor="top"
            open={open}
            onClose={handleClose}
            ModalProps={{
              keepMounted: true,
              disableScrollLock: false, // cuando se abre el modal, desactivar el scroll del body
              disableAutoFocus: true,
            }}
            slotProps={{
              paper: {
                sx: {
                  backgroundColor: "transparent",
                  top: "4rem",
                  height: "calc(100vh - 4rem)",
                  overflow: "auto",
                  display: "flex",
                  flexDirection: "column",
                  width: "100%",
                  padding: "0 65px",
                  borderTop: "none",
                  boxShadow: "none",
                },
              },
              backdrop: { sx: { backgroundColor: "transparent" } },
            }}
          >
            {/* Contenido del Drawer */}

            <nav className="bg-[#f5f7f7] backdrop-blur-[16px] lg:rounded-[12px] mt-[8px] w-full [10px] lg:flex lg:flex-col">
              <MobileVerticalMenu textHeader="Features" items={featuresItems} />
              <MobileVerticalMenu
                textHeader="Resources"
                items={resourcesItems}
              />
              <MuiButton sx={navLinkStyles}>Why Modak</MuiButton>
              <MuiButton sx={navLinkStyles}>About us</MuiButton>
              <MuiButton sx={navLinkStyles}>FAQ</MuiButton>
              <Box className="px-[24px] pt-[12px] pb-[24px] ">
                <Button variant="primary" className="w-full">Log in</Button>
              </Box>

            </nav>
          </Drawer>

          {/* --- Botón de Menú Móvil (Hamburguesa) --- */}
          <div className=" lg:hidden  cursor-pointer">
            <MuiButton
              onClick={toggle}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-haspopup="dialog"
              aria-controls="top-drawer"
              aria-expanded={open || undefined}
              sx={{  borderRadius:"16px", padding: "12px", minWidth: "auto", backgroundColor: open ? "#8bb0ab" : "transparent", }}

            > 
              <MenuIcon sx={{color:"#3f4947", fontWeight:"400", fontSize:"24px"}}/>
            </MuiButton>
          </div>

        </div>
      </div>
    </header>
  );
};
