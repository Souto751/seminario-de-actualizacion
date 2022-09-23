import getGroupsModel from './modelGetGroups.js';
import getGroupsView from './viewGetGroups.js';

let getGroups_m = new getGroupsModel();
let getGroups_v = new getGroupsView(getGroups_m);

document.getElementById("app").appendChild(getGroups_v);