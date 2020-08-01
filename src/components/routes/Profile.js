import React, { useEffect } from "react";
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
import { getOrders, placeOrder, cancelOrder } from "../../actions/orderActions";
import ToastMessage from "../common/ToastMessage";

const Profile = ({
  auth: { isAuthenticated, user, error },
  updateInfo,
  orders,
  getOrders,
  placeOrder,
  cancelOrder,
}) => {
  useEffect(() => {
    getOrders();
  }, []);

  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  if (
    (isAuthenticated && user === null) ||
    (isAuthenticated && orders === [])
  ) {
    return <Loader />;
  }

  return (
    <Container maxWidth="lg">
      <Navbar />
      {(error !== null || (error !== null && error.errors.length > 1)) && (
        <ToastMessage msg={"Please provide both first and last names."} />
      )}
      <PersonalInfo user={user} updateInfo={updateInfo} />
      <Orders
        orders={orders}
        placeOrder={placeOrder}
        cancelOrder={cancelOrder}
      />
      <Footer />
    </Container>
  );
};

Profile.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  orders: state.order,
});

export default connect(mapStateToProps, {
  updateInfo,
  getOrders,
  placeOrder,
  cancelOrder,
})(Profile);
