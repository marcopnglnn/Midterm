import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from 'react-redux'

import StudentProfile from "../components/StudentProfile";
import FilterArea from "../components/FilterArea";
import CommentCard from "../components/CommentCard";
import Footer from "../components/Footer";
import RateCard from "../components/RateCrad";
import { useParams } from 'react-router-dom'
import StarRating from "components/StarRating";
import { useNavigate } from "react-router-dom";

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
    alignItems: "center",
    gridTemplateColumns: "repeat(5, 1fr)",
    justifyContent: "center",

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
  const [average, setAverage] = useState(0)
  const navigate = useNavigate()
  const student = useSelector(state => state.app.student)
  useEffect(() => {
    if (!student) {
      navigate('/')
    }
  }, [])

  return (
    <Box sx={classes.box1}>
      <br />
      <br />
      <br />

      <Box style={classes.box2}>
        <Box>
          <StudentProfile student={student} />
        </Box>
        <Box style={classes.box3}>
          <Typography style={classes.addrating}>Add your Rating</Typography>
          <center>
            <StarRating size="large" value={average} readOnly />
          </center>

          <RateCard getAverate={setAverage} />
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
