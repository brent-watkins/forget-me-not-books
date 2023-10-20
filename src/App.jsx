import React from "react";

import { Container } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import {
  createBrowserRouter,
  RouterProvider  
} from "react-router-dom";

import { theme } from "./assets/ColorTheme";

import NavBar from "./common/components/NavBar";

import Home from "./pages/public/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  }
]);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container disableGutters maxWidth={false} sx={{ paddingTop: 8 }}>
        <NavBar />
        <RouterProvider router={router} />
      </Container>
    </ThemeProvider>
  )
}
