import { createTheme } from "@material-ui/core/styles";
import { purple, red, blue } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: blue[500],
    },
    secondary: {
      main: purple[500],
    },
    error: {
      main: red[500],
    },
    overDue: {
      main: red[500],
    },
    background: {
      default: "#fff",
    },
    success: {
      main: "#bac778",
    },
  },
});

export default theme;
