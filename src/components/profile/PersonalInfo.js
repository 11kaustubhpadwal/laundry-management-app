import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
});

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
              <Button variant="contained" color="primary">
                Edit profile
              </Button>
            </span>
          </Typography>
          <br />
          <Typography>First Name Last Name</Typography>
          <br />
          <Typography>Email ID</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default PersonalInfo;
