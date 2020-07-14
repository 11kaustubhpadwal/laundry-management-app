import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Medium from "../../assets/15kg.svg";
import Small from "../../assets/25kg.svg";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
    textAlign: "center",
    marginBottom: "60px",
    marginTop: "50px",
  },
});

const DryingService = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={1}
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Grid item xs={3}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <img
                src={Small}
                alt="15 kg"
                style={{ width: "10rem", margin: "10px" }}
              ></img>
              <Typography gutterBottom variant="h5" component="h2">
                Quantity - 15 kg
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Price - 7 PLN.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            style={{ justifyContent: "center", paddingBottom: "20px" }}
          >
            *Drying is optional and should be selected during checkout.
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <img
                src={Medium}
                alt="25 kg"
                style={{ width: "10rem", margin: "10px" }}
              ></img>
              <Typography gutterBottom variant="h5" component="h2">
                Quantity - 25 kg
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Price - 14 PLN
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            style={{ justifyContent: "center", paddingBottom: "20px" }}
          >
            *Drying is optional and should be selected during checkout.
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default DryingService;
