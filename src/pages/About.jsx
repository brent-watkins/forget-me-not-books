import React from "react";

import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function About() {
  return (
    <Grid
      alignItems="center"
      container
      direction="column"
      justifyContent="center"
      spacing={2}
    >
      <Grid item>
        <Typography
          fontSize={{ xs: "2rem", sm: "4rem", md: "6rem" }}
          variant="h1"
        >
          About
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="u" fontSize={{ xs: "1.5rem" }}>
          What is Forget Me Not Books?
        </Typography>
      </Grid>
      <Grid item>
        <Typography fontSize={{ xs: "1.25rem" }}>
          Forget Me Not Books is a web application aimed at preserving memories
          and moments in an easily customizable and shareable way. Memories can
          be saved as words, pictures, or videos, and a collection of memories
          can be shared through a custom URL. Forget Me Not Books is perfect for
          baby books, travel and vacation memories, family history, and more!
          With optional text prompts to inspire you what to write about and the
          ability to create customizable collages, Forget Me Not Books make the
          process of recording and viewing your memories simple and easy. Forget
          Me Not Books was created by{" "}
          <Typography
            component="a"
            fontSize={{ xs: "1.25rem" }}
            href="https://github.com/brent-watkins"
          >
            Brent Watkins
          </Typography>
          .
        </Typography>
      </Grid>
      <Grid item>
        <Typography component="u" fontSize={{ xs: "1.5rem" }}>
          How do I give feedback?
        </Typography>
      </Grid>
      <Grid item>
        <Typography fontSize={{ xs: "1.25rem" }}>
          If you have any feedback or suggestions for Forget Me Not Books,
          please create a new issue on the Forget Me Not Books{" "}
          <Typography
            component="a"
            fontSize={{ xs: "1.25rem" }}
            href="https://github.com/brent-watkins/forget-me-not-books/issues"
          >
            issues page
          </Typography>{" "}
          or{" "}
          <Typography
            component="a"
            fontSize={{ xs: "1.25rem" }}
            href="mailto:brent.n.watkins@gmail.com"
          >
            contact
          </Typography>{" "}
          Brent Watkins.
        </Typography>
      </Grid>
    </Grid>
  );
}
