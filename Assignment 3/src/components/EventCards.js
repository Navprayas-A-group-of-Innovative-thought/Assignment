import React from 'react';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import EventCard from './EventCard'
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"
import MtseEvent from './MtseEvent'
import PuzzleEvent from './PuzzleEvent'
import PoemEvent from './PoemEvent'
import SketchEvent from './SketchEvent'
import RangotsavEvent from './RangotsavEvent'
import ChessEvent from './ChessEvent'


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

    return (
      
        <div>
             <CssBaseline />
             <Router>
              <Container className={classes.cardGrid} maxWidth="md">
          
              <Grid container spacing={4}>
                {cards.map((card) => 
                (
                <Grid item key={card} xs={12} sm={6} lg={4} xl={3}> 
                    <Link to={`/${image_name[card]}`}><EventCard card={ card_title[card] } image ={image_name[card] } />
                    </Link></Grid> 
                    )
                )}
              </Grid>
              </Container> 
            
                {/* <Route path="/">
                  
                  </Route> */}
                
                <Route path='/puzzle'>
                  <PuzzleEvent />
                </Route>
                <Route path='/mtse'>
                  <MtseEvent />
                </Route>
                <Route path='/chess'>
                  <ChessEvent />
                </Route>
                <Route path='/rangotsav'>
                  <RangotsavEvent />
                </Route>
                <Route path='/sketch'>
                  <SketchEvent />
                </Route>
                <Route path='/poem'>
                  <PoemEvent />
                </Route>
              
              
            </Router>
           
        </div>
        
        
    )



}
    
    
        
    

export default EventCards