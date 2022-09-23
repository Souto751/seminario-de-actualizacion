import deleteUserModel from './modelDeleteUser.js';
import deleteUserView from './viewDeleteUser.js';

let deleteUser_m = new deleteUserModel();
let deleteUser_v = new deleteUserView(deleteUser_m);

document.getElementById("app").appendChild(deleteUser_v);