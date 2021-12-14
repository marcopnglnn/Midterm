import * as React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

const classes = {
  card: {
    display: "flex",
    width: 210,
    height: 110,
    backgroundColor: "#1E1F20",
    border: "1px solid #303336",
    boxSizing: "border-box",
    boxShadow: "4px 4px 20px rgba(0, 0, 0, 0.4)",
    borderRadius: 2,
  },
  img: {
    width: "35%",
  },
  imgbox: {
    display: "flex",
    flexDirection: "column",
  },
  imgcont: {
    flex: "1 0 auto",
  },
  imgname: {
    fontSize: 14,
    color: "#fff",
  },
  review: {
    color: "#7C7E83",
    fontSize: 12,
  },
  stariconbox: {
    display: "flex",
    alignItems: "center",
    pl: 1,
    pb: 1,
  },
  stariconbox2: {
    display: "flex",
    gap: 0.1,
    gridTemplateColumns: "repeat(5, 1fr)",
  },
  staricon: {
    color: "#26CE8D",
    width: 18,
    height: 18,
  },
};

export default function MediaControlCard() {
  return (
    <Card sx={classes.card}>
      <CardMedia component="img" sx={classes.img} src='/img/avatar.jpg' alt="image" />

      <Box sx={classes.imgbox}>
        <CardContent sx={classes.imgcont}>
          <Typography component="div" style={classes.imgname}>
            Christian Pile
          </Typography>
          <Typography style={classes.review} component="div">
            30 reviews
          </Typography>
        </CardContent>
        <Box sx={classes.stariconbox}>
          <Box sx={classes.stariconbox2}>
            <StarIcon style={classes.staricon} />
            <StarIcon style={classes.staricon} />
            <StarIcon style={classes.staricon} />
            <StarIcon style={classes.staricon} />
            <StarIcon style={classes.staricon} />
          </Box>
        </Box>
      </Box>
    </Card>
  );
}
