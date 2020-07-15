import React from "react";
import Container from "@material-ui/core/Container";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import RegistrationForm from "../register/RegistrationForm";

const Register = () => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <RegistrationForm />
      <Footer />
    </Container>
  );
};

export default Register;
