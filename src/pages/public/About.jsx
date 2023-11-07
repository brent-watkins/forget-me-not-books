import React from "react";

import { Divider, Grid, Link, Typography } from "@mui/material";

export default function About() {
  return (
    <Grid alignItems="center" container direction="column" spacing={2}>
      <Grid item>
        <Typography align="center" component="h1" variant="h3">
          About Forget Me Not Books
        </Typography>
        <Divider />
      </Grid>
      <Grid item>
        <Typography align="center" variant="h4">
          What is Forget Me Not Books?
        </Typography>
      </Grid>
      <Grid item>
        <Typography align="justify" marginX={3}>
          Forget Me Not Books is a start-up company aimed at helping you
          preserve memories in an easily customizable and shareable way. Whether
          you have words, pictures, videos, or a combination of them all, Forget
          Me Not Books is here to help you remember and cherish your memories
          forever as a digital book. Forget Me Not Books is perfect for baby
          books, family photo albums, travel or vacation memories, family
          history, and more! Our website is designed with ease and convenience
          in mind to make the entire process of remembering simple.
        </Typography>
      </Grid>
      <Grid item>
        <Typography align="center" variant="h4">
          What can I do with Forget Me Not Books?
        </Typography>
      </Grid>
      <Grid item>
        <Typography align="justify" marginX={3}>
          Forget Me Not Books allows you to create, edit, view, and share your
          memories from your phone, tablet, or computer. To help you begin
          saving your memories, Forget Me Not Books provides several different
          memory book templates you can start from, including an empty template
          if you want to create everything on your own. Each page of a memory
          book will allow you to add text, pictures, and videos and adjust the
          size and layout of your memories. If you want to type out memories,
          Forget Me Not Books offers text prompts to help spark your memory,
          whether you are writing about baby milestones, trip highlights, or
          family stories.
        </Typography>
      </Grid>
      <Grid item>
        <Typography align="justify" marginX={3}>
          Forget Me Not Books also provides easy sharing and collaborating
          options for your memory books. Each book will allow you to share a
          link with specific people you select, and you decide who can only view
          the book and who can make changes. So, whether you are sharing a baby
          book with your parents or working with a friend to collect all your
          vacation memories, Forget Me Not Books is here to help!
        </Typography>
      </Grid>
      <Grid item>
        <Typography align="center" variant="h4">
          The Forget Me Not Books Team
        </Typography>
      </Grid>
      <Grid item>
        <Typography align="justify" marginX={3}>
          Forget Me Not Books was created by Brent Watkins. You can see more of
          Brent&apos;s work at his GitHub profile&nbsp;
          <Link href="https://github.com/brent-watkins" target="_blank" rel="noopener noreferrer">
            here
          </Link>
          .
        </Typography>
      </Grid>
    </Grid>
  );
}
