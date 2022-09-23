import getMembersFromGroupModel from './modelGetMembersFromGroup.js';
import getMembersFromGroupView from './viewGetMembersFromGroup.js';

let getMembersFromGroup_m = new getMembersFromGroupModel();
let getMembersFromGroup_v = new getMembersFromGroupView(getMembersFromGroup_m);

document.getElementById("app").appendChild(getMembersFromGroup_v);