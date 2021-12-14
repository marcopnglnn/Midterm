import * as React from "react";
import { Box, MenuItem, Select, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector, useDispatch } from "react-redux";

import actionCreator from "util/redux/actions/actionCreator";
import * as actionTypes from 'util/redux/types'

const useStyles = makeStyles({
  select: {
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
      color: "purple",
    },
    "& .MuiInputLabel-root.Mui-focused": {
      color: "purple",
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "purple",
    },
  },

  icon: {
    fill: "#fff",
  },
});

const des = {
  sortbybox: {
    width: 380,
    height: 70,
    float: "right",
    marginRight: 40,
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    justifyContent: "space-between",
  },
  sortbybox2: {
    width: "100%",
  },
  sortbybox3: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  sortby: {
    color: "#fff",
    fontSize: 14,
    marginTop: 10,
  },
  sortbyselectbtn: {
    backgroundColor: "#131414",
    border: "1px solid #303336",
    borderRadius: 8,
    color: "#fff",
    width: 120,
    height: 40,
    fontSize: 14,
    paddingTop: 5,
    paddingLeft: 5,
    outline: "none",
  },
  fillterbybox: {
    width: "100%",
    paddingLeft: 20,
  },
  fillterbybox2: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  fillterby: {
    color: "#fff",
    fontSize: 14,
    marginTop: 10,
  },
  fillterbyselectbtn: {
    backgroundColor: "#131414",
    border: "1px solid #303336",
    borderRadius: 8,
    color: "#fff",
    width: 120,

    paddingTop: 5,
    paddingLeft: 5,
    height: 40,
    fontSize: 14,
    outline: "none",
  },
};

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
export default function BasicSelect() {
  const [category, setCategory] = React.useState(1);
  const [sort, setSort] = React.useState(1);
  const state = useSelector(state => state.app)
  const dispatch = useDispatch()
  const classes = useStyles();
  const handleChange = (event) => {
    setCategory(event.target.value);
    execSort()
  };
  const sortByCategory = (a, b) => {
    if (a[category] < b[category]) return -1
    return a[category] > b[category] ? 1 : 0
  }
  const sortByCategoryDesc = (a, b) => {
    if (b[category] < a[category]) return -1
    return b[category] > a[category] ? 1 : 0
  }
  const onSortOrder = (e) => {
    setSort(e.target.value)
    execSort()
  }

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

  const execSort = () => {
    if (category == 1) {
      if (sort == 1) {
        dispatch(actionCreator(actionTypes.FETCH_STUDENTS, state.students.sort(sortByCategory)))
      } else {
        dispatch(actionCreator(actionTypes.FETCH_STUDENTS, state.students.sort(sortByCategoryDesc)))
      }
    }
    if (category == 2) {
      if (sort == 1) {
        dispatch(actionCreator(actionTypes.FETCH_STUDENTS, state.students.sort((a, b) => a.Reviews.length - b.Reviews.length)))
      } else {
        dispatch(actionCreator(actionTypes.FETCH_STUDENTS, state.students.sort((a, b) => b.Reviews.length - a.Reviews.length)))
      }
    }
    if (category == 3) {
      if (sort == 1) {
        dispatch(actionCreator(actionTypes.FETCH_STUDENTS, state.students.sort((a, b) => computeRatings(a.Reviews) - computeRatings(b.Reviews))))
      } else {
        dispatch(actionCreator(actionTypes.FETCH_STUDENTS, state.students.sort((a, b) => computeRatings(b.Reviews) - computeRatings(a.Reviews))))
      }
    }

  }

  return (
    <Box>
      <Box style={des.sortbybox}>
        <Box style={des.sortbybox2}>
          <Box style={des.sortbybox3}>
            <Typography style={des.sortby}>Sort by:</Typography>
            <Select
              variant="outlined"
              value={sort}
              onChange={onSortOrder}
              style={des.sortbyselectbtn}
              className={classes.select}
              inputProps={{
                classes: {
                  icon: classes.icon,
                },
              }}
            >
              <MenuItem value={1}>Asc</MenuItem>
              <MenuItem value={0}>Desc</MenuItem>
            </Select>
          </Box>
        </Box>

        <Box style={des.fillterbybox}>
          <Box style={des.fillterbybox2}>
            <Typography style={des.fillterby}>Filter by:</Typography>
            <Select
              variant="outlined"
              value={category}
              onChange={handleChange}
              style={des.fillterbyselectbtn}
              className={classes.select}
              inputProps={{
                classes: {
                  icon: classes.icon,
                },
              }}
            >
              <MenuItem value={1}>Section</MenuItem>
              <MenuItem value={2}>Reviews</MenuItem>
              <MenuItem value={3}>Rating</MenuItem>
            </Select>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
