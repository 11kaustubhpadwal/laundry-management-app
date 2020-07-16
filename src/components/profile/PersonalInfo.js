import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

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
              <Button
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Edit profile
              </Button>
            </span>
          </Typography>
          <br />
          <Typography className={classes.card}>First Name Last Name</Typography>
          <br />
          <Typography>Email ID</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonalInfo;
