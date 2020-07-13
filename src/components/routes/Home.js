import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Container from "@material-ui/core/Container";

const Home = () => {
  return (
    <Fragment>
      <Container maxWidth="lg">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </Container>
    </Fragment>
  );
};

export default Home;
