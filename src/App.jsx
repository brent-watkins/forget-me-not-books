import React from "react";

import Container from "@mui/material/Container";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";

import About from "./pages/About";
import Create from "./pages/Create";
import Error from "./pages/Error";
import Home from "./pages/Home";
import Login from "./pages/Login";
import NavBar from "./components/common/NavBar";
import { theme } from "./assets/ColorTheme";
import View from "./pages/View";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "/about",
    element: <About />,
    errorElement: <Error />,
  },
  {
    path: "/create",
    element: <Create />,
    errorElement: <Error />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <Error />,
  },
  {
    path: "/view",
    element: <View />,
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
