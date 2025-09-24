import { ListSubheader, List, ListItemButton, ListItemText } from "@mui/material";

type listHeader = { label: string; href: string };
type MobileVerticalMenuProps = { textHeader: string; items: listHeader[] };

export const MobileVerticalMenu = ({ textHeader, items }: MobileVerticalMenuProps) => {

  const headerStyles = {
    backgroundColor: "#f5f7f7",
    color: "#3f4947",
    fontWeight: 500,
    lineHeight: "24px",
    fontSize: "14px",
    textTransform: "none",
    paddingTop: "5px",
    paddingBottom: "10px",
    paddingLeft: "24px",
    paddingRight: "24px",
    display: "block",
    textAlign: "left",
  };

  const itemTextStyles = {
    color: "#646867",
    fontWeight: 400,
    lineHeight: "24px",
    fontSize: "14px",
    textTransform: "none",
    ":hover": { backgroundColor: "#f5f7f7", color: "#006a61" },
  };

  const itemButtonStyles = {
      padding: "8px 24px",
     ":hover": { backgroundColor: "transparent"}
  };

  return (
    <div>
        <List>
          <ListSubheader disableSticky sx={headerStyles}>
            {textHeader}
          </ListSubheader>

          {items.map((item) => (
            <ListItemButton  sx={itemButtonStyles} component="a" href={item.href} key={item.label}>
              <ListItemText slotProps={{ primary: { sx: itemTextStyles }}}> {item.label} </ListItemText>
            </ListItemButton>
          ))}
        </List>
    </div>
  );
};