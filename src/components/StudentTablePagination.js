import * as React from "react";
import { Typography, Box } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import EastIcon from "@mui/icons-material/East";

const classes = {
  pagebox: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    alignItems: "center",
    marginTop: 30,
  },
  pagebox2: {
    width: 30,
    justifyContent: "flex-end",
    marginTop: 13,
  },
  keyboardbackspaceicon: {
    color: "#515456",
    width: 25,
    height: 25,
    border: "1px solid #515456",
    borderRadius: 5,
    paddingRight: 12,
    paddingLeft: 12,
    paddingTop: 2,
    paddingBottom: 2,
  },
  pagename: {
    color: "#D1D4C9",
    fontSize: 14,
    marginTop: 10,
    width: 150,
  },
  page: {
    padding: 6,
    border: "1px solid #515456",
    borderRadius: 5,
  },
  righticon: {
    width: 30,
    justifyContent: "flex-end",
    marginTop: 13,
  },
  icon: {
    color: "#fff",
    width: 25,
    height: 25,
    border: "1px solid #515456",
    borderRadius: 5,
    paddingRight: 12,
    paddingLeft: 12,
    paddingTop: 2,
    paddingBottom: 2,
  },
};

export default function PaginationRounded() {
  return (
    <Box style={classes.pagebox}>
      <Box style={classes.pagebox2}>
        <KeyboardBackspaceIcon style={classes.keyboardbackspaceicon} />
      </Box>

      <Typography style={classes.pagename}>
        Page <span style={classes.page}>1</span> of 100
      </Typography>

      <Box style={classes.righticon}>
        <EastIcon style={classes.icon} />
      </Box>
    </Box>
  );
}
