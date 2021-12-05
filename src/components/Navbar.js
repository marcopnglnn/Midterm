import * as React from "react";
import {
  styled,
  AppBar,
  Box,
  Toolbar,
  Typography,
  InputBase,
} from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import GridViewIcon from "@mui/icons-material/GridView";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#131414",
  "&:hover": {
    backgroundColor: "#3d3e3f",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  background: "#131414",
  border: "1px solid #2C2F31",
  boxSizing: "border-box",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  width: "237px",
}));

const appBar = {
  backgroundColor: "#1E1F20",
};

const listsNav = {
  color: "white",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: 14,
  marginRight: 48,
  marginTop: -5,
  borderTop: "3px solid #26CE8D",
  height: 5,
  paddingTop: 5,
};

const classes = {
  box: {
    flexGrow: 1,
  },
  box2: {
    justifyContent: "space-between",
    display: "grid",
    gap: 1,
    gridTemplateColumns: "repeat(2, 1fr)",
    width: 367,
  },
  header: {
    flexGrow: 1,
    display: { xs: "none", sm: "block" },
  },
  box3: {
    mt: 0.5,
  },
  box4: {
    width: "100%",
  },
  box5: {
    display: "flex",
    justifyContent: "center",
  },
  accounticon: {
    width: 28,
    height: 28,
  },
};

export default function SearchAppBar() {
  return (
    <Box sx={classes.box}>
      <AppBar position="static" style={appBar}>
        <Toolbar>
          <Box sx={classes.box2}>
            <Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={classes.header}
              >
                Student Review
              </Typography>
            </Box>
            <Box sx={classes.box3}>
              <GridViewIcon />
            </Box>
          </Box>

          <Box style={classes.box4}>
            <Box sx={classes.box5}>
              <Link style={listsNav} to="/">
                Student List
              </Link>
              <Link style={listsNav} to="/studeval">
                Student Evaluation
              </Link>
              <Typography style={listsNav}>Blog</Typography>
            </Box>
          </Box>

          <AccountCircleIcon style={classes.accounticon} />

          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
