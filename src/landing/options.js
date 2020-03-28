import React from 'react';

import styles from './style'
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Spring } from 'react-spring/renderprops';

class OptionsComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      email: null
    }
  }
  render() {
    const { classes } = this.props;

    return(
      <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ duration: 1000, delay: 1000 }}
      >
      { props => (
        <div style={props}>
          <div className={classes.rootStyle}>
            <main className={classes.main}>
              <CssBaseline/>
              <Paper className={classes.paper}>
                {
                  this.state.email === null ? <div> <Link to='/signup' className={classes.options}>Sign Up</Link>
                  <Link to='/login' className={classes.options}>Log In</Link> </div> :
                  null
                }
              </Paper>
            </main>
          </div>
        </div>
      )}
      </Spring>
    )
  }
}
export default withStyles(styles)(OptionsComponent)
