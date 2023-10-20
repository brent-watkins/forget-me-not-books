import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    error: {
      main: "#C80000",
      contrastText: "#FFFFFF",
    },
    info: {
      main: "#00AAF0",
      contrastText: "#000000",
    },
    primary: {
      main: "#5AB9FA",
      contrastText: "#000000",
    },
    secondary: {
      main: "#FFA5F8",
      contrastText: "#000000",
    },
    success: {
      main: "#009600",
      contrastText: "#000000",
    },
    tertiary: {
      main: "#FFCA3F",
      contrastText: "#000000",
    },
    text: {
      main: "#000000",
      contrastText: "#FFFFFF",
    },
    warning: {
      main: "#FAC800",
      contrastText: "#000000",
    },
  },
});
