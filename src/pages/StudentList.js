import * as React from "react";
import { Box, Typography } from "@mui/material";


import FilterArea from "../components/FilterArea";
import StudentTable from "../components/StudentTable";
import StudentTablePagination from "../components/StudentTablePagination";
import TopStudentCard from "subpages/StudentTop";
import Footer from "../components/Footer";

import { useDispatch, useSelector } from "react-redux";
import api from "util/api";
import actionCreator from "util/redux/actions/actionCreator";
import * as actionTypes from 'util/redux/types'


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
const studentTop = [
  {
    name: "Ryan",
    reviews: 100,
    image: '/img/avatar',
  },
  {
    name: "Marco",
    reviews: 30,
    image: '/img/avatar'
  },
  {
    name: "Justine",
    reviews: 30,
    image: '/img/avatar'
  },
  {
    name: "Juan",
    reviews: 30,
    image: '/img/avatar'
  },
]
const computeRatings = (reviews) => {
  if (!reviews || reviews.length == 0) {
    return 0
  }
  let sum = 0

  reviews.forEach(review => {
    sum += review.review
  })

  return (sum / reviews.length).toFixed(1)
}

export default function SearchAppBar() {
  const dispatch = useDispatch()
  const state = useSelector(state => state.app)
  const [topStudents, setTopStudents] = React.useState([])
  React.useEffect(async () => {
    try {
      let res = await api.get('/students')
      dispatch(actionCreator(actionTypes.FETCH_STUDENTS, res.sort((a, b) => b.Reviews.length - a.Reviews.length)))
      let onTop = res.filter(e => e.Reviews.length > 0).sort((a, b) => computeRatings(b.Reviews) - computeRatings(a.Reviews))
      setTopStudents(onTop);
    } catch (error) {
      alert(error.message)
    }
  }, [])
  return (
    <Box sx={classes.studlist}>
      <br />
      <br />
      <br />

      <Box style={classes.topstudentbox}>

        <Box>
          <Typography style={classes.header}>Top Students</Typography>
          <br />
          <Box sx={classes.topstudentcard}>
            {
              topStudents.map((student, index) => {
                return <TopStudentCard key={index} {...student} />
              })
            }
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
