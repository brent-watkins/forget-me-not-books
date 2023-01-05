import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <Grid
      alignItems="center"
      container
      direction="column"
      justifyContent="center"
      spacing={2}
    >
      <Grid item>
        <Typography fontSize={{ xs: "4rem" }} variant="h1">
          Oops!
        </Typography>
      </Grid>
      <Grid item>
        <Typography fontSize={{ xs: "2rem" }} textAlign="center" variant="h4">
          Sorry, an unexpected error has occurred:
        </Typography>
      </Grid>
      <Grid item>
        <Typography fontSize={{ xs: "1.5rem" }} textAlign="center" variant="h6">
          {error.statusText || error.message}
        </Typography>
      </Grid>
    </Grid>
  );
}
