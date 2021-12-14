import * as React from "react";
import {
  Box,
  Grid,
  CardMedia,
  Typography,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Table,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarRating from "./StarRating";
import { useNavigate } from 'react-router-dom'
import { useSelector } from "react-redux";
import { useEffect } from "react";
// 
function createData(key, value, category, rating) {
  return { key, value, category, rating };
}

const rows = [
  createData("Gender: ", "Male", "Teamwork:", 'teamwork'),
  createData("Birthday:", "05-10-2000", "Creativity:", 'creativity'),
  createData("Address:", "Tanawan Bustos Bulacan", "Adaptability:", 'adaptability'),
  createData("Nickname:", "tabs", "Leadership:", 'leadership'),
  createData("Skills / Language:", "English/Filipino", "Persuasion:", 'persuasion'),
];

const getRatingByCategory = (category, Reviews) => {
  if (!Reviews) {
    return 0
  }
  const reviews = Reviews.filter(e => {
    return e.category.toLowerCase() == category.toLowerCase()
  })
  if (!reviews.length) return 0
  let sum = 0;
  reviews.forEach(r => {
    sum += r.review
  })
  return sum / reviews.length
}

const classes = {
  box1: {
    backgroundColor: "#1E1F20",
    height: 300,
    border: "1px solid #303336",
    borderRadius: 10,
  },
  box2: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    height: 300,
    alignItems: "center",
    justifyContent: "center",
  },
  cardmedia: {
    height: 100,
    width: 100,
    objectFit: "cover",
    marginBottom: 20,
    border: "2px solid #fff",
    borderRadius: 10,
  },
  box3: {
    display: "flex",
    alignItems: "center",
    pl: 1,
    pb: 1,
  },
  box4: {
    display: "flex",
    gap: 0.1,
    gridTemplateColumns: "repeat(5, 1fr)",
  },
  staricon: {
    color: "#26CE8D",
    width: 35,
    height: 35,
  },
  name: {
    color: "#D1D4C9",
    fontSize: 12,
  },
  rating: {
    fontSize: 18,
  },
  h6: {
    fontSize: 18,
    marginLeft: 10,
  },
  box5: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    height: 300,
    paddingTop: 20,
  },
  header: {
    color: "#D1D4C9",
    fontSize: 12,
    paddingLeft: 16,
  },
  topstudname: {
    fontSize: 18,
    marginRight: 10,
  },
  table: {
    minWidth: "100%",
  },
  tablecell1: {
    width: "40%",
    color: "#B0B1AE",
    fontWeight: 600,
    border: "none",
  },
  tablecell2: {
    width: "40%",
    color: "#B0B1AE",
    border: "none",
  },
  tablecell3: {
    width: "10%",
    color: "#B0B1AE",
    fontWeight: 600,
    border: "none",
  },
  tablecell4: {
    width: "10%",
    border: "none",
  },
  box6: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#26CE8D",
    padding: 5,
    borderRadius: 8,
    color: "#fff",
  },
  box7: {
    display: "grid",
    gap: 1,
    gridTemplateColumns: "repeat(4, 1fr)",
    marginLeft: 2,
    marginTop: 1,
    width: "60%",
  },
  icons1: {
    fontSize: 14,
    color: "#62666D",
  },
  icons2: {
    fontSize: 14,
    color: "#26CE8D",
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


export default function BasicGrid() {
  const student = useSelector(state => state.app.student)

  return (
    <Box sx={{ flexGrow: 1 }} style={classes.box1}>
      <Grid container spacing={2}>
        <Grid item xs={5}>
          <Box style={classes.box2}>
            <CardMedia
              style={classes.cardmedia}
              component="img"
              src={student?.image}
              alt="Live from space album cover"
            />
            <Box sx={classes.box3}>
              <Box sx={classes.box4}>
                <StarRating readOnly value={computeRatings(student?.Reviews)} />
              </Box>
            </Box>
            <Typography style={classes.name} component="div">
              <span style={classes.rating}>{computeRatings(student?.Reviews)}</span> Overall Rating{" "}
              <span style={classes.h6}>{student?.Reviews.length / 5}</span> Reviews
            </Typography>
          </Box>
        </Grid>

        <Grid item xs={7}>
          <Box style={classes.box5}>
            <Typography style={classes.header} component="div">
              <span style={classes.topstudname}>{student?.name}</span> {student?.course}
            </Typography>

            <TableContainer>
              <Table sx={classes.table} size="small" aria-label="simple table">
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell
                        style={classes.tablecell1}
                        component="th"
                        scope="row"
                      >
                        {row.key}
                      </TableCell>
                      <TableCell align="right" style={classes.tablecell2}>
                        {row.value}
                      </TableCell>
                      <TableCell align="right" style={classes.tablecell3}>
                        {row.category}
                      </TableCell>
                      <TableCell align="right" style={classes.tablecell4}>
                        <Box style={classes.box6}>  {getRatingByCategory(row.rating, student?.Reviews).toFixed(1)}</Box>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            <Box sx={classes.box7}>
              <Typography style={classes.icons1}>Github</Typography>
              <Typography style={classes.icons2}>Facebook</Typography>
              <Typography style={classes.icons2}>LinkedIn</Typography>
              <Typography style={classes.icons1}>Twitter</Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
