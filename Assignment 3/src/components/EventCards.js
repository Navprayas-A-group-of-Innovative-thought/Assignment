import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import EventCard from './EventCard'
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({

    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    }

  }));


const EventCards = () => {

    const classes = useStyles();

    const image_name = ['mtse',  'puzzle', 'chess', 'rangotsav','sketch', 'poem']
    const card_title = ['MTSE', 'PUZZLE', 'CHESS' ,'RANGOTSAV','SKETCH','POEM']
    const cards = [0, 1, 2, 3, 4, 5]
    const currentCard = 'mtse'

    return (
        <div>
             <CssBaseline />
          <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => 
            (<Grid item key={card} xs={12} sm={6} lg={4} xl={3}> 
                <EventCard card={ card_title[card] } image ={image_name[card] } />
            </Grid> ))}
          </Grid>
          </Container>  
        </div>
    )



}
    
    
        
    

export default EventCards