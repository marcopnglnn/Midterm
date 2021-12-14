import * as React from "react";
import { Typography, Box } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const classes = {
  box1: {
    textAlign: "center",
    paddingTop: 30,
  },
  box2: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    alignItems: "center",
    margin: "auto",
    width: 100,
  },
  twittericon: {
    color: "#00FF9D",
    width: 25,
    height: 25,
  },
  discord: {
    color: "#00FF9D",
    width: 25,
    height: 25,
  },
  facebookicon: {
    color: "#00FF9D",
    width: 30,
    height: 25,
    marginLeft: 25,
  },
  contacthead: {
    fontSize: 14,
    color: "#7C7E83",
    marginTop: 8,
  },
  contact: {
    color: "#22B77E",
    textDecoration: "underline",
  },
  allrights: {
    fontSize: 14,
    color: "#7C7E83",
    marginTop: 8,
  },
  terms: {
    fontSize: 14,
    color: "#22B77E",
    marginTop: 8,
  },
  box3: {
    float: "right",
    marginTop: -20,
    marginRight: 40,
    width: 80,
    height: 30,
    backgroundColor: "#22B77E",
    borderRadius: 30,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  outlineicon: {
    fontSize: 18,
    color: "#fff",
    marginRight: 3,
  },
  help: {
    fontSize: 14,
    color: "#fff",
  },
};

export default function Footer() {
  return (
    <Box style={classes.box1}>
      <Box style={classes.box2}>
        <TwitterIcon style={classes.twittericon} />
        <span className="material-icons blue-color" style={classes.discord}>
          {" "}
          discord
        </span>
        <FacebookIcon style={classes.facebookicon} />
      </Box>
      <Typography style={classes.contacthead}>
        Contact us{" "}
        <span style={classes.contact}>support@studentreview.com</span>
      </Typography>
      <Typography style={classes.allrights}>
        &#9400; 2021 Student Review. All Rights Reserved
      </Typography>
      <Typography style={classes.terms}>
        Terms of Service | Privacy Policy
      </Typography>

      <Box style={classes.box3}>
        <HelpOutlineOutlinedIcon style={classes.outlineicon} />
        <Typography style={classes.help}>Help</Typography>
      </Box>
    </Box>
  );
}
