import createUserModel from './modelCreateUser.js';
import createUserView from './viewCreateUser.js';

let createUser_m = new createUserModel();
let createUser_v = new createUserView(createUser_m);

document.getElementById("app").appendChild(createUser_v);