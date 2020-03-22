const styles = theme => ({

  sendBtn: {
    cursor: 'pointer',
    color: '#4D648D',
    '&:hover': {
      color: 'gray'
    }
  },

  chatTextBoxContainer: {
    position: 'absolute',
    bottom: '15px',
    left: '315px',
    boxSizing: 'border-box',
    overflow: 'auto',
    width: 'calc(100% - 300px - 50px)'
  },

  chatTextBox: {
    width: 'calc(100% - 30px)',
    backgroundColor: 'white'
  }

});

export default styles;
