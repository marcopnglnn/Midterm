import React from "react";
import StarIcon from "@mui/icons-material/Star";
import {
    styled,
    Rating,
} from "@mui/material";
const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
        color: '#26CE8D',
    },
    '& .MuiRating-iconHover': {
        color: '#26CE8D',
    },
});
const classes = {
    stariconDisabled: {
        color: "#5b635e"
    },
}

const StarRating = ({
    value,
    readOnly = false,
    onChange = null,
    size = "small"
}) => {
    return <StyledRating
        name="customized-color"
        value={value}
        readOnly={readOnly}
        onChange={(event, newValue) => {
            if (onChange) {
                onChange(newValue);
            }
        }}
        icon={<StarIcon fontSize={size} />}
        emptyIcon={<StarIcon fontSize={size} style={classes.stariconDisabled} />}
    />
}

export default StarRating;