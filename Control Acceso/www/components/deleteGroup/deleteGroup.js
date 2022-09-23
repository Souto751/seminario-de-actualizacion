import deleteGroupModel from './modelDeleteGroup.js';
import deleteGroupView from './viewDeleteGroup.js';

let deleteGroup_m = new deleteGroupModel();
let deleteGroup_v = new deleteGroupView(deleteGroup_m);

document.getElementById("app").appendChild(deleteGroup_v);