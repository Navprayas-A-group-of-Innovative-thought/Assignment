import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import { Twirl as Hamburger } from 'hamburger-react'
import { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  }
}));

const NavBar = () => {

    const classes = useStyles();

    const [isOpen, setOpen] = useState(false)

    const MenuItems = ['HOME', 'EVENTS', 'TEAMS', 'ABOUT', 'NOTIFICATIONS']

    const Menu_Icon = () => {    
        return( 
            <div >
           <Hamburger label="Show menu" toggled={isOpen} toggle={setOpen} 
                    onToggle={toggled => {
                       if (toggled) {
                          console.log(isOpen)
                          setOpen(false)
                       } else {
                         console.log(isOpen)
                          setOpen(true)
                       }
                    }
                 }
              />
            </div>
        )
      }

      const Menu = () => {
        const menu = MenuItems.map(item => <li key = {item} style={itemStyle}>{item}</li>)
        return( <div> <ul style={menuStyle}> {menu} </ul> </div> )
      }

      const menuStyle = {
        position: 'absolute',
        paddingLeft: '20px',
        display: 'flex',
        flexDirection: 'column',
        marginTop: '2px',
        marginLeft: '2px',
    
      }
    
      const itemStyle = {
        display: 'inline-block',
        listStyleType: 'none',
        paddingLeft: '0.5px',
        paddingRight: '0.5px',
        justifyContent: 'center',
        marginTop: '10px',
        marginLeft: '-25px',
        letterSpacing: '1px',
        maxWidth: '200px',
      }

    return(
        <div>
             
            <AppBar position="relative">
            <Toolbar>
            <Menu_Icon className={classes.icon} /> {isOpen && <Menu /> } 
            <Typography  variant="h6" color="inherit" noWrap>
                   NAVPRAYAS - A GROUP OF INNOVATIVE THOUGHTS   
            </Typography>
            </Toolbar>
             </AppBar>
        
        </div>
        
    )

}
export default NavBar;


