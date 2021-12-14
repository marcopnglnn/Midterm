import { ThemeProvider, createTheme } from "@mui/material";

import theme from "./util/theme";
import React from "react";
import Router from "./router";
export default function App() {
  const THEME = createTheme(theme(false));
  return (
    <ThemeProvider theme={THEME}>
      <Router />
    </ThemeProvider>
  );
}
