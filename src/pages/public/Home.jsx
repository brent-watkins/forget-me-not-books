import React from "react";

import { Button, Grid, Typography } from "@mui/material";

export default function Home() {
  return (
    <Grid alignItems="center" container direction="column" spacing={8}>
      <Grid item>
        <Typography align="center" component="h1" variant="h3">
          Welcome to Forget Me Not Books!
        </Typography>
      </Grid>
      <Grid item>
        <Typography align="center" component="p" variant="h5">
          Save your memories in beautiful, easily customizable layouts that you
          can share with family and friends!
        </Typography>
      </Grid>
      <Grid
        alignItems="center"
        container
        item
        justifyContent="center"
        spacing={2}
      >
        <Grid item>
          <Button href="/" size="large" variant="contained">
            Get Started
          </Button>
        </Grid>
        <Grid item>
          <Button
            color="secondary"
            href="/about"
            size="large"
            variant="contained"
          >
            Learn More
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
