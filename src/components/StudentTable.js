import * as React from "react";
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
} from "@mui/material";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import StarIcon from "@mui/icons-material/Star";

import img from "../assets/img/marco9.jpg";

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
};

function createData(name, yrSection, reviews, rating) {
  return { name, yrSection, reviews, rating };
}

const rows = [
  createData("Christian Pile", "BSIT 4B", 85, 24),
  createData("Marco Pangilinan", "BSIT 4B", 90, 24),
  createData("Joshua Esternon", "BSIT 4B", 85, 24),
  createData("Kenneth Deleon", "BSIT 4B", 80, 24),
  createData("Justin Rose Cruz", "BSIT 4B", 88, 24),
];

export default function CustomizedTables() {
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
          {rows.map((row) => (
            <StyledTableRow key={row.name} style={classes.styletablebody}>
              <StyledTableCell align="left" style={classes.styletablecell}>
                <Box style={classes.box}>
                  <Typography style={{ width: 25, fontSize: 12 }}>1</Typography>
                  <Box style={{ width: 45 }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 35, height: 35 }}
                      src={img}
                    />
                  </Box>
                  <Typography style={{ fontSize: 14 }}>{row.name}</Typography>
                </Box>
              </StyledTableCell>
              <StyledTableCell align="center" style={classes.styletablecell2}>
                {row.yrSection}
              </StyledTableCell>
              <StyledTableCell align="center" style={classes.styletablecell2}>
                {row.reviews}
              </StyledTableCell>
              <StyledTableCell align="center" style={classes.styletablecell2}>
                <Box sx={classes.box2}>
                  <StarIcon style={classes.staricon} />
                  <StarIcon style={classes.staricon} />
                  <StarIcon style={classes.staricon} />
                  <StarIcon style={classes.staricon} />
                  <StarIcon style={classes.staricon} />
                </Box>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
