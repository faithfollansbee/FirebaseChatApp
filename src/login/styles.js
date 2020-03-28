const styles = theme => ({
  main: {
    width: 'auto',
    fontFamily: 'Monda, sans-serif',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing(17),
    marginRight: theme.spacing(17),
    [theme.breakpoints.up(400 + theme.spacing * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  rootStyle: {
    backgroundColor: '#4D648D',
    height : '100vh',
    width: '100%',
    position: 'absolute',
    fontFamily: 'Monda, sans-serif',
  },
  paper: {
    marginTop: theme.spacing(8),
    fontFamily: 'Monda, sans-serif',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(4)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  form: {
    width: '80%',
    marginTop: theme.spacing(1),
    fontFamily: 'Monda, sans-serif',
  },
  submit: {
    marginTop: theme.spacing(3),
    fontFamily: 'Monda, sans-serif',
    backgroundColor: '#4D648D'
  },
  noAccountHeader: {
    paddingTop: '30px',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Monda, sans-serif',
  },
  signUpLink: {
    width: '100%',
    padding: '5px',
    textDecoration: 'none',
    color: '#303f9f',
    fontFamily: 'Monda, sans-serif',
    fontWeight: 'bolder',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  errorText: {
    color: 'red',
    fontFamily: 'Monda, sans-serif',
    textAlign: 'center'
  }
});

export default styles;
