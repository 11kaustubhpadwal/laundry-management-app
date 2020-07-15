import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import Dialog from "@material-ui/core/Dialog";
import NewOrderForm from "./NewOrderForm";
import Slide from "@material-ui/core/Slide";

const Transition = forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const FormPopup = (props) => {
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

FormPopup.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};

export default FormPopup;
