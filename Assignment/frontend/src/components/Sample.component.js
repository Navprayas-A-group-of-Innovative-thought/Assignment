import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Link from '@material-ui/core/Link';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio'
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/ToolBar'
import RadioGroup from '@material-ui/core/RadioGroup'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://navprayas.in/">
        Navprayas
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(5),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  logo: {
    maxWidth: 160,
  },
}));

export default function SignIn() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      
            <Toolbar>
                <img src={"name.png"} alt="logo" className={classes.logo} />
            </Toolbar>
    
      <div className={classes.paper}>
        {/* <Avatar className={classes.avatar} >
          P
        </Avatar> */}
        <Typography component="h1" variant="h5" color="secondary">
          CHESS COMPETITION 2020
        </Typography>
        <Typography component="h1" variant="h5" color="secondary">
          REGISTRATION FORM
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="name"
            label="Player Name"
            name="name"
            autoComplete="name"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="number"
            label="Contact Number"
            id="number"
            autoComplete="contact-number"
          />

        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="age"
            label="Age"
            id="age"
            autoComplete="age"
          />
         
        <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="age"
            label="Enter your full address"
            id="age"
            autoComplete="age"
          />
          <input
  accept="image/*"
  className={classes.input}
  style={{ display: 'none' }}
  id="raised-button-file"
  multiple
  type="file"
/>
<Typography component="h6" variant="h6" color="inherit">
          Upload proof of Enrolment
        </Typography>
<label htmlFor="raised-button-file">
  <Button variant="contained" component="span" color="primary">
    Upload
  </Button>
</label> 
           <Typography component="h6" variant="h6" color="inherit">
          Do you have your own Chess Board?
        </Typography>
          <RadioGroup >
            
            <FormControlLabel value="yes" control={<Radio />} label="Yes" />
            <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Submit
          </Button>
          
            
          
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}