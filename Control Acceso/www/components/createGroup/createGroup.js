import createGroupModel from './modelCreateGroup.js';
import createGroupView from './viewCreateGroup.js';

let createGroup_m = new createGroupModel();
let createGroup_v = new createGroupView(createGroup_m);

document.getElementById("app").appendChild(createGroup_v);