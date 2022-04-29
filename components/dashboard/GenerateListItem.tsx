import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Collapse from "@mui/material/Collapse";

export function GenerateListItem({ listItems, setListItems, title, id }: any) {
  const [checked, setChecked] = React.useState(false);
  const [deleted, setDeleted] = React.useState(false);

  const deleteItem = () => {
    fetch("https://api.smartlist.tech/v2/lists/delete-item/", {
      method: "POST",
      body: new URLSearchParams({
        id: id
      })
    });
    setDeleted(true);
  };
  return (
    <Collapse in={!deleted}>
      <ListItem
        key={Math.random().toString()}
        sx={{ py: 0, m: 0 }}
        disablePadding
      >
        <ListItemButton
          sx={{ py: 0, borderRadius: 3, transition: "none" }}
          dense
        >
          <ListItemIcon>
            <Checkbox
              onClick={() => {
                deleteItem();
                setChecked(true);
              }}
              edge="start"
              checked={checked}
            />
          </ListItemIcon>
          <ListItemText primary={title} />
        </ListItemButton>
      </ListItem>
    </Collapse>
  );
}
