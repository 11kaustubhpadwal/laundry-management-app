import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Washing from "../../assets/washing.svg";
import Drying from "../../assets/drying.svg";
import Bleaching from "../../assets/bleaching.svg";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
    textAlign: "center",
    marginBottom: "60px",
    marginTop: "50px",
  },
});

const Services = () => {
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
                src={Washing}
                alt="Washing"
                style={{ width: "10rem", margin: "10px" }}
              ></img>
              <Typography gutterBottom variant="h5" component="h2">
                Washing
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Clothes washing from 17 PLN (20kg).
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ justifyContent: "center" }}>
            <Button size="small" color="black">
              choose
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <img
                src={Drying}
                alt="Drying"
                style={{ width: "10rem", margin: "10px" }}
              ></img>
              <Typography gutterBottom variant="h5" component="h2">
                Drying
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Clothes drying from 7 PLN (20kg).
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ justifyContent: "center" }}>
            <Button size="small" color="black">
              choose
            </Button>
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={3}>
        <Card className={classes.root}>
          <CardActionArea>
            <CardContent>
              <img
                src={Bleaching}
                alt="Bleaching"
                style={{ width: "10rem", margin: "10px" }}
              ></img>
              <Typography gutterBottom variant="h5" component="h2">
                Bleaching
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Clothes bleaching from 5 PLN.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions style={{ justifyContent: "center" }}>
            <Button size="small" color="black">
              choose
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Services;
