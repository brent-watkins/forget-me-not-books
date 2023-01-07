import React, { useCallback, useState } from "react";

import AddCircleIcon from "@mui/icons-material/AddCircle";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import Backdrop from "@mui/material/Backdrop";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DescriptionIcon from "@mui/icons-material/Description";
import Divider from "@mui/material/Divider";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import TextField from "@mui/material/TextField";

export default function Create() {
  const [actionsOpen, setActionsOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [bookTitle, setBookTitle] = useState("");
  const [pageToAdd, setPageToAdd] = useState("Photo");

  const handleChangeTitle = useCallback((event) => {
    setBookTitle(event.target.value);
  }, []);
  const handleCloseActions = useCallback(() => {
    setActionsOpen(false);
  }, []);
  const handleOpenActions = useCallback(() => {
    setActionsOpen(true);
  }, []);
  const handleCloseDrawer = useCallback(() => {
    setDrawerOpen(false);
  }, []);
  const handleOpenDrawer = useCallback(() => {
    setDrawerOpen(true);
  }, []);
  const handleChangePageToAdd = useCallback((event) => {
    setPageToAdd(event.target.value);
  }, []);

  const actions = [
    { icon: <DescriptionIcon />, name: "Text" },
    { icon: <AddPhotoAlternateIcon />, name: "Photo" },
    { icon: <AutoAwesomeMosaicIcon />, name: "Collage" },
  ];
  const iOS =
    typeof navigator !== "undefined" &&
    /iPad|iPhone|iPod/.test(navigator.userAgent);

  return (
    <>
      <IconButton onClick={handleOpenDrawer}>
        <ChevronRightIcon />
      </IconButton>
      <SwipeableDrawer
        disableDiscovery={iOS}
        onClose={handleCloseDrawer}
        onOpen={handleOpenDrawer}
        open={drawerOpen}
        PaperProps={{ sx: { minWidth: "20%", p: 1 } }}
        variant="temporary"
      >
        <Grid
          alignItems="stretch"
          container
          direction="column"
          justifyContent="space-evenly"
          spacing={2}
        >
          <Grid item>
            <IconButton onClick={handleCloseDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Divider>Title</Divider>
          </Grid>
          <Grid item>
            <TextField
              error={bookTitle.length === 0}
              helperText={
                bookTitle.length === 0 ? "You can't have a blank title." : ""
              }
              id="book-title"
              fullWidth
              label="Book Title"
              onChange={handleChangeTitle}
              placeholder="Your Book Title"
              required
              value={bookTitle}
            />
          </Grid>
          <Grid item>
            <Divider>Pages</Divider>
          </Grid>
          <Grid
            alignItems="flex-end"
            container
            direction="row"
            item
            justifyContent="space-between"
          >
            <Grid item>
              <FormControl fullWidth sx={{ minWidth: 100 }}>
                <InputLabel id="add-page-select-label">Add a Page</InputLabel>
                <Select
                  fullWidth
                  id="add-page-select"
                  label="Add a Page"
                  labelId="add-page-select-label"
                  onChange={handleChangePageToAdd}
                  value={pageToAdd}
                >
                  {actions.map((action) => (
                    <MenuItem key={action.name} value={action.name}>
                      {action.name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item>
              <IconButton size="large">
                <AddCircleIcon fontSize="inherit" />
              </IconButton>
            </Grid>
          </Grid>
          <Grid item>{/* Drag and Drop component will go here */}</Grid>
        </Grid>
      </SwipeableDrawer>
      <Backdrop open={actionsOpen} />
      <SpeedDial
        ariaLabel="SpeedDial tooltip example"
        sx={{ position: "absolute", bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
        onClose={handleCloseActions}
        onOpen={handleOpenActions}
        open={actionsOpen}
      >
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            tooltipOpen
            onClick={handleCloseActions}
          />
        ))}
      </SpeedDial>
    </>
  );
}
