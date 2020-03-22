const styles = theme => ({

  content: {
    height: 'calc(100vh - 100px)',
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    padding: '25px',
    marginLeft: '300px',
    boxSizing: 'border-box',
    overflowX: 'scroll',
    top: '50px',
    width: 'calc(100% - 300px)',
    // backgroundColor: '#C2D5DA',
    position: 'absolute',
    // flex: '0 1 auto'
  },

  userSent: {
    float: 'right',
    clear: 'both',
    padding: '20px',
    boxSizing: 'border-box',
    wordWrap: 'break-word',
    marginTop: '10px',
    backgroundColor: '#4D648D',
    color: 'white',
    width: '300px',
    borderRadius: '10px'
  },

  friendSent: {
    float: 'left',
    clear: 'both',
    padding: '20px',
    boxSizing: 'border-box',
    wordWrap: 'break-word',
    marginTop: '10px',
    backgroundColor: '#4D648D',
    color: 'white',
    width: '300px',
    borderRadius: '10px'
  },

  chatHeader: {
    width: 'calc(100% - 301px)',
    height: '50px',
    backgroundColor: '#E3EEF0',
    position: 'fixed',
    marginLeft: '301px',
    fontSize: '18px',
    textAlign: 'center',
    paddingTop: '10px',
    boxSizing: 'border-box',
  }

});

export default styles;
