import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./pages/Routes";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import AppTheme from "./styles/appTheme";
import { useStylesBase } from "./styles/stylesBase";

function App() {
  const classesBase = useStylesBase();

  return (
    <div className="App">
      <ThemeProvider theme={AppTheme}>
        <CssBaseline />
        <div className={classesBase.overrides}>
          <Routes />
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
