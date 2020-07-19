import React from "react";
import Container from "@material-ui/core/Container";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import PersonalInfo from "../children-components/profile page/PersonalInfo";
import Orders from "../children-components/profile page/Orders";

const Profile = () => {
  return (
    <Container maxWidth="lg">
      <Navbar />
      <PersonalInfo />
      <Orders />
      <Footer />
    </Container>
  );
};

export default Profile;
