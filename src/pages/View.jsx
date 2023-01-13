import React, { useCallback, useEffect, useState } from "react";

import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import Select from "@mui/material/Select";
import ShareIcon from "@mui/icons-material/Share";

export default function View() {
  const [allBooks, setAllBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState("");

  const handleChangeSelectedBook = useCallback(
    (event) => {
      setSelectedBook(
        allBooks.find((book) => book.title === event.target.value)
      );
    },
    [allBooks]
  );

  // Fetch all the customer's books here
  useEffect(() => {
    setAllBooks([]);
  }, []);

  return (
    <Grid
      alignItems="center"
      container
      direction="column"
      justifyContent="center"
    >
      <Grid item>
        <FormControl fullWidth sx={{ minWidth: 200 }}>
          <InputLabel id="select-a-book-select-label">Select a Book</InputLabel>
          <Select
            fullWidth
            id="select-a-book-select"
            label="Select a Book"
            labelId="select-a-book-select-label"
            onChange={handleChangeSelectedBook}
            value={selectedBook?.title ?? ""}
          >
            {allBooks.map((book) => (
              <MenuItem key={book.title} value={book.title}>
                {book.title}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        {selectedBook !== "" ? (
          <Button endIcon={<ShareIcon />}>Share</Button>
        ) : null}
      </Grid>
      <Grid item>
        {selectedBook !== "" ? (
          <Pagination
            count={selectedBook?.pages?.length ?? 0}
            showFirstButton
            showLastButton
          />
        ) : null}
      </Grid>
    </Grid>
  );
}
