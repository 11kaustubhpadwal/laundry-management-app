import React from "react";
import Alert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "23rem",
    marginLeft: "auto",
    marginRight: "auto",
  },
}));

const ToastMessage = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Alert severity="error">{props.msg}</Alert>
    </div>
  );
};

export default ToastMessage;
