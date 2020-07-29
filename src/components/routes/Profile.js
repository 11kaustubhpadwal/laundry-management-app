import React from "react";
import Container from "@material-ui/core/Container";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import PersonalInfo from "../children-components/profile page/PersonalInfo";
import Orders from "../children-components/profile page/Orders";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Loader from "../common/Loader";

const Profile = ({ auth: { isAuthenticated, user } }) => {
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  if (isAuthenticated && user === null) {
    return <Loader />;
  }

  return (
    <Container maxWidth="lg">
      <Navbar />
      <PersonalInfo user={user} />
      <Orders />
      <Footer />
    </Container>
  );
};

Profile.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(Profile);
