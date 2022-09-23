import getUsersController from './controllerGetUsers.js';

class getUsersView extends HTMLElement{
    constructor(model){
        super();

        this.innerModel = model;
        this.innerController = new getUsersController(this, this.innerModel);

        this.getGroupsDiv = document.createElement("div");
        this.getGroupsDiv.id = "add-user-div"

        this.getGroupsTitle = document.createElement("h2");
        this.getGroupsTitle.id = "add-user-title";
        this.getGroupsTitle.innerText = "Get Users";

        this.addBtn = document.createElement("button");
        this.addBtn.id = "add-btn";
        this.addBtn.innerText = "Search";

        this.userList = document.createElement("ul");
        this.userList.style.display = "flex";
        this.userList.style.width = "50%";
        this.userList.style.flexDirection = "column";
        this.userList.style.alignItems = "center";
        this.userList.style.marginLeft = "auto";
        this.userList.style.marginRight = "auto";

        this.getGroupsDiv.appendChild(this.getGroupsTitle)
        this.getGroupsDiv.appendChild(this.addBtn);
        this.getGroupsDiv.appendChild(this.userList);
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
        this.userList.appendChild(opt);
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

customElements.define('x-getusers', getUsersView);

export default getUsersView;