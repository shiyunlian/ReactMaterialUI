import React from "react";
import {
  Typography,
  AppBar,
  Button,
  Card,
  CardActions,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
  CardContent,
} from "@material-ui/core";
import PhotoCameraIcon from "@material-ui/icons/PhotoCamera";
import { makeStyles } from "@material-ui/core/styles";

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// create a hook called useStyles, that is equal to a function called makeStyles
// pass a callback function that returns an object containing all the styles
const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.paper, //material ui built-in color: white
    padding: 30,
  },
  icon: {
    marginRight: "20px",
  },
  button: {
    marginTop: "20px",
  },
  card: {
    minWidth: 285,
    fontSize: 14,
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardGrid: {
    padding: 10,
  },
  cardMedia: {
    paddingTop: "56.25%", // aspect ratio of 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: "50px 0", //50px on top and bottom, 0 on left and right
  },
}));

// Grid is used for responsive design and positioning things on the page,
// need a grid container with some spacing
const App = () => {
  const classes = useStyles();
  return (
    <>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <PhotoCameraIcon className={classes.icon} />
          <Typography variant="h6">Photo Album</Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Photo Album
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Hello, this is a photo album
            </Typography>
            <div className={classes.button}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    See my photos
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  ></CardMedia>
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      Heading
                    </Typography>
                    <Typography gutterBottom variant="h5">
                      This is a media card.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
                    </Button>
                    <Button size="small" color="primary">
                      Edit
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterbottom>
          Footer
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          Thank you
        </Typography>
      </footer>
    </>
  );
};

export default App;
