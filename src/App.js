import React from "react";
import "./App.css";
import Home from "./components/Home";
import { ThemeProvider } from "@material-ui/core";
import { customTheme } from "./components/customTheme";

function App() {
  return (
    <div className="app">

        <ThemeProvider theme={customTheme}>
          <h1>Erxian Corner</h1>

          <Home />
        </ThemeProvider>

    </div>
  );
}

export default App;
