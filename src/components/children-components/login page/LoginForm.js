import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ToastMessage from "../../common/ToastMessage";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";
import { loginUser } from "../../../actions/authActions";

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

const LoginForm = ({ auth: { isAuthenticated, error }, loginUser }) => {
  const history = useHistory();

  useEffect(() => {
    if (isAuthenticated) {
      history.push("/profile");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

  const classes = useStyles();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (prop) => (event) => {
    setFormData({ ...formData, [prop]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    loginUser(formData);
    setFormData({ email: "", password: "" });
  };

  return (
    <div style={{ textAlign: "center", margin: "20px", marginBottom: "60px" }}>
      {error !== null && <ToastMessage msg={error.msg} />}
      <h1>Login</h1>
      <div style={{ marginTop: "30px" }}>
        <h3>Please enter your credentials.</h3>
      </div>
      <form className={classes.root} autoComplete="off" onSubmit={handleSubmit}>
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
            value={formData.email}
            onChange={handleInputChange("email")}
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
            value={formData.password}
            onChange={handleInputChange("password")}
          />
        </div>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          style={{ margin: "20px" }}
          type="submit"
        >
          Login
        </Button>
      </form>
    </div>
  );
};

LoginForm.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { loginUser })(LoginForm);
