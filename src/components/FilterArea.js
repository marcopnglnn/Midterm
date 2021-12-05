import * as React from "react";
import { Box, MenuItem, Select, Typography } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

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
    height: 40,
    fontSize: 14,
    outline: "none",
  },
};

export default function BasicSelect() {
  const [age, setAge] = React.useState("");
  const classes = useStyles();
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box>
      <Box style={des.sortbybox}>
        <Box style={des.sortbybox2}>
          <Box style={des.sortbybox3}>
            <Typography style={des.sortby}>Sort by:</Typography>
            <Select
              variant="outlined"
              value={age}
              onChange={handleChange}
              style={des.sortbyselectbtn}
              className={classes.select}
              inputProps={{
                classes: {
                  icon: classes.icon,
                },
              }}
            >
              <MenuItem value={10}>Asc</MenuItem>
              <MenuItem value={20}>Desc</MenuItem>
            </Select>
          </Box>
        </Box>

        <Box style={des.fillterbybox}>
          <Box style={des.fillterbybox2}>
            <Typography style={des.fillterby}>Filter by:</Typography>
            <Select
              variant="outlined"
              value={age}
              onChange={handleChange}
              style={des.fillterbyselectbtn}
              className={classes.select}
              inputProps={{
                classes: {
                  icon: classes.icon,
                },
              }}
            >
              <MenuItem value={10}>Section</MenuItem>
              <MenuItem value={20}>Reviews</MenuItem>
              <MenuItem value={30}>Rating</MenuItem>
            </Select>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
