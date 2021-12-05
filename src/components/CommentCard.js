import * as React from "react";
import { Box, Grid, CardMedia, Typography, Button } from "@mui/material/";
import StarIcon from "@mui/icons-material/Star";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import ReplyIcon from "@mui/icons-material/Reply";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

import img from "../assets/img/avatar.jpg";

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
  box1: {
    backgroundColor: "#1E1F20",
    minHeight: 210,
    border: "1px solid #303336",
    borderRadius: 10,
    paddingTop: 30,
    paddingLeft: 10,
    marginTop: 20,
  },
  gridcontainer: {
    width: 240,
  },
  box2: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  cardmedia: {
    height: 40,
    width: 40,
    objectFit: "cover",
    borderRadius: "50%",
  },
  gmail: {
    color: "#D1D4C9",
    fontSize: 14,
  },
  date: {
    color: "#62666D",
    fontSize: 12,
  },
  box3: {
    marginTop: 20,
    paddingLeft: 80,
    paddingRight: 40,
    paddingBottom: 50,
  },
  box4: {
    display: "grid",
    gap: 0.1,
    gridTemplateColumns: "repeat(5, 1fr)",
    width: 100,
  },
  staricon: {
    color: "#26CE8D",
    width: 20,
    height: 20,
  },
  lorem1: {
    color: "#D1D4C9",
    fontSize: 14,
    marginTop: 5,
  },
  box5: {
    height: 30,
    marginTop: 30,
    width: 280,
    float: "right",
  },
  grid1: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  chatbub: {
    marginRight: 7,
    color: "#86888A",
  },
  comment: {
    color: "#86888A",
    fontSize: 14,
  },
  grid2: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  reportgmail: {
    marginRight: 7,
    color: "#86888A",
    marginTop: -2,
  },
  report: {
    color: "#86888A",
    fontSize: 14,
  },
  box6: {
    backgroundColor: "#2C2F31",
    minHeight: 120,
    marginTop: 80,
    borderRadius: 10,
    border: "1px solid #303336",
    paddingBottom: 15,
    paddingTop: 15,
  },
  gridcont2: {
    width: 240,
  },
  box7: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  replyicon1: {
    marginRight: 0,
    color: "#86888A",
  },
  box8: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    height: 30,
    alignItems: "flex-start",
    justifyContent: "center",
    textAlign: "left",
  },
  grid3: {
    width: "100%",
    marginTop: 10,
    paddingLeft: 40,
  },
  box9: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingRight: 20,
  },
  styletext: {
    width: "100%",
    paddingTop: 5,
    backgroundColor: "#131414",
    color: "#fff",
    borderRadius: 5,
  },
  box10: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  btnsubmit: {
    width: "80%",
    backgroundColor: "#20C284",
  },
  box11: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    height: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  replyicon: {
    marginRight: 7,
    color: "#86888A",
  },
  box12: {
    backgroundColor: "#2C2F31",
    minHeight: 120,
    marginTop: 20,
    borderRadius: 10,
    border: "1px solid #303336",
    paddingBottom: 15,
    paddingTop: 15,
  },
  box13: {
    display: "flex",
    width: "100%",
    flexDirection: "column",
    height: 30,
    alignItems: "flex-start",
    justifyContent: "center",
    textAlign: "left",
  },
  gmaill: {
    color: "#86888A",
    fontSize: 14,
    marginLeft: -13,
  },
  box14: {
    marginTop: 13,
    paddingLeft: 38,
    paddingRight: 38,
    paddingBottom: 10,
  },
  box15: {
    textAlign: "center",
    marginTop: 15,
  },
  loremtypo: {
    color: "#D1D4C9",
    fontSize: 14,
    marginTop: 5,
  },
  loadmore: {
    color: "#22B77E",
    fontSize: 14,
    marginTop: 5,
  },
};

export default function CommentCard() {
  return (
    <Box style={classes.box1}>
      <Grid container style={classes.gridcontainer}>
        <Grid item xs={4} style={{}}>
          <Box style={classes.box2}>
            <CardMedia
              style={classes.cardmedia}
              component="img"
              src={img}
              alt="marco"
            />
          </Box>
        </Grid>
        <Grid item xs={8} style={{}}>
          <Typography style={classes.gmail}>
            christianjames.c.pile@bulsu.edu.ph
          </Typography>
          <Typography style={classes.date}>Posted 1hours ago</Typography>
        </Grid>
      </Grid>

      <Box style={classes.box3}>
        <Box sx={classes.box4}>
          <StarIcon style={classes.staricon} />
          <StarIcon style={classes.staricon} />
          <StarIcon style={classes.staricon} />
          <StarIcon style={classes.staricon} />
          <StarIcon style={classes.staricon} />
        </Box>

        <Typography style={classes.lorem1}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ultricies
          integer quis auctor elit sed vulputate. Ac turpis egestas sed tempus
          urna et pharetra pharetra.
        </Typography>

        <Box style={classes.box5}>
          <Grid container spacing={2}>
            <Grid item xs={8} style={classes.grid1}>
              <ChatBubbleOutlineIcon style={classes.chatbub} />
              <Typography style={classes.comment}>10 Comments</Typography>
            </Grid>
            <Grid item xs={4} style={classes.grid2}>
              <ReportGmailerrorredIcon style={classes.reportgmail} />
              <Typography style={classes.report}>Report</Typography>
            </Grid>
          </Grid>
        </Box>

        <Box style={classes.box6}>
          <Grid container style={classes.gridcont2}>
            <Grid item xs={2} style={{}}>
              <Box style={classes.box7}>
                <ReplyIcon style={classes.replyicon1} />
              </Box>
            </Grid>
            <Grid item xs={9} style={{}}>
              <Box style={classes.box8}>
                <Typography style={classes.comment}>
                  Add your comment
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container style={classes.grid3}>
            <Grid item xs={8} style={{}}>
              <Box style={classes.box9}>
                <StyledTextField
                  variant="standard"
                  placeholder="Write your comment..."
                  multiline
                  rows={2}
                  rowsMax={10}
                  style={classes.styletext}
                />
              </Box>
            </Grid>
            <Grid item xs={4} style={{ marginTop: 3 }}>
              <Box style={classes.box10}>
                <Button variant="contained" style={classes.btnsubmit}>
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>

        <Box style={classes.box12}>
          <Grid container style={{ width: 320 }}>
            <Grid item xs={2} style={{}}>
              <Box style={classes.box11}>
                <ReplyIcon style={classes.replyicon} />
              </Box>
            </Grid>
            <Grid item xs={9} style={{}}>
              <Box style={classes.box13}>
                <Typography style={classes.gmaill}>
                  jesternon@gmail.com{" "}
                  <span style={{ marginLeft: 10 }}>3 hours ago</span>
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Box style={classes.box14}>
            <Typography style={classes.loremtypo}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ultricies integer quis auctor elit sed vulputate. Ac turpis
              egestas sed tempus urna et pharetra pharetra.
            </Typography>
          </Box>
        </Box>

        <Box style={classes.box15}>
          <Typography style={classes.loadmore}>
            Load more comments ...
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
