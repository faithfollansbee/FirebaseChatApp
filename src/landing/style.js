const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
    [theme.breakpoints.up(200 + theme.spacing * 5 * 3)]: {
      width: 150,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(10),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(5)}px ${theme.spacing(5)}px ${theme.spacing(5)}px`,
  },
  options: {
    padding: '10px',
    size: '30px',
    width: '100%',
    textDecoration: 'none',
    color: '#303f9f',
    fontWeight: 'bolder'
  }
});

export default styles;
