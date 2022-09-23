import getUsersModel from './modelGetUsers.js';
import getUsersView from './viewGetUsers.js';

let getUsers_m = new getUsersModel();
let getUsers_v = new getUsersView(getUsers_m);

document.getElementById("app").appendChild(getUsers_v);