import React from "react";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <Container disableGutters maxWidth="xl" sx={{ p: 10 }}>
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item>
          <Typography component="h1" variant="h1">
            Oops!
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="h4" variant="h4">
            Sorry, an unexpected error has occurred:
          </Typography>
        </Grid>
        <Grid item>
          <Typography component="h6" variant="h6">
            {error.statusText || error.message}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}
