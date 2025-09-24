import { ListSubheader, List, ListItemButton, ListItemText } from "@mui/material";

type listHeader = { label: string; href: string };
type MobileVerticalMenuProps = { textHeader: string; items: listHeader[] };

export const MobileVerticalMenu = ({ textHeader, items }: MobileVerticalMenuProps) => {

  const headerStyles = {
    backgroundColor: "transparent",
    color: "#3f4947",
    fontWeight: 500,
    lineHeight: "24px",
    fontSize: "14px",
    textTransform: "none",
    padding: "18px 32px",
    display: "block",
    textAlign: "left",
  };

  const itemTextStyles = {
    color: "#3f4947",
    fontWeight: 400,
    lineHeight: "24px",
    fontSize: "14px",
    textTransform: "none",
    ":hover": { backgroundColor: "transparent", color: "#006a61" },
  };

  const itemButtonStyles = {
    padding: "18px 32px",
     ":hover": { backgroundColor: "transparent"}
  };

  return (
    <div>
      <div>
        <List>
          <ListSubheader disableGutters sx={headerStyles}>
            {textHeader}
          </ListSubheader>

          {items.map((item) => (
            <ListItemButton  sx={itemButtonStyles} component="a" href={item.href} key={item.label}>
              <ListItemText slotProps={{ primary: { sx: itemTextStyles }}}> {item.label} </ListItemText>
            </ListItemButton>
          ))}
        </List>
      </div>
    </div>
  );
};