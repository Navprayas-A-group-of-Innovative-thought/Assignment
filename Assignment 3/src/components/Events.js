import React from 'react';
import NavBar from './NavBar'
import EventCards from './EventCards'
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

  heroContent: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(2),
  }
}));

const Events = () => {

  const classes = useStyles();
   
  return (
      
    
    
      <div>
        <CssBaseline />
       <NavBar />
      <div className={classes.heroContent}>
        <Container maxWidth="sm">
        <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom>
              Events
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            LOREL ISPUM
            </Typography>
           
          </Container>
      </div>
      
      <EventCards />

      </div>
      
      
   );
}

export default Events