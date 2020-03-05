import React from 'react';
import ChatListComponent from '../chatlist/chatList'
import { Button, withStyles } from '@material-ui/core';
import styles from './styles';
import ChatViewComponent from '../chatview/chatview';
// import withUnmounted from '@ishawnwang/withunmounted';
const firebase = require("firebase");

class DashboardComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedChat: null,
      newChatFormVisible: false,
      email: null,
      chats: []
    }
  }
  // hasUnmounted = false;

  render() {
    const { classes } = this.props;
    return (
      <div>
        <ChatListComponent
          history={this.props.history}
          newChatBtnFn={this.newChatBtnClicked}
          selectChatFn={this.selectChat}
          chats={this.state.chats}
          userEmail={this.state.email}
          selectedChatIndex={this.state.selectedChat}></ChatListComponent>
        {
          this.state.newChatFormVisible ?
          null :
          <ChatViewComponent
            user={this.state.email}
            chat={this.state.chats[this.state.selectedChat]}></ChatViewComponent>
        }
        <Button className={classes.signOutBtn} onClick={this.signOut}>Sign out</Button>
      </div>
    )
  }

  signOut = () => firebase.auth().signOut();

  selectChat = async (chatIndex) => {
    await this.setState({ selectedChat: chatIndex, newChatFormVisible: false });
  }

  newChatBtnClicked = () => this.setState({ newChatFormVisible: true, selectedChat: null });

  componentDidMount = () => {
    // if (this.hasUnmounted) {
    //     // check hasUnmounted flag
    //     return;
    //   }

    firebase.auth().onAuthStateChanged(async _usr => {
      if (!_usr)
        this.props.history.push('/login');
      else {
        await firebase
          .firestore()
          .collection('chats')
          .where('users', 'array-contains', _usr.email)
          .onSnapshot(async res => {
            const chats = res.docs.map(_doc => _doc.data());
            await this.setState({
              email: _usr.email,
              chats: chats,
              friends: []
            });
          })
      }
    })
  }
};
export default withStyles(styles)(DashboardComponent);
