import React from "react";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

export default function Login() {
  return (
    <Grid container justifyContent="center">
      <Grid
        alignItems="center"
        container
        direction="column"
        item
        justifyContent="center"
        p={2}
        spacing={1}
        width={{ xs: "100%", sm: "50%", md: "30%" }}
      >
        <Grid item>
          <Typography fontSize="10rem">
            <AccountCircleIcon fontSize="inherit" />
          </Typography>
        </Grid>
        <Grid item>
          <Typography fontSize="2rem" variant="h1">
            Log In
          </Typography>
        </Grid>
        <Grid container direction="column" item spacing={1}>
          <Grid item>
            <Typography>Username</Typography>
          </Grid>
          <Grid item>
            <TextField fullWidth size="small" />
          </Grid>
          <Grid item>
            <Typography>Password</Typography>
          </Grid>
          <Grid item>
            <TextField fullWidth size="small" type="password" />
          </Grid>
          <Grid item>
            <Button fullWidth variant="contained">
              Log In
            </Button>
          </Grid>
        </Grid>
        <Grid item>
          <Button color="secondary">I forgot my username or password.</Button>
        </Grid>
        <Grid item>
          <Typography>Don&apos;t have an account?</Typography>
        </Grid>
        <Grid item>
          <Button color="secondary">Create an account here.</Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
