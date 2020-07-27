import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Logo from "../../assets/car.svg";

const useStyles = makeStyles((theme) => ({
  link: {
    textAlign: "center",
    textDecoration: "none",
    color: "black",
  },
  logo: {
    width: "5rem",
  },
  root: {
    [theme.breakpoints.down("md")]: {
      marginBottom: "30px",
    },
    [theme.breakpoints.down("sm")]: {
      marginBottom: "50px",
      marginTop: "20px",
    },
    marginBottom: "35px",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <Grid item xs={12} sm={2} md={2} lg={2} className={classes.link}>
        <Link to="/" className={classes.link}>
          Home
        </Link>
      </Grid>
      <Grid item xs={12} sm={2} md={2} lg={2} className={classes.link}>
        <Link to="/about" className={classes.link}>
          About
        </Link>
      </Grid>
      <Grid item xs={12} sm={2} md={2} lg={2} className={classes.link}>
        <img src={Logo} alt="Logo" className={classes.logo}></img>
      </Grid>
      <Grid item xs={12} sm={2} md={2} lg={2} className={classes.link}>
        <Link to="/register" className={classes.link}>
          Register
        </Link>
      </Grid>
      <Grid item xs={12} sm={2} md={2} lg={2} className={classes.link}>
        <Link to="/login" className={classes.link}>
          Login
        </Link>
      </Grid>
    </Grid>
  );
};

export default Navbar;
