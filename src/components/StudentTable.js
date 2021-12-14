import React, { useEffect, useState } from "react";
import {
  styled,
  Table,
  TableBody,
  TableContainer,
  TableHead,
  TableRow,
  CardMedia,
  Typography,
  Box,
  Rating,
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import StarIcon from "@mui/icons-material/Star";

import { useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";
import { useDispatch } from "react-redux";
import actionCreator from "util/redux/actions/actionCreator";
import * as actionTypes from 'util/redux/types'
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#131414",
    color: "#7C7E83",
    border: "none",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
    color: "#D1D4C9",
    border: "none",
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  backgroundColor: "#1E1F20",
  height: 18,
  borderRadius: 15,
  marginTop: 100,
}));


const StyledRating = styled(Rating)({
  '& .MuiRating-iconFilled': {
    color: '#26CE8D',
  },
  '& .MuiRating-iconHover': {
    color: '#26CE8D',
  },
});


const classes = {
  tablecontainer: {
    marginTop: -50,
    width: "100%",
  },
  table: {
    borderCollapse: "separate",
    borderSpacing: "0 .7em",
  },
  tablebody: {
    width: "100%",
  },
  styletablebody: {
    cursor: "pointer",
  },
  styletablecell: {
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    border: "1px solid #303336",
    borderRight: "none",
  },
  box: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  styletablecell2: {
    border: "1px solid #303336",
    borderLeft: "none",
    borderRight: "none",
  },
  box2: {
    display: "grid",
    gridTemplateColumns: "repeat(5, 1fr)",
  },
  staricon: {
    color: "#26CE8D",
    width: 20,
    height: 20,
  },
  stariconDisabled: {
    color: "#5b635e",
    width: 20,
    height: 20,
  },
};

function createData(id, name, yrSection, reviews, rating, image) {
  return { id, name, yrSection, reviews, rating, image };
}


const computeRatings = (reviews) => {
  if (reviews.length == 0) {
    return 0
  }
  let sum = 0

  reviews.forEach(review => {
    sum += review.review
  })

  return sum / reviews.length
}


export default function CustomizedTables() {
  const state = useSelector(state => state.app)
  const [rowData, setRowData] = useState([])
  const dispatch = useDispatch()
  let navigate = useNavigate();
  const navigateRoute = (id) => {
    navigate(`/studeval`)
  }
  const setStudent = (id) => {
    dispatch(actionCreator(actionTypes.SELECT_STUDENT, state.students.find(e => e.id.toString() == id.toString())))
    navigateRoute(id)

  }


  useEffect(() => {
    setRowData(() => {
      return state.students.map(e => createData(e.id, e.name, e.course, e.Reviews.length, computeRatings(e.Reviews), e.image))
    })
    return () => {

    }
  }, [state.students])

  return (
    <TableContainer style={classes.tablecontainer}>
      <Table
        sx={{
          minWidth: 700,
        }}
        style={classes.table}
      >
        <TableHead>
          <TableRow>
            <StyledTableCell align="left" style={{ width: 270 }}>
              Name
            </StyledTableCell>
            <StyledTableCell align="center">Year & Section</StyledTableCell>
            <StyledTableCell align="center">Reviews</StyledTableCell>
            <StyledTableCell align="center" style={{ width: 100 }}>
              Rating
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody style={classes.tablebody}>
          {rowData.map((row) => (
            <StyledTableRow key={row.name} onClick={() => setStudent(row.id)} style={classes.styletablebody}>
              <StyledTableCell align="left" style={classes.styletablecell}>
                <Box style={classes.box}>
                  <Box style={{ width: 45 }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 35, height: 35 }}
                      src={row.image}
                    />
                  </Box>
                  <Typography style={{ fontSize: 14 }}>{row.name}</Typography>
                </Box>
              </StyledTableCell>
              <StyledTableCell align="center" style={classes.styletablecell2}>
                {row.yrSection}
              </StyledTableCell>
              <StyledTableCell align="center" style={classes.styletablecell2}>
                {row.reviews / 5}
              </StyledTableCell>
              <StyledTableCell align="center" style={classes.styletablecell2}>
                <Box sx={classes.box2}>
                  <StarRating readOnly value={row.rating} />
                </Box>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
