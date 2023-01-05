import React, { useCallback, useMemo, useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import BookIcon from "@mui/icons-material/Book";
import Container from "@mui/material/Container";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import Grid from "@mui/material/Grid";
import HomeIcon from "@mui/icons-material/Home";
import IconButton from "@mui/material/IconButton";
import InfoIcon from "@mui/icons-material/Info";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function NavBar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const navItems = useMemo(
    () => ["Home", "Create New Book", "View Your Books", "About"],
    []
  );

  const handleToggleDrawer = useCallback(() => {
    setDrawerOpen((prev) => !prev);
  }, []);

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
                sx={{ display: { sm: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item>
              <Typography variant="h6">Forget Me Not Books</Typography>
            </Grid>
            {navItems.map((item) => (
              <Grid item key={item}>
                <Button
                  sx={{ color: "black", display: { xs: "none", md: "block" } }}
                >
                  {item}
                </Button>
                <IconButton
                  aria-label={item}
                  color="inherit"
                  sx={{ display: { xs: "none", sm: "block", md: "none" } }}
                >
                  {item === "Home" ? (
                    <HomeIcon />
                  ) : item === "Create New Book" ? (
                    <AddIcon />
                  ) : item === "View Your Books" ? (
                    <BookIcon />
                  ) : item === "About" ? (
                    <InfoIcon />
                  ) : null}
                </IconButton>
              </Grid>
            ))}
          </Grid>
        </Toolbar>
        <Drawer
          ModalProps={{ keepMounted: true }}
          onClose={handleToggleDrawer}
          open={drawerOpen}
          sx={{ display: { xs: "block", sm: "none" } }}
          variant="temporary"
        >
          <Typography sx={{ p: 2 }} variant="h5">
            Forget Me Not Books
          </Typography>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemButton sx={{ textAlign: "center" }}>
                  {item === "Home" ? (
                    <HomeIcon />
                  ) : item === "Create New Book" ? (
                    <AddIcon />
                  ) : item === "View Your Books" ? (
                    <BookIcon />
                  ) : item === "About" ? (
                    <InfoIcon />
                  ) : null}
                  <ListItemText primary={item} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>
      </AppBar>
    </Container>
  );
}
