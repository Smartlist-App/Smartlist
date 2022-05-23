import React, { useEffect } from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Avatar from "@mui/material/Avatar";
import { deepOrange } from "@mui/material/colors";
import IconButton from "@mui/material/IconButton";
import Skeleton from "@mui/material/Skeleton";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import ListItem from "@mui/material/ListItem";
import Settings from "../Settings/index";

const drawerBleeding = 0;

const Root = styled("div")(({ theme }) => ({
  height: "100%",
}));

function Accounts({ setOpen }: any) {
  return (
    <List sx={{ width: "100%", bgcolor: "transparent" }}>
      <Avatar
        alt="Remy Sharp"
        src={global.session.user.image}
        sx={{ mx: "auto", width: "100px", height: "100px" }}
      />
      <ListItem
        secondaryAction={
          <div onClick={() => setOpen(false)}>
            <Settings />
          </div>
        }
      >
        <ListItemText
          sx={{
            pt: 2,
          }}
          primary={
            <Typography
              variant="h5"
              sx={{ fontWeight: "800", textAlign: "center" }}
            >
              {global.session && global.session.user.name}
            </Typography>
          }
          secondary={
            <Typography
              sx={{ fontWeight: "600", textAlign: "center", mt: 1 }}
              variant="body2"
              color="text.primary"
            >
              {global.session && global.session.user.email}
            </Typography>
          }
        />
      </ListItem>
    </List>
  );
}

export function ProfileMenu(props: any) {
  const { window } = props;
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    document.documentElement.classList[open ? "add" : "remove"](
      "prevent-scroll"
    );
    document.querySelector(`meta[name="theme-color"]`) &&
      document
        .querySelector(`meta[name="theme-color"]`)!
        .setAttribute(
          "content",
          open
            ? global.theme === "dark"
              ? "#101010"
              : "#808080"
            : global.theme === "dark"
            ? "#101010"
            : "#fff"
        );
  }, [open]);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: "auto",
            overflow: "visible",
          },
        }}
      />
      <Tooltip title="My account" placement="bottom-end">
        <IconButton
          disableRipple
          onClick={toggleDrawer(true)}
          color="inherit"
          aria-label="open drawer."
          edge="end"
          sx={{
            ml: 0,
            transform: "scale(.8)",
            transition: "none",
            color: "#404040",
            "&:hover": { color: "#000" },
          }}
        >
          {global.session ? (
            <Avatar
              sx={{
                fontSize: "15px",
                bgcolor: deepOrange[500],
                transform: "scale(1.2)",
              }}
              src={global.session.user.image}
            />
          ) : (
            <Skeleton
              variant="circular"
              animation="wave"
              width={40}
              height={40}
            />
          )}
        </IconButton>
      </Tooltip>
      <SwipeableDrawer
        container={container}
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        sx={{
          "& .MuiBackdrop-root": {
            opacity: { sm: "0!important" },
          },
        }}
        ModalProps={{
          keepMounted: true,
        }}
        PaperProps={{
          elevation: 4,
          sx: {
            background: "rgba(255,255,255,.8)",
            backdropFilter: "blur(10px)",
            p: 3,
            py: 5,
            boxShadow: `0 25px 50px -12px rgba(0, 0, 0, 0.25)`,
            width: {
              xs: "calc(100vw - 30px)",
              sm: "400px",
            },
            mb: "10px",
            ml: {
              xs: "10px",
              sm: "auto",
            },
            borderRadius: "15px",
            mx: "auto",
            position: "fixed",
            top: "70px",
            bottom: "auto",
            left: "auto",
            right: "15px",
          },
        }}
      >
        <Accounts setOpen={setOpen} />
      </SwipeableDrawer>
    </Root>
  );
}