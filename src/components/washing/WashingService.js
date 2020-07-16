import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Medium from "../../assets/15kg.svg";
import Small from "../../assets/25kg.svg";
import Large from "../../assets/35kg.svg";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  services: {
    textAlign: "center",
  },
  root: {
    maxWidth: "20rem",
  },
});

const WashingService = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={4}
      direction="row"
      justify="center"
      alignItems="center"
      style={{
        marginBottom: "60px",
        marginTop: "50px",
      }}
    >
      <Grid item xs={12} sm={6} md={4} lg={4} className={classes.root}>
        <Card className={classes.services}>
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
                Price - 17 PLN.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ justifyContent: "center" }}>
            <Link to="/washing/option1" style={{ textDecoration: "none" }}>
              <Button size="small" color="black">
                choose
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} className={classes.root}>
        <Card className={classes.services}>
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
                Price - 27 PLN
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ justifyContent: "center" }}>
            <Link to="/washing/option2" style={{ textDecoration: "none" }}>
              <Button size="small" color="black">
                choose
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4} lg={4} className={classes.root}>
        <Card className={classes.services}>
          <CardActionArea>
            <CardContent>
              <img
                src={Large}
                alt="35 kg"
                style={{ width: "10rem", margin: "10px" }}
              ></img>
              <Typography gutterBottom variant="h5" component="h2">
                Quantity - 35 kg
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Price - 37 PLN
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ justifyContent: "center" }}>
            <Link to="/washing/option3" style={{ textDecoration: "none" }}>
              <Button size="small" color="black">
                choose
              </Button>
            </Link>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default WashingService;
