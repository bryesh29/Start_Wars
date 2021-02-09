import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Routes from "./pages/Routes";
import { CssBaseline, ThemeProvider } from "@material-ui/core";
import AppTheme from "./styles/appTheme";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={AppTheme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </div>
  );
}

export default App;
