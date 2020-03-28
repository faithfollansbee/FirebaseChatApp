import React from 'react';
import { Link } from 'react-router-dom';
import styles from './styles';
import { Spring } from 'react-spring/renderprops';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import Paper from '@material-ui/core/Paper';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
const firebase = require("firebase");

class LoginComponent extends React.Component {
  constructor() {
    super();
    this.state={
      email: 'null',
      password: 'null',
      loginError: ''
    };
  }
  render() {
    const { classes } = this.props;
    return (
      <Spring
        from={{ opacity: 0, marginTop: -500 }}
        to={{ opacity: 1, marginTop: 0 }}
        config={{ duration: 300 }}
      >
        { props => (
          <div style={props}>
            <div className={classes.rootStyle}>
              <main className={classes.main}>
                <CssBaseline/>
                <Paper className={classes.paper}>
                  <h1 component='h1' variant='h5'> Login!</h1>
                  <form className={classes.form} onSubmit={(e) => this.submitLogin(e)}>
                    <FormControl required fullWidth margin='normal'>
                      <InputLabel htmlFor='login-email-input'>Enter your email</InputLabel>
                      <Input autoComplete='email' autoFocus id='login-email-input' onChange={(e) => this.userTyping('email', e)}></Input>
                    </FormControl>

                    <FormControl required fullWidth margin='normal'>
                      <InputLabel htmlFor='login-password-input'>Enter your password </InputLabel>
                      <Input type='password' id='login-password-input' onChange={(e) => this.userTyping('password', e)}></Input>
                    </FormControl>
                    <Button type='submit' fullWidth variant='contained' className={classes.submit}>Login</Button>
                  </form>
                  {
                    this.state.loginError ?
                    <Typography component='h5' variant='h6' className={classes.errorText}>
                      Incorrect login info
                    </Typography> :
                    null
                  }
                  <Typography component='h5' variant='h6' className={classes.noAccountHeader}> Don't have an account? </Typography>
                  <Link className={classes.signUpLink} to='/signup'>Sign up!</Link>
                </Paper>
              </main>
            </div>
          </div>
        )}
        </Spring>

    )
  }
  userTyping = (type, e) => {
    switch (type) {
      case 'email':
        this.setState({ email: e.target.value });
        break;
      case 'password':
        this.setState({ password: e.target.value });
        break;
      default:
        break;
    }
  }
  submitLogin = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => {
        this.props.history.push('/dashboard');
      }, err => {
        this.setState({ loginError: 'server error' });
        console.log(err);
      });
  }
};

export default withStyles(styles)(LoginComponent);
