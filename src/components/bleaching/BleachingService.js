import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Button from "@material-ui/core/Button";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import BleachingImage from "../../assets/bleachingService.svg";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles({
  root: {
    maxWidth: 280,
    textAlign: "center",
    marginBottom: "60px",
    marginTop: "50px",
  },
});

const BleachingService = () => {
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
                src={BleachingImage}
                alt="15 kg"
                style={{ width: "10rem", margin: "10px" }}
              ></img>
              <Typography gutterBottom variant="h5" component="h2">
                Quantity - 1
              </Typography>
              <Typography variant="body2" color="textPrimary" component="p">
                Price - 5 PLN.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions
            style={{
              justifyContent: "center",
              paddingLeft: "20px",
              paddingRight: "20px",
              paddingBottom: "20px",
            }}
          >
            Bleaching of clothes for stain removal costs 5 PLN per piece of
            cloth (for e.g. Shirt, Jeans, etc.).
          </CardActions>
          <CardActions
            style={{
              justifyContent: "center",
            }}
          >
            <Link to="/bleaching/choose" style={{ textDecoration: "none" }}>
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

export default BleachingService;
