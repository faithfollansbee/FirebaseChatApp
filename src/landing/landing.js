import React from 'react';
// import LoginComponent from '../login/login';
// import { Route } from 'react-router-dom';
// import { Button } from '@material-ui/core';
// import SignupComponent from '../signup/signup'
import styles from './style'
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
// import Typography from '@material-ui/core/Typography';
// const firebase = require("firebase");

class LandingComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: null
    }
  }
  render() {
    const { classes } = this.props;

    return(
      <main className={classes.main}>
        <CssBaseline></CssBaseline>
        <Paper className={classes.paper}>
          {
            this.state.email === null ? <div> <Link to='/signup' className={classes.options}>Sign Up</Link>
            <Link to='/login' className={classes.options}>Log In</Link> </div> :
            null
          }
        </Paper>
      </main>
    )
  }
};
export default withStyles(styles)(LandingComponent)
