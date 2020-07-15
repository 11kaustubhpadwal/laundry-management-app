import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import OrdersList from "./OrdersList";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Orders = () => {
  const classes = useStyles();

  return (
    <div
      style={{
        width: "75%",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "60px",
      }}
    >
      <Card className={classes.root} style={{ marginBottom: "20px" }}>
        <CardContent>
          <Typography variant="h5">
            All orders
            <span style={{ float: "right" }}>
              <Button variant="contained" color="primary">
                Place new order
              </Button>
            </span>
          </Typography>
        </CardContent>
      </Card>
      <OrdersList />
    </div>
  );
};

export default Orders;
