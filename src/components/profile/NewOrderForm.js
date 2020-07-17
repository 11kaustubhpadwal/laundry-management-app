import React, { useState, Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import PaymentIcon from "@material-ui/icons/Payment";
import MoneyIcon from "@material-ui/icons/Money";

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
  formControl: {
    minWidth: 120,
  },
}));

const NewOrderForm = (props) => {
  const classes = useStyles();

  const [requiredService, setRequiredService] = useState(null);
  const [washing, setWashing] = useState(false);
  const [bleaching, setBleaching] = useState(false);
  const [quantity, setQuantity] = useState(0);
  const [clothes, setClothes] = useState(0);
  const [drying, setDrying] = useState(false);
  const [dryingQuantity, setDryingQuantity] = useState(0);
  const [disableSelection, setDisableSelection] = useState(false);
  const [cardPayment, setCardPayment] = useState(false);
  const [cashPayment, setCashPayment] = useState(false);
  const [finalAmount, setFinalAmount] = useState(0);

  const handleServiceChange = (event) => {
    if (event.target.value === "washing") {
      setWashing(true);
      setBleaching(false);
      setDisableSelection(false);
    }
    if (event.target.value === "bleaching") {
      setWashing(false);
      setBleaching(true);
      setDisableSelection(true);
      setFinalAmount(0);
    }

    setRequiredService(event.target.value);
  };

  const handleQuantityChange = (event) => {
    setQuantity(event.target.value);
    setFinalAmount(event.target.value + dryingQuantity);
  };

  const handleClothesChange = (event) => {
    setClothes(event.target.value);
    setFinalAmount(event.target.value * 5);
  };

  const handleDryingChange = () => {
    if (!drying) {
      setDrying(true);
      setFinalAmount(finalAmount + dryingQuantity);
    } else {
      setDrying(false);
      setFinalAmount(finalAmount - dryingQuantity);
      setDryingQuantity(0);
    }
  };

  const handleDryingQuantityChange = (event) => {
    setDryingQuantity(event.target.value);

    setFinalAmount(event.target.value + quantity);
  };

  const handlePaymentSelection = (event) => {
    if (event.target.name === "card") {
      setCardPayment(true);
      setCashPayment(false);
    }
    if (event.target.name === "cash") {
      setCardPayment(false);
      setCashPayment(true);
    }
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <p style={{ fontWeight: 600 }}>Please enter your personal details - </p>
        <TextField
          required
          label="First name"
          style={{ marginRight: "15px" }}
        />
        <TextField required label="Last name" />
      </div>
      <div style={{ marginTop: "30px" }}>
        <p style={{ fontWeight: 600 }}>Please select a service - </p>
        <FormControl variant="outlined" className={classes.formControl}>
          <InputLabel>Service *</InputLabel>
          <Select
            value={requiredService}
            onChange={handleServiceChange}
            label="Service"
          >
            <MenuItem value={"washing"}>Washing</MenuItem>
            <MenuItem value={"bleaching"}>Bleaching</MenuItem>
          </Select>
        </FormControl>
        {washing && (
          <Fragment>
            <p style={{ fontWeight: 600 }}>Please select quantity - </p>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>Quantity *</InputLabel>
              <Select
                value={quantity}
                onChange={handleQuantityChange}
                label="Quantity"
              >
                <MenuItem value={17}>15 kg</MenuItem>
                <MenuItem value={27}>25 kg</MenuItem>
                <MenuItem value={37}>35 kg</MenuItem>
              </Select>
            </FormControl>
          </Fragment>
        )}
        {bleaching && (
          <Fragment>
            <p style={{ fontWeight: 600 }}>
              Please enter the number of clothes -{" "}
            </p>
            <TextField
              value={clothes}
              onChange={handleClothesChange}
              required
              id="standard-basic"
              label="Number of clothes"
            />
          </Fragment>
        )}
        <div style={{ marginTop: "30px" }}>
          <p style={{ fontWeight: 600 }}>
            Please select if you want the optional drying service -{" "}
          </p>
          {disableSelection ? (
            <FormControlLabel
              control={
                <Checkbox
                  disabled
                  checked={drying}
                  onChange={handleDryingChange}
                  name="drying"
                  color="primary"
                />
              }
              label="Drying"
            />
          ) : (
            <FormControlLabel
              control={
                <Checkbox
                  checked={drying}
                  onChange={handleDryingChange}
                  name="drying"
                  color="primary"
                />
              }
              label="Drying"
            />
          )}
        </div>
        {drying && (
          <Fragment>
            <p style={{ fontWeight: 600 }}>
              Please select quantity for drying clothes -{" "}
            </p>
            <FormControl variant="outlined" className={classes.formControl}>
              <InputLabel>Quantity *</InputLabel>
              <Select
                value={dryingQuantity}
                onChange={handleDryingQuantityChange}
                label="Quantity"
              >
                <MenuItem value={7}>15 kg</MenuItem>
                <MenuItem value={14}>25 kg</MenuItem>
              </Select>
            </FormControl>
          </Fragment>
        )}
      </div>
      <div style={{ marginTop: "30px" }}>
        <p style={{ fontWeight: 600 }}>
          Please select a date and time for pickup -{" "}
        </p>
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
        <p style={{ fontWeight: 600 }}>
          Please enter your address for pickup and delivery -{" "}
        </p>
        <TextField
          required
          fullWidth
          label="Address for pickup and delivery"
          multiline
          rows={4}
          variant="outlined"
        />
      </div>
      <div style={{ marginTop: "30px" }}>
        <p style={{ fontWeight: 600 }}>Please select a payment method -</p>
        <FormControlLabel
          control={
            <Checkbox
              required
              icon={<PaymentIcon />}
              checked={cardPayment}
              onChange={handlePaymentSelection}
              name="card"
              color="primary"
            />
          }
          label="Card on delivery"
        />
        <FormControlLabel
          control={
            <Checkbox
              required
              icon={<MoneyIcon />}
              checked={cashPayment}
              onChange={handlePaymentSelection}
              name="cash"
              color="primary"
            />
          }
          label="Cash on delivery"
        />
      </div>
      <div style={{ marginTop: "30px" }}>
        <p>
          <strong>Total - {finalAmount} PLN</strong>
        </p>
      </div>
      <Button variant="contained" color="primary" style={{ marginTop: "20px" }}>
        Submit
      </Button>
      <Button
        variant="contained"
        color="secondary"
        style={{ marginTop: "20px", marginLeft: "20px" }}
        onClick={props.handleClose}
      >
        Cancel
      </Button>
    </form>
  );
};

export default NewOrderForm;
