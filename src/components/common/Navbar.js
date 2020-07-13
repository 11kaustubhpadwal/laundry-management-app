import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Logo from "../../assets/car.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  link: {
    textAlign: "center",
    textDecoration: "none",
    marginTop: "10px",
    marginLeft: "25px",
    marginRight: "25px",
    marginBottom: "20px",
    color: "black",
  },
  logo: {
    width: "5rem",
  },
}));

const Navbar = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <Grid
        container
        spacing={1}
        direction="row"
        justify="center"
        alignItems="center"
      >
        <Grid item xs={1} className={classes.link}>
          <Link to="/" className={classes.link}>
            Home
          </Link>
        </Grid>
        <Grid item xs={1} className={classes.link}>
          <Link to="/about" className={classes.link}>
            About
          </Link>
        </Grid>
        <Grid item xs={1} className={classes.link}>
          <img src={Logo} alt="Logo" className={classes.logo}></img>
        </Grid>
        <Grid item xs={1} className={classes.link}>
          <Link to="/register" className={classes.link}>
            Register
          </Link>
        </Grid>
        <Grid item xs={1} className={classes.link}>
          <Link to="/login" className={classes.link}>
            Login
          </Link>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default Navbar;
