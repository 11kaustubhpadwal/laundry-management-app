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
    width: "6rem",
  },
}));

const LoginForm = () => {
  const classes = useStyles();

  return (
    <div style={{ textAlign: "center", margin: "20px", marginBottom: "60px" }}>
      <h1>Login</h1>
      <div style={{ marginTop: "30px" }}>
        <h3>Please enter your credentials.</h3>
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
            type="email"
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
            inputProps={{ minLength: 8, maxLength: 20 }}
            type="password"
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
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
