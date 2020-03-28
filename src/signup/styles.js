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
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    fontFamily: 'Monda, sans-serif',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(4)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
  },
  rootStyle: {
    backgroundColor: '#4D648D',
    height : '100vh',
    width: '100%',
    position: 'absolute',
    fontFamily: 'Monda, sans-serif',
  },
  form: {
    width: '80%',
    marginTop: theme.spacing(1),
    fontFamily: 'Monda, sans-serif',
  },
  submit: {
    marginTop: theme.spacing(3),
    backgroundColor: '#4D648D',
    fontFamily: 'Monda, sans-serif',
  },
  hasAccountHeader: {
    width: '100%',
    paddingTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Monda, sans-serif',
  },
  logInLink: {
    width: '100%',
    textDecoration: 'none',
    color: '#303f9f',
    fontWeight: 'bolder',
    padding: '5px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontFamily: 'Monda, sans-serif',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    fontFamily: 'Monda, sans-serif',
  }
});

export default styles;
