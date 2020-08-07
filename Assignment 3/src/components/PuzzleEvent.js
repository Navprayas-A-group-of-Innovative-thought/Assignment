import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';

const useStyles = makeStyles({
  card: {
    display: 'flex',
    paddingLeft: 80,
    paddingRight: 50,
  },
  cardDetails: {
    flex: 1,
    paddingLeft: 10,
    paddingBottom: 5
  },
  cardMedia: {
    width: 350,
    
  },
});

const PuzzleEvent = () => {
  const classes = useStyles();

  const theme = useTheme();
  return (
    <Grid >
      <CardActionArea component="a" href="#">
        <Card className={classes.card}>
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography component="h2" variant="h5">
                PUZZLE
              </Typography>
              <Typography variant="subtitle1" color="textSecondary">
                2020
              </Typography>
              <Typography variant="subtitle1" paragraph>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. 
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Continue reading...
              </Typography>
            </CardContent>
          </div>
          <Hidden xsDown>
            <CardMedia className={classes.cardMedia} image = {require("./../assets/images/puzzle.jpg")} title = 'MTSE' />
    
          </Hidden>
        </Card>
      </CardActionArea>
    </Grid>
  );
}

export default PuzzleEvent