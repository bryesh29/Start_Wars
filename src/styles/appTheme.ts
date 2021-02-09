import { createMuiTheme, Theme } from "@material-ui/core";

const AppTheme: Theme = createMuiTheme({
  palette: {
    primary: {
      light: "#B2B6C5",
      main: "#3E64FF",
      dark: "#373F5E",
    },
    background: {
      default: "#f7f7f7",
      paper: "#fff",
    },
  },
});

export default AppTheme;
