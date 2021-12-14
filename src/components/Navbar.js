import * as React from "react";
import {
  styled,
  AppBar,
  Box,
  Toolbar,
  Typography,
  InputBase,
  Avatar,
  Tooltip,
  IconButton,
  ListItemIcon,
  MenuItem,
  Menu,
  Divider,
  Popover,
  Grid,
} from "@mui/material";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import GridViewIcon from "@mui/icons-material/GridView";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import Logout from "./Logout";
import Login from 'components/Login'

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#131414",
  "&:hover": {
    backgroundColor: "#3d3e3f",
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  background: "#131414",
  border: "1px solid #2C2F31",
  boxSizing: "border-box",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
  width: "237px",
}));

const appBar = {
  backgroundColor: "#1E1F20",
};

const listsNav = {
  color: "white",
  fontStyle: "normal",
  fontWeight: 500,
  fontSize: 14,
  marginRight: 48,
  marginTop: -5,
  borderTop: "3px solid #26CE8D",
  height: 5,
  paddingTop: 5,
};

const classes = {
  box: {
    flexGrow: 1,
  },
  box2: {
    justifyContent: "space-between",
    display: "grid",
    gap: 1,
    gridTemplateColumns: "repeat(2, 1fr)",
    width: 367,
  },
  header: {
    flexGrow: 1,
    display: { xs: "none", sm: "block" },
  },
  box3: {
    mt: 0.5,
  },
  box4: {
    width: "100%",
  },
  box5: {
    display: "flex",
    justifyContent: "center",
  },
  accounticon: {
    width: 28,
    height: 28,
  },
};
const ProfileDropDown = ({ user }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (<>
    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
      <Tooltip title="Account settings">
        <IconButton onClick={handleClick} size="small" sx={{ ml: 2 }}>
          <Avatar alt={user.name} src={user.image} />
          {/* <Avatar alt={user.name} src={user.image} sx={{ width: 32, height: 32 }}></Avatar> */}
        </IconButton>
      </Tooltip>
    </Box>
    <Menu
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      onClick={handleClose}
      PaperProps={{
        elevation: 0,
        sx: {
          overflow: 'visible',
          filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
          mt: 1.5,
          '& .MuiAvatar-root': {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          '&:before': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            right: 14,
            width: 10,
            height: 10,
            bgcolor: 'background.paper',
            transform: 'translateY(-50%) rotate(45deg)',
            zIndex: 0,
          },
        },
      }}
      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      <MenuItem>
        <Typography>{user.name}</Typography>
      </MenuItem>
      <MenuItem>
        <Typography>{user.email}</Typography>
      </MenuItem>
      <Divider />
      <Logout />
    </Menu>
  </>
  )
}

const SignInPopover = () => {
  const _classes = {
    studlistsignin1: {
      textAlign: "center",
      marginTop: 20,
      paddingRight: 30,
      paddingLeft: 30,
    },
    typosignin: {
      color: "#D1D4C9",
      fontSize: 18,
    },
    typosigntoreview: {
      color: "#B6B6B5",
      fontSize: 14,
      marginTop: 8,
    },
    gridcontainer: {
      marginTop: 15,
      width: 140,
      margin: "auto",
      cursor: "pointer",
    },
    facebook: {
      width: 40,
      height: 40,
      color: "#4267B2",
    },
    twitter: {
      width: 40,
      height: 40,
      color: "#00ACEE",
    },
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  return (
    <>
      <AccountCircleIcon aria-describedby={id} style={classes.accounticon} onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Box style={_classes.studlistsignin1}>
          <Typography style={_classes.typosignin}>Sign In</Typography>
          <Typography style={_classes.typosigntoreview}>
            Sign In to review and rate students
          </Typography>

          <Grid container spacing={1} style={classes.gridcontainer}>
            <Grid item xs={4}>
              <FacebookIcon style={_classes.facebook} />
            </Grid>
            <Grid item xs={4}>
              <TwitterIcon style={_classes.twitter} />
            </Grid>
            <Grid item xs={4}>
              <Login />
            </Grid>
          </Grid>
        </Box>
      </Popover>
    </>
  )
}

export default function SearchAppBar(props) {
  const { user } = props
  return (
    <Box sx={classes.box}>
      <AppBar position="static" style={appBar}>
        <Toolbar>
          <Box sx={classes.box2}>
            <Box>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={classes.header}
              >
                Student Review
              </Typography>
            </Box>
            <Box sx={classes.box3}>
              <GridViewIcon />
            </Box>
          </Box>

          <Box style={classes.box4}>
            <Box sx={classes.box5}>
              <Link style={listsNav} to="/">
                Student List
              </Link>

              <Typography style={listsNav}> Student Evaluation</Typography>
              <Typography style={listsNav}>Blog</Typography>
            </Box>
          </Box>
          {
            user ? <ProfileDropDown user={user} /> : <SignInPopover />
          }


          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
