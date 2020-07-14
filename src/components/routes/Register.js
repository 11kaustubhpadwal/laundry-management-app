import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import RegistrationForm from "../register/RegistrationForm";

const Register = () => {
  return (
    <Fragment>
      <Container maxWidth="lg">
        <Navbar />
        <RegistrationForm />
        <Footer />
      </Container>
    </Fragment>
  );
};

export default Register;
