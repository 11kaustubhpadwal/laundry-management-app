import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import errorImage from "../../assets/404.svg";

const NotFound = () => {
  return (
    <div style={{ textAlign: "center" }}>
      <Navbar />
      <img src={errorImage} alt="Error 404." style={{ width: "13rem" }}></img>
      <h2 style={{ marginBottom: "100px" }}>Page not found.</h2>
      <Footer />
    </div>
  );
};

export default NotFound;
