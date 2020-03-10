const styles = theme => ({
  root: {
    backgroundColor: '#EEEBDA',
    height: 'calc(100% - 35px)',
    position: 'absolute',
    left: '0',
    width: '300px',
    boxShadow: '0px 0px 2px black'
  },
  listItem: {
    cursor: 'pointer',
    backgroundColor: theme.palette.background.paper,
  },
  newChatBtn: {
    borderRadius: '0px',
    background: '#D8765C '
  },
  unreadMessage: {
    color: 'red',
    position: 'absolute',
    top: '0',
    right: '5px'
  }
});

export default styles;
