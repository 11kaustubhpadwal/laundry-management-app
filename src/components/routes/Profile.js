import React, { Fragment } from "react";
import Container from "@material-ui/core/Container";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import PersonalInfo from "../profile/PersonalInfo";
import Orders from "../profile/Orders";

const Profile = () => {
  return (
    <Fragment>
      <Container maxWidth="lg">
        <Navbar />
        <PersonalInfo />
        <Orders />
        <Footer />
      </Container>
    </Fragment>
  );
};

export default Profile;
