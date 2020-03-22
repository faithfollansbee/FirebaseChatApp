const styles = theme => ({
  root: {
    // backgroundColor: theme.palette.background.paper,
    // backgroundColor: 'DDC5A2',
    backgroundColor: '#F7F6F0',
    height: 'calc(100% - 35px)',
    position: 'absolute',
    left: '0',
    width: '300px',
    boxShadow: '0px 0px 2px black',
    // backgroundColor: '#283655'
  },
  listItem: {
    cursor: 'pointer',
    width: '100%',
    overflow: 'hidden',
    borderRadius: '0px',
    position: 'relative'
  },
  mailbox: {
    borderRadius: '0px',
    backgroundColor: '#D8765C',
    position: 'relative',
    left: '0px',
    top: '0',
    width: '300px'
  },
  newChatBtn: {
    borderRadius: '0px',
    backgroundColor: '#D8765C',
    position: 'absolute',
    bottom: '0',
    left: '0px',
    width: '300px',
  },
  unreadMessage: {
    color: 'red',
    position: 'relative',
    width: '30px',
    height: '30px'
  }
});

export default styles;
