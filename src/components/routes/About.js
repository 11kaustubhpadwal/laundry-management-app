import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Information from "../about/Information";

const About = () => {
  return (
    <div>
      <Fragment>
        <Container maxWidth="lg">
          <Navbar />
          <Information />
          <Footer />
        </Container>
      </Fragment>
    </div>
  );
};

export default About;
