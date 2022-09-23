import editGroupModel from './modelEditUser.js';
import editGroupView from './viewEditUser.js';

let editGroup_m = new editGroupModel();
let editGroup_v = new editGroupView(editGroup_m);

document.getElementById("app").appendChild(editGroup_v);