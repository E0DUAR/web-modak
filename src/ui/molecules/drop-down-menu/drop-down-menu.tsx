import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box } from "@mui/material";

type DropdownItem = { label: string; href: string };
type DropdownMenuProps = { triggerText: string; items: DropdownItem[] };

export const DropdownMenu = ({ triggerText, items }: DropdownMenuProps) => {

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    // El contenedor ahora solo gestiona el evento onMouseLeave
    <div onMouseLeave={handleClose} className="text-left z-[900] mx-auto my-auto inline-block relative">

      <Button
        id={`dropdown-button-${triggerText}`}
        aria-controls={open ? `dropdown-menu-${triggerText}` : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onMouseEnter={handleOpen}
        disableRipple
        sx={{
          backgroundColor: "transparent",
          fontSize: "14px",
          lineHeight: "24px",
          padding: "8px 19px",
          fontWeight: 500,
          userSelect: 'none',
          cursor: 'pointer',
          justifyContent: 'flex-start',
          textAlign: 'left',
          whiteSpace: 'nowrap',
          position: 'relative',
          ":hover": { 
            backgroundColor: "rgba(0, 106, 97, 0.04)",
            color: "#006a61" 
          },
        }}
        endIcon={
          <KeyboardArrowDownIcon 
            sx={{ 
              backgroundColor: "transparent",
              width: '1.2rem',
              height: '1.2rem',
              lineHeight: '1',
              color: '#3f4947',
            }} 
          />
        }
      >
        <Box className={`${open ? "text-[#006a61]" : "text-[#3f4947]"}`}>
          {triggerText} 
        </Box>
      </Button>

      <Menu
        id={`dropdown-menu-${triggerText}`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock
        MenuListProps={{ 'aria-labelledby': `dropdown-button-${triggerText}`, onMouseLeave: handleClose }}
        slotProps={{
          paper: {
            sx: {
              // Efecto "Glassmorphism" refinado
              marginTop: '8px',
              borderRadius: "12px",
              boxShadow: "0 4px 16px rgba(21, 69, 64, 0.12)",
              backgroundColor: "rgba(244, 251, 249, 0.85)",
              backdropFilter: 'blur(8px)',
              border: '1px solid rgba(255, 255, 255, 0.5)',
            },
          },
        }}
      >
        {items.map((item) => (
          <MenuItem
            key={item.label}
            component="a"
            href={item.href}
            onClick={handleClose}
            disableRipple
            sx={{
              // Estilos de los items del menú refinados
              color: "#191c1b",
              fontWeight: 600,
              fontSize: "14px",
              padding: '10px 24px',
              lineHeight: '1.5',
              ":hover": { backgroundColor: "transparent", color: "#006a61" },
            }}
          >
            {item.label}
          </MenuItem>
        ))}
      </Menu>

    </div>
  );
};