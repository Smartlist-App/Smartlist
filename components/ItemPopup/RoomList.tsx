import React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Skeleton from "@mui/material/Skeleton";
import useSWR from "swr";
import toast from "react-hot-toast";

export function RoomList({ title, handleClose }: { title: string; handleClose: any; }) {
  const url = "https://api.smartlist.tech/v2/lists/";
  const { error, data }: any = useSWR(url, () => fetch(url, {
    method: "POST",
    body: new URLSearchParams({
      token: global.session && global.session.accessToken,
    }),
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  }).then((res) => res.json())
  );

  if (error) {
    return (
      <>
        Yikes! An error occured while trying to fetch your lists. Try reloading
        the page
      </>
    );
  }
  if (!data)
    return (
      <>
        {[...new Array(10)].map(() => (
          <Skeleton animation="wave" />
        ))}
      </>
    );
  return (
    <>
      <List sx={{ mt: -1 }}>
        {data.data.map((list: any) => (
          <ListItem disablePadding>
            <ListItemButton
              sx={{ borderRadius: 9, py: 0.5, px: 2 }}
              onClick={() => {
                fetch("https://api.smartlist.tech/v2/lists/create-item/", {
                  method: "POST",
                  body: new URLSearchParams({
                    token: global.session && global.session.accessToken,
                    parent: list.id,
                    title: title,
                    description: "",
                  }),
                })
                  .then((res) => res.json())
                  .then((res) => {
                    toast.success("Added item!");
                    handleClose();
                  });
              }}
            >
              <ListItemText primary={list.title} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
}
