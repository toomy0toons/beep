import { Profile } from "../../models/profile/profile";

const userList: Profile[] = [
  {
    firstName: 'Paul',lastName: 'Halliday',email: 'paul@gmail.com', avatar: 'assets/img/avatar.png', dateofBirth: new Date()
  },
  {
    firstName: 'Raul',lastName: 'Ralliday',email: 'raul@gmail.com', avatar: 'assets/img/avatar.png',dateofBirth: new Date()
  },
  {
    firstName: 'Gaul',lastName: 'Galliday',email: 'Gaul@gmail.com', avatar: 'assets/img/avatar.png',dateofBirth: new Date()
  },
  {
    firstName: 'Aaul',lastName: 'Aalliday',email: 'Aul@gmail.com', avatar: 'assets/img/avatar.png',dateofBirth: new Date()
  }
];

export const USER_LIST = userList;