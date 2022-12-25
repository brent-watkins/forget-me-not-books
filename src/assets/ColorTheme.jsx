import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#e6c8aa", // Alternative lavendar color: dc8cf0
      contrastText: "#000000",
    },
    secondary: {
      main: "#5ab9fa",
      contrastText: "#000000",
    },
    error: {
      main: "#c80000",
      contrastText: "ffffff",
    },
    warning: {
      main: "#fac800",
      contrastText: "#000000",
    },
    info: {
      main: "#00aaf0",
      contrastText: "#000000",
    },
    success: {
      main: "#009600",
      contrastText: "#000000",
    },
  },
});
