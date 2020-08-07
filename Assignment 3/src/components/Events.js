import React from 'react';
import NavBar from './NavBar'
import EventCards from './EventCards'
import MtseEvent from './MtseEvent'
import PuzzleEvent from './PuzzleEvent'
import PoemEvent from './PoemEvent'
import SketchEvent from './SketchEvent'
import RangotsavEvent from './RangotsavEvent'
import ChessEvent from './ChessEvent'
import {
  BrowserRouter as Router,
  Switch, Route, Link
} from "react-router-dom"

const Events = () => {
   
  return (
    
      <div>
       
          
        <NavBar />
        <EventCards />
        
     
      </div>
      
      
   );
}

export default Events