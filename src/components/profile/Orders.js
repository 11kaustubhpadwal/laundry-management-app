import React, { useState, forwardRef } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import Slide from "@material-ui/core/Slide";
import OrdersList from "./OrdersList";
import NewOrderForm from "./NewOrderForm";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const SimpleDialog = (props) => {
  const { onClose, open } = props;

  const handleClose = () => {
    onClose();
  };

  return (
    <Dialog TransitionComponent={Transition} onClose={handleClose} open={open}>
      <NewOrderForm handleClose={handleClose} />
    </Dialog>
  );
};

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

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

const Orders = (props) => {
  const classes = useStyles();

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
  };

  return (
    <div
      style={{
        width: "75%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "60px",
      }}
    >
      <Card className={classes.root} style={{ marginBottom: "20px" }}>
        <CardContent>
          <Typography variant="h5">
            All orders
            <span style={{ float: "right" }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleClickOpen}
              >
                Place new order
              </Button>
            </span>
          </Typography>
        </CardContent>
      </Card>
      <OrdersList />
      <SimpleDialog open={open} onClose={handleClose} />
    </div>
  );
};

export default Orders;
