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
    <div onMouseLeave={handleClose} className="text-left z-[900] relative mx-auto flex flex-col justify-between items-start w-full lg:w-auto lg:inline-block">
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
          padding: "20px 16px",
          fontWeight: 500,
          userSelect: "none",
          cursor: "pointer",
          justifyContent: "flex-start",
          textAlign: "left",
          whiteSpace: "nowrap",
          position: "relative",
          color: open ? "#006a61" : "#3f4947",
          ":hover": {
            backgroundColor: "transparent",
            color: "#006a61",
          },
        }}
        endIcon={
          <KeyboardArrowDownIcon
            sx={{
              width: 18,
              height: 18,
              mr: 0.5,
              color: "currentColor",
            }}
          />
        }
      >
        <Box>{triggerText}</Box>
      </Button>

      <Menu
        id={`dropdown-menu-${triggerText}`}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        disableScrollLock
        autoFocus={false}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        MenuListProps={{
          "aria-labelledby": `dropdown-button-${triggerText}`,
          onMouseLeave: handleClose,
        }}
        slotProps={{
          paper: {
            sx: {
              mt: "-8px",
              zIndex: 10,
              borderRadius: "12px",
              WebkitBackdropFilter: "blur(24px)",
              backdropFilter: "blur(24px)",
              backgroundColor: "#f4fbf9bf",
              boxShadow: "0 0 16px #1545401f",
              minWidth: "143px",
              maxWidth: "calc(100vw - 32px)",
              overflow: "hidden",
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
              color: "#3f4947",
              padding: "24px 24px",
              fontSize: "14px",
              fontWeight: 600,
              verticalAlign: "top",
              textAlign: "left",
              whiteSpace: "nowrap", 
              marginLeft: "auto",
              marginRight: "auto",
              textDecoration: "none",
              position: "relative",
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