const theme = (isDarkMode) => ({
  palette: {
    mode: isDarkMode ? "dark" : "light",

    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#26CE8D",
    },
    error: {
      main: "#ff2626",
    },
  },
});

export default theme;
