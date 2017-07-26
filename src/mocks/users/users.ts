import { User } from "../../models/user/user";

const userList: User[] = [
  {
    firstName: 'Paul',lastName: 'Halliday',email: 'paul@gmail.com', avatar: 'assets/img/avatar.png'
  },
  {
    firstName: 'Raul',lastName: 'Ralliday',email: 'raul@gmail.com', avatar: 'assets/img/avatar.png'
  },
  {
    firstName: 'Gaul',lastName: 'Galliday',email: 'Gaul@gmail.com', avatar: 'assets/img/avatar.png'
  },
  {
    firstName: 'Aaul',lastName: 'Aalliday',email: 'Aul@gmail.com', avatar: 'assets/img/avatar.png'
  }
];

export const USER_LIST = userList;