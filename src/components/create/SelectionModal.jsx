import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";

import Button from "@mui/material/Button";
import ChildCareIcon from "@mui/icons-material/ChildCare";
import CreateIcon from "@mui/icons-material/Create";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import Groups2Icon from "@mui/icons-material/Groups2";
import InputLabel from "@mui/material/InputLabel";
import LuggageIcon from "@mui/icons-material/Luggage";
import MenuItem from "@mui/material/MenuItem";
import Modal from "@mui/material/Modal";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Select from "@mui/material/Select";
import SettingsIcon from "@mui/icons-material/Settings";
import Typography from "@mui/material/Typography";

import TemplateButton from "./TemplateButton";

export default function SelectionModal({ handleClose, open }) {
  const [bookOptions, setBookOptions] = useState([]);
  const [selectedBook, setSelectedBook] = useState("");
  const [selection, setSelection] = useState("");
  const [createType, setCreateType] = useState("new");

  const handleChangeBook = useCallback((event) => {
    setSelectedBook(event.target.value);
    setSelection(event.target.value);
  }, []);

  const handleChangeCreateType = useCallback((event) => {
    setCreateType(event.target.value);
    setSelectedBook("");
    setSelection("");
  }, []);

  const handleStart = useCallback(() => {
    // TODO: Set up the Create page based on `selection`
    handleClose();
  }, [handleClose]);

  // TODO: Fetch all books for a user
  useEffect(() => {
    setBookOptions([]);
  }, []);

  const containerStyle = {
    backgroundColor: "white",
    left: "50%",
    maxWidth: "75%",
    minHeight: "25%",
    minWidth: "50%",
    padding: "1%",
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
  };

  const templates = [
    { caption: "Baby", icon: <ChildCareIcon fontSize="large" /> },
    { caption: "Family", icon: <Groups2Icon fontSize="large" /> },
    { caption: "Trip", icon: <LuggageIcon fontSize="large" /> },
    { caption: "Custom", icon: <SettingsIcon fontSize="large" /> },
  ];

  return (
    <Modal onClose={handleClose} open={open}>
      <Grid container direction="column" spacing={1} sx={containerStyle}>
        <Grid item textAlign="center">
          <Typography fontSize="2rem" variant="h1">
            Select a Book To Work On
          </Typography>
        </Grid>
        <Grid item>
          <FormControl>
            <FormLabel id="create-selection-radio-group-label">
              Save memories in:
            </FormLabel>
            <RadioGroup
              aria-labelledby="create-selection-radio-group-label"
              name="select-an-option-radio-group"
              onChange={handleChangeCreateType}
              row
              value={createType}>
              <FormControlLabel
                control={<Radio />}
                label="A New Book"
                value="new"
              />
              <FormControlLabel
                control={<Radio />}
                label="A Previous Book"
                value="previous"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        {createType === "new" ? (
          <>
            <Grid item>
              <Typography fontSize="1.5rem" variant="h3">
                Create a New Book From a Template
              </Typography>
            </Grid>
            <Grid container item spacing={1}>
              {templates.map((template) => (
                <Grid item key={template.caption}>
                  <TemplateButton
                    caption={template.caption}
                    icon={template.icon}
                    isSelected={selection === template.caption}
                    setSelection={setSelection}
                  />
                </Grid>
              ))}
            </Grid>
            <Grid item>
              <Typography fontSize="1.5rem" variant="h3">
                Create an Empty New Book
              </Typography>
            </Grid>
            <Grid item>
              <TemplateButton
                caption="Empty"
                icon={<CreateIcon />}
                isSelected={selection === "Empty"}
                setSelection={setSelection}
              />
            </Grid>
          </>
        ) : (
          <>
            <Grid item>
              <Typography fontSize="1.5rem" variant="h3">
                Continue Working On a Book
              </Typography>
            </Grid>
            <Grid item>
              <FormControl fullWidth>
                <InputLabel id="previous-book-select-label">
                  Select a Book
                </InputLabel>
                <Select
                  fullWidth
                  id="previous-book-select"
                  label="Select a Book"
                  labelId="previous-book-select-label"
                  onChange={handleChangeBook}
                  value={selectedBook}>
                  {bookOptions.map((book) => (
                    <MenuItem key={book.title} value={book.title}>
                      {book.title}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </>
        )}
        <Grid item alignItems="flex-end">
          <Button
            disabled={selection === ""}
            onClick={handleStart}
            variant="contained">
            Start
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
}

SelectionModal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
