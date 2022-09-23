import getGroupsController from './controllergetGroups.js';

class getGroupsView extends HTMLElement{
    constructor(model){
        super();

        this.innerModel = model;
        this.innerController = new getGroupsController(this, this.innerModel);

        this.getGroupsDiv = document.createElement("div");
        this.getGroupsDiv.id = "add-user-div"

        this.getGroupsTitle = document.createElement("h2");
        this.getGroupsTitle.id = "add-user-title";
        this.getGroupsTitle.innerText = "Get Groups";

        this.addBtn = document.createElement("button");
        this.addBtn.id = "add-btn";
        this.addBtn.innerText = "Search";

        this.groupList = document.createElement("ul");
        this.groupList.style.display = "flex";
        this.groupList.style.width = "50%";
        this.groupList.style.flexDirection = "column";
        this.groupList.style.alignItems = "center";
        this.groupList.style.marginLeft = "auto";
        this.groupList.style.marginRight = "auto";

        this.getGroupsDiv.appendChild(this.getGroupsTitle)
        this.getGroupsDiv.appendChild(this.addBtn);
        this.getGroupsDiv.appendChild(this.groupList);
    }

    connectedCallback(){
        this.addBtn.addEventListener('click', () => {
            this.innerController.onClickBtn();
        });

        this.appendChild(this.getGroupsDiv);
    }

    createGroupItem(txt){
        let opt = document.createElement("li");
        opt.innerText = txt;
        this.groupList.appendChild(opt);
    }

    unlockItems(){
        this.classList.remove("loading");

        this.addBtn.removeAttribute("disabled");
        this.addBtn.id = "add-btn";
    }

    lockItems(){
        this.addBtn.setAttribute("disabled", true);
        this.addBtn.id = "add-btn-disabled";
    }
};

customElements.define('x-getgroups', getGroupsView);

export default getGroupsView;