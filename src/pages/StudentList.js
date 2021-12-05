import * as React from "react";
import { Box, Typography, Grid } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";

import TopStudentCard from "../components/TopStudentCard";
import MarcoTop from "../subpages/marcotop";
import JoshuaTop from "../subpages/JoshuTop";
import JustinTop from "../subpages/justinTop";
import FilterArea from "../components/FilterArea";
import StudentTable from "../components/StudentTable";
import StudentTablePagination from "../components/StudentTablePagination";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const classes = {
  studlist: {
    flexGrow: 1,
    backgroundColor: "#131414",
    width: "100%",
  },
  studlistSignin: {
    backgroundColor: "#131414",
    height: 180,
    width: 250,
    position: "absolute",
    right: 140,
    top: 65,
    borderRadius: 5,
    border: "1px solid #303336",
  },
  studlistsignin1: {
    textAlign: "center",
    marginTop: 20,
    paddingRight: 30,
    paddingLeft: 30,
  },
  typosignin: {
    color: "#D1D4C9",
    fontSize: 18,
  },
  typosigntoreview: {
    color: "#B6B6B5",
    fontSize: 14,
    marginTop: 8,
  },
  gridcontainer: {
    marginTop: 15,
    width: 140,
    margin: "auto",
    cursor: "pointer",
  },
  facebook: {
    width: 40,
    height: 40,
    color: "#4267B2",
  },
  twitter: {
    width: 40,
    height: 40,
    color: "#00ACEE",
  },
  google: {
    width: 38,
    height: 38,
    color: "#4285F4",
  },
  topstudentbox: {
    width: "70%",
    margin: "auto",
    marginBottom: 120,
  },
  header: {
    color: "white",
  },
  topstudentcard: {
    display: "grid",
    gap: 1.5,
    gridTemplateColumns: "repeat(4, 1fr)",
    width: "70%",
  },
  filterarea: {
    marginTop: 20,
  },
  studenttable: {
    marginTop: 20,
  },
  studentpagination: {
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
    <Box sx={classes.studlist}>
      <Navbar />

      <Box style={classes.studlistSignin}>
        <Box style={classes.studlistsignin1}>
          <Typography style={classes.typosignin}>Sign In</Typography>
          <Typography style={classes.typosigntoreview}>
            Sign In to review and rate students
          </Typography>

          <Grid container spacing={1} style={classes.gridcontainer}>
            <Grid item xs={4}>
              <FacebookIcon style={classes.facebook} />
            </Grid>
            <Grid item xs={4}>
              <TwitterIcon style={classes.twitter} />
            </Grid>
            <Grid item xs={4}>
              <GoogleIcon style={classes.google} />
            </Grid>
          </Grid>
        </Box>
      </Box>

      <br />
      <br />
      <br />

      <Box style={classes.topstudentbox}>
        <Box>
          <Typography style={classes.header}>Top Students</Typography>
          <br />
          <Box sx={classes.topstudentcard}>
            <MarcoTop />
            <TopStudentCard />
            <JustinTop />
            <JoshuaTop />
          </Box>
        </Box>

        <Box style={classes.filterarea}>
          <FilterArea />
        </Box>

        <Box style={classes.studenttable}>
          <StudentTable />
          <Box style={classes.studentpagination}>
            <StudentTablePagination />
          </Box>
        </Box>
      </Box>

      <Box style={classes.footerbox}>
        <Footer />
      </Box>
    </Box>
  );
}
