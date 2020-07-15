import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "26rem",
    margin: theme.spacing(4),
  },
  container: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    width: 200,
  },
}));

const NewOrderForm = (props) => {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <p>Please enter your personal details - </p>
        <TextField
          required
          label="First name"
          style={{ marginRight: "15px" }}
        />
        <TextField required label="Last name" />
      </div>
      <div style={{ marginTop: "30px" }}>
        <p>Please select a date and time for pickup - </p>
        <TextField
          id="datetime-local"
          required
          label="Pickup date and time"
          type="datetime-local"
          defaultValue="2020-01-01T12:00"
          className={(classes.textField, classes.container)}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>
      <div style={{ marginTop: "30px" }}>
        <p>Please enter your address for pickup and delivery - </p>
        <TextField
          required
          fullWidth
          label="Address for pickup and delivery"
          multiline
          rows={4}
          variant="outlined"
        />
      </div>
      <Button variant="contained" color="primary" style={{ marginTop: "20px" }}>
        Submit
      </Button>
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "20px", marginLeft: "20px" }}
        onClick={props.handleClose}
      >
        Close
      </Button>
    </form>
  );
};

export default NewOrderForm;
