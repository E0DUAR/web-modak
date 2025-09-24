import { ListSubheader } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";

type listHeader = { label: string; href: string };
type MobileVerticalMenuProps = { textHeader: string; items: listHeader[] };



  const HeaderStyles = {
    backgroundColor: "transparent",
    color: "#3f4947",
    fontWeight: 500,
    lineHeight: "24px",
    fontSize: "14px",
    textTransform: "none",
    padding: "18px 24px",
    display: "block",
    textAlign: 'left',
  };

    const itemsStyles = {
    backgroundColor: "transparent",
    color: "#3f4947",
    fontWeight: 500,
    lineHeight: "24px",
    fontSize: "14px",
    textTransform: "none",
    display: "block",
    textAlign: 'left',
  };

export const MobileVerticalMenu = ({ textHeader, items, }: MobileVerticalMenuProps) => {
  return (
    <div>
      <div>
        <List>
          <ListSubheader  sx={HeaderStyles} >{textHeader}</ListSubheader>

          {items.map((item) => (
            <ListItemButton component="a" href={item.href} key={item.label}>
              <ListItemText sx={itemsStyles}>{item.label}</ListItemText>
            </ListItemButton>
          ))}

        </List>
      </div>
    </div>
  );
};
