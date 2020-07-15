import React from "react";
import Container from "@material-ui/core/Container";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import Description from "../home/Description";
import Services from "../home/Services";

const Home = () => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <Description />
      <Services />
      <Footer />
    </Container>
  );
};

export default Home;
