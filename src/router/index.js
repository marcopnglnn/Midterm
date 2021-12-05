import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material";
import theme from "../util/theme";

import StudentEvaluation from "../pages/StudentEvaluation";
import StudentList from "../pages/StudentList";

export default function Index() {
  const THEME = createTheme(theme(false));
  return (
    <ThemeProvider theme={THEME}>
      <Router>
        <Routes>
          <Route path="/" element={<StudentList />} />
          <Route path="/studeval" element={<StudentEvaluation />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
