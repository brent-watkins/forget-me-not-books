import React from "react";

import Container from "@mui/material/Container";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import Error from "./pages/Error";
import Home from "./pages/Home";
import NavBar from "./components/common/NavBar";
import { theme } from "./assets/ColorTheme";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
]);

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Container disableGutters maxWidth={false} sx={{ paddingTop: 10 }}>
        <RouterProvider router={router} />
      </Container>
    </ThemeProvider>
  );
}
