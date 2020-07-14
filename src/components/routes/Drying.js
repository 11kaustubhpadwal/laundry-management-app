import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import DryingService from "../drying/DryingService";

const Drying = () => {
  return (
    <Fragment>
      <Container maxWidth="lg">
        <Navbar />
        <div
          style={{ textAlign: "center", margin: "20px", marginBottom: "60px" }}
        >
          <h1>Drying</h1>
          <div>
            <h3>The following options for drying clothes are available - </h3>
            <DryingService />
          </div>
        </div>
        <Footer />
      </Container>
    </Fragment>
  );
};

export default Drying;
