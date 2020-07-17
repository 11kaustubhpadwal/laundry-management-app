import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 275,
    [theme.breakpoints.down("xs")]: {
      minWidth: "12rem",
    },
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "15px",
      marginTop: "40px",
    },
    [theme.breakpoints.down("xs")]: {
      width: "6rem",
    },
  },
  card: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "20px",
    },
  },
}));

const PersonalInfo = () => {
  const classes = useStyles();

  const [edit, setEdit] = useState(false);

  const handleClick = () => {
    setEdit(true);
  };

  const handleCancelClick = () => {
    setEdit(false);
  };

  return (
    <div
      style={{
        width: "75%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "50px",
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1>Hello, {"First Name"}</h1>
      </div>
      <Card className={classes.root}>
        <CardContent>
          <Typography variant="h5">
            Personal information{" "}
            <span style={{ float: "right" }}>
              {!edit && (
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={handleClick}
                >
                  Edit profile
                </Button>
              )}
              {edit && (
                <Button
                  variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={handleClick}
                >
                  Save changes
                </Button>
              )}
              {edit && (
                <Button
                  style={{ marginLeft: "10px" }}
                  variant="contained"
                  color="secondary"
                  className={classes.button}
                  onClick={handleCancelClick}
                >
                  Cancel
                </Button>
              )}
            </span>
          </Typography>
          <br />
          {!edit && (
            <Typography className={classes.card}>
              First Name Last Name
            </Typography>
          )}
          {edit && (
            <form className={classes.root} autoComplete="off">
              <TextField
                id="standard-basic"
                label="First name"
                inputProps={{ minLength: 2, maxLength: 12 }}
              />
              <TextField
                id="standard-basic"
                label="Last name"
                inputProps={{ minLength: 2, maxLength: 12 }}
                style={{ marginLeft: "15px" }}
              />
            </form>
          )}
          <br />
          <Typography>Email ID</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonalInfo;
