import editGroupModel from './modelEditGroup.js';
import editGroupView from './viewEditGroup.js';

let editGroup_m = new editGroupModel();
let editGroup_v = new editGroupView(editGroup_m);

document.getElementById("app").appendChild(editGroup_v);