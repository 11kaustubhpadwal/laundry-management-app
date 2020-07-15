import React from "react";
import Container from "@material-ui/core/Container";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import BleachingService from "../bleaching/BleachingService";

const Bleaching = () => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <div
        style={{ textAlign: "center", margin: "20px", marginBottom: "60px" }}
      >
        <h1>Bleaching</h1>
        <div>
          <h3>
            Bleaching of clothes for stain removal depends on the number of
            clothes.
          </h3>
          <BleachingService />
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Bleaching;
