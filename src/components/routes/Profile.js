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
import { updateInfo } from "../../actions/authActions";
import ToastMessage from "../common/ToastMessage";

const Profile = ({ auth: { isAuthenticated, user, error }, updateInfo }) => {
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  if (isAuthenticated && user === null) {
    return <Loader />;
  }

  return (
    <Container maxWidth="lg">
      <Navbar />
      {(error !== null || (error !== null && error.errors.length > 1)) && (
        <ToastMessage msg={"Please provide both first and last names."} />
      )}
      <PersonalInfo user={user} updateInfo={updateInfo} />
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

export default connect(mapStateToProps, { updateInfo })(Profile);
