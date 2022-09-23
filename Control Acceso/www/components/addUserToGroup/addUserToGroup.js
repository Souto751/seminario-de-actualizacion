import addUserModel from './modelAddUser.js';
import addUserView from './viewAddUser.js';

let addUser_m = new addUserModel();
let addUser_v = new addUserView(addUser_m);

document.getElementById("app").appendChild(addUser_v);