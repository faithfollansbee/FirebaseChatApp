const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    height: 'calc(100% - 35px)',
    position: 'absolute',
    left: '0',
    width: '300px',
    boxShadow: '0px 0px 2px black'
  },
  listItem: {
    cursor: 'pointer',
    width: '100%',
    overflow: 'hidden',
    position: 'relative'
  },

  newChatBtn: {
    borderRadius: '0px',
    backgroundColor: '#D8765C',
  },
  unreadMessage: {
    color: 'red',
    position: 'relative',
    width: '30px',
    height: '30px'
  }
});

export default styles;
