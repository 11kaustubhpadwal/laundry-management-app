import React, { useState } from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Container from "@material-ui/core/Container";
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

const PasswordResetScreen = () => {
  const classes = useStyles();

  const [password, setPassword] = useState("");

  const handleInputChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(password);
    setPassword("");
  };

  return (
    <Container maxWidth="lg">
      <Navbar />
      <div
        style={{ textAlign: "center", margin: "20px", marginBottom: "60px" }}
      >
        <h1>Change your password</h1>
        <div style={{ marginTop: "30px" }}>
          <h3>Please enter your new password.</h3>
        </div>
        <form
          className={classes.root}
          autoComplete="off"
          onSubmit={handleSubmit}
        >
          <div
            style={{
              marginTop: "40px",
              marginBottom: "20px",
            }}
          >
            <TextField
              required
              fullWidth
              type="password"
              id="standard-basic"
              label="Password"
              variant="outlined"
              value={password}
              inputProps={{ minLength: 8, maxLength: 20 }}
              onChange={handleInputChange}
            />
          </div>
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            style={{ margin: "20px" }}
            type="submit"
          >
            Submit
          </Button>
        </form>
      </div>
      <Footer />
    </Container>
  );
};

export default PasswordResetScreen;
