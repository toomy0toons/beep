import { Message } from './../../models/messages/messages';
import { USER_LIST } from './../users/users';

const userList = USER_LIST;
const messageList: Message[] = [];

// userList.forEach((user) => {
//   messageList.push({user: user, date: new Date(), lastMessage: "hello"})
//   messageList.push({user: user, date: new Date(), lastMessage: "hello"})
  
// });

export const MESSAGE_LIST = messageList;