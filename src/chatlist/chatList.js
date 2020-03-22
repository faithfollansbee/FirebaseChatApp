import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import styles from './styles';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ListItemIcon from '@material-ui/core/ListItemIcon';
// import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
// import NotificationImportant from '@material-ui/icons/NotificationImportant';
// import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import FiberNewIcon from '@material-ui/icons/FiberNew';
// const firebase = require("firebase");

class ChatListComponent extends React.Component {
  render() {
    const { classes } = this.props;
    if (this.props.chats.length > 0) {
      return (
        <main className={classes.root}>
          <Button variant='contained' fullWidth className={classes.mailbox}>Mailbox</Button>
            <List>

              {
                this.props.chats.map((_chat, _index) => {
                  return (
                    <div key={_index}>
                      <ListItem onClick={() => this.selectChat(_index)} className={classes.listItem}
                        selected={this.props.selectedChatIndex === _index}>
                          <ListItemAvatar>
                            <Avatar alt='Remy Sharp' variant='square'>
                              {
                                _chat.users.filter(_user => _user !== this.props.userEmail)[0].split('')[0]
                              }
                            </Avatar>
                          </ListItemAvatar>
                          <ListItemText
                            primary={_chat.users.filter(_user => _user !== this.props.userEmail)[0]}
                            secondary={
                              <React.Fragment className={classes.listItemText}>
                                <Typography color='textPrimary'>
                                  {
                                    _chat.messages[_chat.messages.length - 1].message.substring(0, 20)
                                  }
                                </Typography>
                              </React.Fragment>
                            }
                            >
                          </ListItemText>
                          {
                            _chat.receiverHasRead === false && !this.userIsSender(_chat) ?
                            <ListItemIcon>
                              <FiberNewIcon className={classes.unreadMessage}></FiberNewIcon>
                            </ListItemIcon> : null
                          }
                      </ListItem>
                      <Divider>
                      </Divider>
                    </div>
                  );
                })
              }
            </List>
            <Button onClick={this.newChat} variant='contained' fullWidth className={classes.newChatBtn}> start a new conversation </Button>
        </main>
      );
    } else {
        return (
          <main className={classes.root}>
            <Button color='primary' variant='contained' fullWidth onClick={this.newChat} className={classes.newChatBtn}>
              new message
            </Button>
            <List>
            </List>
          </main>
        )
    }
  }

  // deleteChat = async (chatIndex) => {
  //   await this.setState({ selectedChat: chatIndex, newChatFormVisible: false });
  //   firebase.database().ref("chats").child(chatIndex).remove();
  // }
  //
  // deleteChat = (index) => this.props.deleteChatFn();
  //   // let id = index.getAttribute('data-id')
  //   // db.collection('chats').doc(data-id).delete()

  newChat = () => this.props.newChatBtnFn();

  selectChat = (index) => this.props.selectChatFn(index);
  userIsSender = (chat) => chat.messages[chat.messages.length - 1].sender === this.props.userEmail;
}
// <NotificationImportant className={classes.unreadMessage}></NotificationImportant>
// <ListItemIcon>
//   <DeleteForeverIcon onClick={this.deleteChat} className={classes.readMessage}></DeleteForeverIcon>
// </ListItemIcon>
export default withStyles(styles)(ChatListComponent);
