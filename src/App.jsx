import React from "react";

import Container from "@mui/material/Container";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import About from "./pages/About";
import Create from "./pages/Create";
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
  {
    path: "/create",
    element: <Create />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
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
