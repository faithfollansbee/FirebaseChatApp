import React from 'react';
import { FormControl, InputLabel, Input, Button, Paper, withStyles, CssBaseline, Typography } from '@material-ui/core';
import styles from './styles';
const firebase = require("firebase");

class NewChatComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      username: null,
      message: null
    };
  }
  render() {
    const { classes  } = this.props
    return(
      <main className={classes.main}>
      <CssBaseline></CssBaseline>
      <Paper className={classes.paper}>
        <Typography component='h1' variant='h5'>Send a message!</Typography>
          <form className={classes.form} onSubmit={(e) => this.submitNewChat(e)}>
            <FormControl fullWidth>
              <InputLabel htmlFor='new-chat-username'>
                Enter your friends email
              </InputLabel>
              <Input required className={classes.input} autoFocus onChange={(e) => this.userTyping('username', e)} id='new-chat-username'></Input>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel htmlFor='new-chat-message'>Enter your message</InputLabel>
              <Input required className={classes.input} onChange={(e) => this.userTyping('message', e)} id='new-chat-message'></Input>
            </FormControl>
            <Button type='submit' fullWidth variant='contained' color='primary' className={classes.submit} onClick={this.submitNewChat}>send</Button>
          </form>
      </Paper>


      </main>
    )
  }
  componentWillMount() {
   if(!firebase.auth().currentUser)
     this.props.history.push('/login');
  }

  userTyping = (inputType, e) => {
    switch (inputType) {
      case 'username':
        this.setState({ username: e.target.value });
        break;

      case 'message':
        this.setState({ message: e.target.value });
        break;

      default:
        break;
    }
  }

  submitNewChat = async (e) => {
    e.preventDefault();
    const userExists = await this.userExists();
    if(userExists) {
      const chatExists = await this.chatExists();
      chatExists ? this.goToChat() : this.createChat();
    }
  }
  createChat = () => {
    this.props.newChatSubmitFn({
      sendTo: this.state.username,
      message: this.state.message
    });
  }

  goToChat = () => {
    this.props.goToChatFn(this.buildDocKey(), this.state.message);
  }
  buildDocKey = () => {
    return [firebase.auth().currentUser.email, this.state.username].sort().join(':');
  }

  chatExists = async () => {
    const docKey = this.buildDocKey();
    const chat = await
      firebase
      .firestore()
      .collection('chats')
      .doc(docKey)
      .get();
    console.log(chat.exists);
    return chat.exists;
  }
  userExists = async () => {
    const usersSnapshot = await
    firebase
      .firestore()
      .collection('users')
      .get();
    const exists = usersSnapshot
      .docs
        .map(_doc => _doc.data().email)
        .includes(this.state.username);
    this.setState({ serverError: !exists });
    return exists;
  }
}
export default withStyles(styles)(NewChatComponent)
