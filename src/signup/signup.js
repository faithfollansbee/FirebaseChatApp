import React from 'react';
import { Link } from 'react-router-dom';
import { Spring } from 'react-spring/renderprops';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import styles from './styles';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
const firebase = require("firebase");

class SignupComponent extends React.Component {

  constructor() {
    super();
    this.state = {
      email: null,
      password: null,
      passwordConfirmation: null,
      signupError: ''
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
                  <h1 component="h1" variant="h5">
                    Sign Up!
                  </h1>
                  <form onSubmit={(e) => this.submitSignup(e)} className={classes.form}>
                    <FormControl required fullWidth margin='normal'>
                      <InputLabel htmlFor='signup-email-input'>Enter your email</InputLabel>
                      <Input autoComplete='email' autoFocus onChange={(e) => this.userTyping('email', e)} id='signup-email-input'></Input>
                    </FormControl>
                    <FormControl required fullWidth margin='normal'>
                      <InputLabel htmlFor='signup-password-input'>Choose a 6 digit password</InputLabel>
                      <Input type="password" onChange={(e) => this.userTyping('password', e)} id='signup-password-input'></Input>
                    </FormControl>
                    <FormControl required fullWidth margin='normal'>
                      <InputLabel htmlFor='signup-password-confirmation-input'>Confirm your password</InputLabel>
                      <Input type="password" onChange={(e) => this.userTyping('passwordConfirmation', e)} id='signup-password-confirmation-input'></Input>
                    </FormControl>
                    <Button type='submit' fullWidth variant='contained' className={classes.submit}>Submit</Button>
                  </form>
                  {
                    this.state.signupError ?
                    <Typography className={classes.errorText} component='h5' variant='h6'>
                      {this.state.signupError}
                    </Typography> :
                    null
                  }
                  <Typography component='h5' variant='h6' className={classes.hasAccountHeader}> Already have an account? </Typography>
                  <Link className={classes.logInLink} to='/login'>Log In!</Link>
                </Paper>
              </main>
            </div>
            </div>
          )}
        </Spring>
    );
  }

  userTyping = (whichInput, event) => {
    switch (whichInput) {
      case 'email':
        this.setState({ email: event.target.value });
        break;

      case 'password':
        this.setState({ password: event.target.value });
        break;

      case 'passwordConfirmation':
        this.setState({ passwordConfirmation: event.target.value });
        break;

      default:
        break;
    }
  }

  formIsValid = () => this.state.password === this.state.passwordConfirmation;

  submitSignup = (e) => {
    e.preventDefault(); // This is to prevent the automatic refreshing of the page on submit.

    if(!this.formIsValid()) {
      this.setState({ signupError: 'Passwords do not match' });
      return;
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(authRes => {
        const userObj = {
          email: authRes.user.email,
          friends: [],
          messages: []
        };
        firebase
          .firestore()
          .collection('users')
          .doc(this.state.email)
          .set(userObj)
          .then(() => {
            this.props.history.push('/dashboard');
        }, dbErr => {
          console.log('Failed to add user to the database: ', dbErr);
          this.setState({ signupError: 'Failed to add user' });
        });
    }, authErr => {
      console.log('Failed to create user: ', authErr);
      this.setState({ signupError: 'Failed to add user' });
    });
  };
}

export default withStyles(styles)(SignupComponent);
