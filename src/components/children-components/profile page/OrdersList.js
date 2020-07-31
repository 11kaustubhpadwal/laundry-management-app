import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import ToastMessage from "../../common/ToastMessage";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#3d5afe",
    },
    secondary: {
      main: "#f44336",
    },
  },
});

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(orderNumber, details, placedOn, status, cancel) {
  return { orderNumber, details, placedOn, status, cancel };
}

const rows = [
  createData(
    9987998,
    <Button variant="contained" color="primary">
      View
    </Button>,
    " 10/07/2020",
    <Chip label="Completed" color="primary" />,
    <Button variant="contained" color="secondary" disabled>
      Cancel
    </Button>
  ),
  createData(
    9987990,
    <Button variant="contained" color="primary">
      View
    </Button>,
    "9/9/20",
    <Chip label="In progress" />,
    <Button variant="contained" color="secondary">
      Cancel
    </Button>
  ),
  createData(
    9987995,
    <Button variant="contained" color="primary">
      View
    </Button>,
    "31/9/20",
    <Chip label="Cancelled" color="default" variant="outlined" />,
    <Button variant="contained" color="secondary" disabled>
      Cancel
    </Button>
  ),
];

const OrdersList = ({ orders }) => {
  const classes = useStyles();

  if (orders.error !== null) {
    return <ToastMessage msg={orders.error.msg} />;
  }

  if (orders.orders.length === 0) {
    return (
      <div style={{ marginBottom: "170px" }}>
        <h3 style={{ marginTop: "70px", textAlign: "center" }}>
          You haven't ordered anything yet. All your orders will appear here
          once you place them.
        </h3>
      </div>
    );
  } else {
    return (
      <ThemeProvider theme={theme}>
        <TableContainer component={Paper}>
          <Table className={classes.table} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Order number</TableCell>
                <TableCell align="center">Details</TableCell>
                <TableCell align="center">Placed on</TableCell>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Cancel</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.orderNumber}</TableCell>
                  <TableCell align="center">{row.details}</TableCell>
                  <TableCell align="center">{row.placedOn}</TableCell>
                  <TableCell align="center">{row.status}</TableCell>
                  <TableCell align="center">{row.cancel}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </ThemeProvider>
    );
  }
};

OrdersList.propTypes = {
  orders: PropTypes.object.isRequired,
};

export default OrdersList;
