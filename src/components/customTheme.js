import { createMuiTheme } from "@material-ui/core";

export const customTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#E8A317"
    },
    secondary: {
      main: "#E8A317 !important",
      contrastText: "#fff"
    },
    overrides: {
      button: {
        color: "#FFFFFF"
      }
    },
    zIndex: {
      mobileStepper: "1000"
    }
  }
});
