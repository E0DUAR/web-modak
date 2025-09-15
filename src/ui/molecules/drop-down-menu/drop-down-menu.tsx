import { useState } from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

type DropdownItem = { label: string; href: string };
type DropdownMenuProps = { triggerText: string; items: DropdownItem[] };

export const DropdownMenu = ({ triggerText, items }: DropdownMenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div onMouseLeave={handleClose}>
      <Button
        id="dropdown-button"
        aria-controls={open ? "dropdown-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
        onMouseEnter={handleClick}
        disableRipple
        sx={{
          color: "#646867",
          fontWeight: "500",
          fontSize: "14px",
          lineHeight: "24px",
          ":hover": { backgroundColor: "transparent", color: "#006a61" },
        }}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {triggerText}
      </Button>

      <Menu
        id="dropdown-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        aria-labelledby="dropdown-button"
        // 👇 CAMBIO CLAVE AQUÍ
        // `MenuListProps` se ha ido. Ahora todo está dentro de `slotProps`.
        slotProps={{
          paper: {
            sx: {
              marginTop: '-8px', 
              borderRadius: "12px",
              boxShadow: "0 0 16px #1545401f;",
              backgroundColor: "#f4fbf9bf",
            },
          },
          // `MenuListProps` se convierte en el slot `list`
          list: {
            onMouseLeave: handleClose,
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
              color: "#191c1b",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "50px",
              paddingX: '16px',
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