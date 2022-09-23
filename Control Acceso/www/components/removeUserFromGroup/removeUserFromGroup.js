import addUserModel from './modelRemoveUserFromGroup.js';
import addUserView from './viewRemoveUserFromGroup.js';

let addUser_m = new addUserModel();
let addUser_v = new addUserView(addUser_m);

document.getElementById("app").appendChild(addUser_v);