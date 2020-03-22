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
    // height: '100px',
    width: '90%',
    overflow: 'hidden',
    // alignItems: 'space-evenly'
    // position: 'absolute'
  },
  newChatBtn: {
    borderRadius: '0px',
    backgroundColor: '#D8765C',
  },
  unreadMessage: {
    color: 'red',
    position: 'absolute',
    top: '0',
    right: '1px',
    width: '10'
  }
});

export default styles;
