import React from "react";

import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function Home() {
  return (
    <Grid
      alignItems="center"
      container
      direction="column"
      justifyContent="center"
      spacing={4}
    >
      <Grid item>
        <Typography
          fontSize={{ xs: "2rem", sm: "4rem", md: "6rem" }}
          variant="h1"
        >
          Forget Me Not Books
        </Typography>
      </Grid>
      <Grid item>
        <Typography fontSize={{ xs: "1rem", sm: "2rem" }} variant="h4">
          For life&apos;s memories you&apos;ll always want to remember
        </Typography>
      </Grid>
      <Grid
        alignItems={{ xs: "center", sm: "stretch" }}
        container
        direction={{ xs: "column", sm: "row" }}
        item
        justifyContent="center"
      >
        <Grid
          border="solid black"
          container
          direction="column"
          item
          p={2}
          xs={4}
        >
          <Grid item>
            <Typography
              fontSize={{ xs: "1.5rem", sm: "2rem" }}
              textAlign="center"
              variant="h6"
            >
              Select a Template
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              Choose from templates such as Baby, Family, and Travel, create
              your own template, or create a book page by page.
            </Typography>
          </Grid>
        </Grid>
        <Grid
          border="solid black"
          container
          direction="column"
          item
          p={2}
          xs={4}
        >
          <Grid item>
            <Typography
              fontSize={{ xs: "1.5rem", sm: "2rem" }}
              textAlign="center"
              variant="h6"
            >
              Save Your Memories
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              Each page of your memory book can contain pictures, words, or a
              combination of both! Each template has text prompts that you can
              include to help inspire what to write about. You can also create a
              custom collage to display your pictures your way!
            </Typography>
          </Grid>
        </Grid>
        <Grid
          border="solid black"
          container
          direction="column"
          item
          p={2}
          xs={4}
        >
          <Grid item>
            <Typography
              fontSize={{ xs: "1.5rem", sm: "2rem" }}
              textAlign="center"
              variant="h6"
            >
              Share Your Books
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              Once you are proud of your Forget Me Not Book, you can share that
              book through a shareable link.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Button color="primary" href="/create" size="large" variant="contained">
          Get Started
        </Button>
      </Grid>
    </Grid>
  );
}
