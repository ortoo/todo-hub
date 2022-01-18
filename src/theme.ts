import { createTheme, responsiveFontSizes, adaptV4Theme } from "@mui/material/styles";
import { red } from "@mui/material/colors";

// Create a theme instance.
let theme = createTheme(adaptV4Theme({
  palette: {
    primary: {
      main: "#60afdf",
    },
    secondary: {
      main: "#fefefe",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
}));

theme = responsiveFontSizes(theme);

export default theme;
