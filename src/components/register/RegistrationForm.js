import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "22rem",
    marginLeft: "auto",
    marginRight: "auto",
    [theme.breakpoints.down("xs")]: {
      width: "15rem",
    },
  },
  button: {
    width: "8rem",
  },
}));

const RegistrationForm = () => {
  const classes = useStyles();

  return (
    <div style={{ textAlign: "center", margin: "20px", marginBottom: "60px" }}>
      <h1>Register</h1>
      <div style={{ marginTop: "30px" }}>
        <h3>Create a new account.</h3>
      </div>
      <form className={classes.root} autoComplete="off">
        <div
          style={{
            marginTop: "40px",
            marginBottom: "20px",
          }}
        >
          <TextField
            required
            fullWidth
            id="outlined-required"
            label="First Name"
            variant="outlined"
          />
        </div>
        <div
          style={{
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <TextField
            required
            fullWidth
            id="standard-basic"
            label="Last Name"
            variant="outlined"
          />
        </div>
        <div
          style={{
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <TextField
            required
            fullWidth
            id="standard-basic"
            label="Email"
            variant="outlined"
          />
        </div>
        <div
          style={{
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <TextField
            required
            fullWidth
            id="standard-basic"
            label="Password"
            variant="outlined"
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          style={{ margin: "20px" }}
        >
          Register
        </Button>
      </form>
    </div>
  );
};

export default RegistrationForm;
