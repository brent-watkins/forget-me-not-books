import React, { useCallback, useState } from "react";

import { Home, Info, LocalFlorist, Menu } from "@mui/icons-material";
import {
  AppBar,
  Button,
  Container,
  Drawer,
  Divider,
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

import {
  SHOW_ON_DESKTOP_ONLY_SX,
  SHOW_ON_MOBILE_ONLY_SX,
  SHOW_ON_TABLET_ONLY_SX,
} from "../helpers/constants";

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const getHref = useCallback((navItem) => {
    switch (navItem) {
      case "About":
        return "/about";
      case "Home":
        return "/";
      default:
        return "/"; // Temporary path until "Not Found" page is created
    }
  }, []);

  const handleToggleDrawer = useCallback(
    () => setDrawerOpen((prev) => !prev),
    []
  );
  const renderNavItemIcons = useCallback((navItem) => {
    let icon = null;

    navItem === "About"
      ? (icon = <Info />)
      : navItem === "Home"
      ? (icon = <Home />)
      : (icon = null);

    return icon;
  }, []);

  const publicNavItems = ["Home", "About"];

  const shownNavItems = publicNavItems;

  return (
    <Container disableGutters maxWidth={false}>
      <AppBar component="nav">
        <Toolbar disableGutters>
          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <IconButton
                aria-label="Open Drawer"
                color="inherit"
                onClick={handleToggleDrawer}
                sx={SHOW_ON_MOBILE_ONLY_SX}
              >
                <Menu />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                aria-label="Go To Homepage"
                color="secondary"
                href={getHref("Home")}
              >
                <LocalFlorist fontSize="large" />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography color="text">Forget Me Not Books</Typography>
            </Grid>
            {shownNavItems.map((navItem) => (
              <Grid item key={navItem}>
                <Button
                  color="text"
                  href={getHref(navItem)}
                  sx={SHOW_ON_DESKTOP_ONLY_SX}
                >
                  {navItem}
                </Button>
                <Tooltip arrow disableInteractive title={navItem}>
                  <IconButton
                    aria-label={`Go To ${navItem} Page`}
                    color="text"
                    href={getHref(navItem)}
                    sx={SHOW_ON_TABLET_ONLY_SX}
                  >
                    {renderNavItemIcons(navItem)}
                  </IconButton>
                </Tooltip>
              </Grid>
            ))}
          </Grid>
        </Toolbar>
        <Drawer
          ModalProps={{ keepMounted: true }}
          onClose={handleToggleDrawer}
          open={drawerOpen}
          sx={SHOW_ON_MOBILE_ONLY_SX}
          variant="temporary"
        >
          <Typography p={2}>Forget Me Not Books</Typography>
          <Divider />
          <List>
            {shownNavItems.map((navItem) => (
              <ListItem key={navItem} disablePadding>
                <ListItemButton
                  href={getHref(navItem)}
                  sx={{ textAlign: "center" }}
                >
                  {renderNavItemIcons(navItem)}
                  <ListItemText primary={navItem} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>
    </Container>
  );
}
