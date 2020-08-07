import React from 'react'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({

  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    // paddingTop: '56.25%', // 16:9
    paddingBottom: '56.25%'
  },
  cardContent: {
    paddingBottom: '0.1%'
  }
}));

const EventCard = ({card , image}) => {

  const classes = useStyles();

  const img = String(image)

  console.log(image)
  
    return(
      
      <div>
         <CssBaseline />
         <CardActionArea component="a" href="#">
        <Card className={classes.card}>
        
              <CardMedia className={classes.cardMedia}
                        
                        alt = {img}
                        image = {require("./../assets/images/" + img +".jpg")}
                        
                    />
                  <CardContent className={classes.cardContent} >
                    <Typography >
                     {card}
                    </Typography>
                    
                  </CardContent>
                  <CardActions >
                    
                    </CardActions>
                
                    
                     </Card>
                     </CardActionArea>     
                    
        
        </div>
    )
}

export default EventCard






