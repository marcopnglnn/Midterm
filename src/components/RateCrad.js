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
import StarRating from "./StarRating";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import api from "util/api";
import actionCreator from "util/redux/actions/actionCreator";
import * as actionTypes from 'util/redux/types'
import { useDispatch } from "react-redux";

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

export default function BasicCard({ getAverate }) {
  const state = useSelector(state => state.app)
  const [teamwork, setTeamwork] = useState(0)
  const [creativity, setCreativity] = useState(0)
  const [adaptability, setAdaptability] = useState(0)
  const [leadership, setLeadership] = useState(0)
  const [persuasion, setPersuasion] = useState(0)
  const [message, setMessage] = useState("")
  const dispatch = useDispatch()


  const generatePayload = (category, rating) => {
    return {
      reviewerId: state.user.id,
      category,
      review: rating,
      studentId: state.student.id
    }
  }
  const updateStudent = async () => {
    try {
      let res = await api.get(`/student/${state.student.id}`);
      dispatch(actionCreator(actionTypes.SELECT_STUDENT, res[0]))
      setTeamwork(0)
      setCreativity(0)
      setAdaptability(0)
      setLeadership(0)
      setPersuasion(0)
      setMessage("")
    } catch (error) {
      alert(error.message)
    }
  }
  const submit = async () => {

    try {
      const payload = {
        review: [
          generatePayload('teamwork', teamwork),
          generatePayload('creativity', creativity),
          generatePayload('adaptability', adaptability),
          generatePayload('leadership', leadership),
          generatePayload('persuasion', persuasion)
        ]
      }

      let res = await api.post('/rating/create', payload)
      if (message) {
        postComment()
      }
    }
    catch (err) {
      console.log(err);
    } finally {

      updateStudent()
    }

  }

  const postComment = async () => {
    try {
      await api.post('/rating/create-comment', {
        comment: message,
        reviewerId: state.user.id,
        studentId: state.student.id
      })
    } catch (error) {
      console.log(error);
      alert(error.message)
    } finally {

      updateStudent()
    }




  }

  useEffect(() => {
    const ave = Math.floor((Number(teamwork) +
      Number(creativity) +
      Number(adaptability) +
      Number(leadership) +
      Number(persuasion)) / 5)
    getAverate(ave)
  }, [teamwork,
    creativity,
    adaptability,
    leadership,
    persuasion])
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
                <StarRating size="large" onChange={setTeamwork} value={teamwork} />
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2} style={{}}>
            <Grid item xs={4} style={classes.grid3}>
              <Typography style={classes.name}>Creativity</Typography>
            </Grid>
            <Grid item xs={8} style={classes.grid4}>
              <Box sx={classes.box4}>
                <StarRating size="large" onChange={setCreativity} value={creativity} />

              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2} style={{}}>
            <Grid item xs={4} style={classes.grid5}>
              <Typography style={classes.name}>Adaptability</Typography>
            </Grid>
            <Grid item xs={8} style={classes.grid4}>
              <Box sx={classes.box4}>
                <StarRating size="large" onChange={setAdaptability} value={adaptability} />

              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2} style={{}}>
            <Grid item xs={4} style={classes.grid5}>
              <Typography style={classes.name}>Leadership</Typography>
            </Grid>
            <Grid item xs={8} style={classes.grid4}>
              <Box sx={classes.box4}>
                <StarRating size="large" onChange={setLeadership} value={leadership} />

              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2} style={{}}>
            <Grid item xs={4} style={classes.grid3}>
              <Typography style={classes.name}>Persuasion</Typography>
            </Grid>
            <Grid item xs={8} style={classes.grid4}>
              <Box sx={classes.box4}>
                <StarRating size="large" onChange={setPersuasion} value={persuasion} />

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
              value={message}
              rows={4}
              rowsMax={10}
              onChange={(e) => setMessage(e.target.value)}
              style={classes.styletext}
            />
          </Box>

          <Box style={classes.box6}>
            <Button variant="contained" onClick={submit} style={classes.btn}>
              Submit
            </Button>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
