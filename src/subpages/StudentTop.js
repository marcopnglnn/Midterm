import * as React from "react";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import StarRating from "components/StarRating";

const classes = {
    card: {
        display: "flex",
        width: 250,
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


export default function MediaControlCard(props) {
    const { name, image, Reviews } = props

    return (
        <Card sx={classes.card}>
            <CardMedia component="img" sx={classes.img} src={image} alt="image" />

            <Box sx={classes.imgbox}>
                <CardContent sx={classes.imgcont}>
                    <Typography component="div" style={classes.imgname}>
                        {name}
                    </Typography>
                    <Typography style={classes.review} component="div">
                        {Reviews.length / 5} reviews
                    </Typography>
                </CardContent>
                <Box sx={classes.stariconbox}>
                    <Box sx={classes.stariconbox2}>
                        <StarRating readOnly value={computeRatings(Reviews)} />
                    </Box>
                </Box>
            </Box>
        </Card>
    );
}
