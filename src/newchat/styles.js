const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`,
    position: 'absolute',
    width: '350px',
    fontFamily: 'Monda, sans-serif',
    top: '50px',
    left: 'calc(50% + 150px - 175px)'
  },
  input: {
    fontFamily: 'Monda, sans-serif',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
    fontFamily: 'Monda, sans-serif',
  },
  submit: {
    marginTop: theme.spacing(3),
    background: '#D8765C ',
    fontFamily: 'Monda, sans-serif',
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    fontFamily: 'Monda, sans-serif',
  }
});

export default styles;
