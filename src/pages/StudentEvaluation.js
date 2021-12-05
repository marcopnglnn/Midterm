import * as React from "react";
import { Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

import StudentProfile from "../components/StudentProfile";
import FilterArea from "../components/FilterArea";
import CommentCard from "../components/CommentCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import RateCard from "../components/RateCrad";

const classes = {
  box1: {
    flexGrow: 1,
    backgroundColor: "#131414",
    width: "100%",
  },
  box2: {
    width: "70%",
    margin: "auto",
    marginBottom: 120,
  },
  box3: {
    marginTop: 40,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  addrating: {
    color: "#D1D4C9",
    fontSize: 20,
    marginBottom: 5,
  },
  box4: {
    display: "grid",
    gap: 0.1,
    gridTemplateColumns: "repeat(5, 1fr)",
    cursor: "pointer",
  },
  staricon: {
    color: "#2C2F31",
    width: 35,
    height: 35,
  },
  filterareabox: {
    marginTop: 20,
    marginRight: -20,
  },
  commentcardbox: {
    marginTop: 100,
  },
  paginationbox: {
    textAlign: "center",
    width: 300,
    margin: "auto",
  },
  footerbox: {
    width: "100%",
    height: 180,
    backgroundColor: "#131414",
    borderTop: "1px solid #515456",
  },
};

export default function SearchAppBar() {
  return (
    <Box sx={classes.box1}>
      <Navbar />

      <br />
      <br />
      <br />

      <Box style={classes.box2}>
        <Box>
          <StudentProfile />
        </Box>

        <Box style={classes.box3}>
          <Typography style={classes.addrating}>Add your Rating</Typography>
          <Box sx={classes.box4}>
            <StarIcon style={classes.staricon} />
            <StarIcon style={classes.staricon} />
            <StarIcon style={classes.staricon} />
            <StarIcon style={classes.staricon} />
            <StarIcon style={classes.staricon} />
          </Box>

          <RateCard />
        </Box>

        <Box style={classes.filterareabox}>
          <FilterArea />
        </Box>

        <Box style={classes.commentcardbox}>
          <CommentCard />
        </Box>
      </Box>

      <Box style={classes.footerbox}>
        <Footer />
      </Box>
    </Box>
  );
}
