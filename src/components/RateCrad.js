import * as React from "react";
import {
  Box,
  Card,
  CardContent,
  Button,
  Typography,
  Grid,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const StyledTextField = withStyles((theme) => ({
  root: {
    width: 300,
    "& .MuiInputBase-root": {
      color: "#D1D4C9",
      paddingLeft: 10,
      paddingRight: 10,
    },
  },
}))(TextField);

const classes = {
  card: {
    minWidth: 375,
    marginTop: 2,
    backgroundColor: "#1E1F20",
    border: "1px solid #303336",
  },
  box1: {
    textAlign: "center",
  },
  rating: {
    color: "#D1D4C9",
    fontSize: 14,
  },
  box2: {
    marginTop: 20,
    cursor: "pointer",
  },
  grid1: {
    display: "flex",
    alignItems: "center",
  },
  grid2: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  box3: {
    display: "grid",
    gap: 0.1,
    gridTemplateColumns: "repeat(5, 1fr)",
    width: 200,
  },
  staricongreen: {
    color: "#26CE8D",
    width: 35,
    height: 35,
  },
  stariconblack: {
    color: "#2C2F31",
    width: 35,
    height: 35,
  },
  grid3: {
    display: "flex",
    alignItems: "center",
  },
  name: {
    color: "#D1D4C9",
    fontSize: 14,
  },
  grid4: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  box4: {
    display: "grid",
    gap: 0.1,
    gridTemplateColumns: "repeat(5, 1fr)",
    width: 200,
  },
  grid5: {
    display: "flex",
    alignItems: "center",
  },
  stariconred: {
    color: "#E03E65",
    width: 35,
    height: 35,
  },
  box5: {
    textAlign: "center",
    marginTop: 30,
  },
  styletext: {
    width: "100%",
    paddingTop: 5,
    backgroundColor: "#131414",
    color: "#fff",
    borderRadius: 8,
    border: "1px solid #303336",
  },
  box6: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
  },
  btn: {
    width: "50%",
    backgroundColor: "#20C284",
  },
};

export default function BasicCard() {
  return (
    <Card sx={classes.card}>
      <CardContent>
        <Box style={classes.box1}>
          <Typography style={classes.rating}>Rating</Typography>
        </Box>

        <Box style={classes.box2}>
          <Grid container spacing={2} style={{}}>
            <Grid item xs={4} style={classes.grid1}>
              <Typography style={classes.rating}>TeamWork</Typography>
            </Grid>
            <Grid item xs={8} style={classes.grid2}>
              <Box sx={classes.box3}>
                <StarIcon style={classes.staricongreen} />
                <StarIcon style={classes.staricongreen} />
                <StarIcon style={classes.staricongreen} />
                <StarIcon style={classes.staricongreen} />
                <StarIcon style={classes.stariconblack} />
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2} style={{}}>
            <Grid item xs={4} style={classes.grid3}>
              <Typography style={classes.name}>Creativity</Typography>
            </Grid>
            <Grid item xs={8} style={classes.grid4}>
              <Box sx={classes.box4}>
                <StarIcon style={classes.staricongreen} />
                <StarIcon style={classes.staricongreen} />
                <StarIcon style={classes.staricongreen} />
                <StarIcon style={classes.stariconblack} />
                <StarIcon style={classes.stariconblack} />
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2} style={{}}>
            <Grid item xs={4} style={classes.grid5}>
              <Typography style={classes.name}>Adaptability</Typography>
            </Grid>
            <Grid item xs={8} style={classes.grid4}>
              <Box sx={classes.box4}>
                <StarIcon style={classes.stariconred} />
                <StarIcon style={classes.stariconblack} />
                <StarIcon style={classes.stariconblack} />
                <StarIcon style={classes.stariconblack} />
                <StarIcon style={classes.stariconblack} />
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2} style={{}}>
            <Grid item xs={4} style={classes.grid5}>
              <Typography style={classes.name}>Leadership</Typography>
            </Grid>
            <Grid item xs={8} style={classes.grid4}>
              <Box sx={classes.box4}>
                <StarIcon style={classes.stariconred} />
                <StarIcon style={classes.stariconred} />
                <StarIcon style={classes.stariconblack} />
                <StarIcon style={classes.stariconblack} />
                <StarIcon style={classes.stariconblack} />
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2} style={{}}>
            <Grid item xs={4} style={classes.grid3}>
              <Typography style={classes.name}>Persuasion</Typography>
            </Grid>
            <Grid item xs={8} style={classes.grid4}>
              <Box sx={classes.box4}>
                <StarIcon style={classes.stariconred} />
                <StarIcon style={classes.stariconred} />
                <StarIcon style={classes.stariconblack} />
                <StarIcon style={classes.stariconblack} />
                <StarIcon style={classes.stariconblack} />
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box style={classes.box5}>
          <Typography style={classes.name}>Share us your thoughts!</Typography>

          <Box style={{ marginTop: 20 }}>
            <StyledTextField
              variant="standard"
              multiline
              rows={4}
              rowsMax={10}
              style={classes.styletext}
            />
          </Box>

          <Box style={classes.box6}>
            <Button variant="contained" style={classes.btn}>
              Submit
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
