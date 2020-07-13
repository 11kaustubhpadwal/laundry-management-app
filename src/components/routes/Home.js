import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Description from "../home/Description";
import Services from "../home/Services";

const Home = () => {
  return (
    <Fragment>
      <Container maxWidth="lg">
        <Navbar />
        <Description />
        <Services />
        <Footer />
      </Container>
    </Fragment>
  );
};

export default Home;
