import getMembersFromGroupController from './controllerGetMembersFromGroup.js';

class getMembersFromGroupView extends HTMLElement{
    constructor(model){
        super();

        this.innerModel = model;
        this.innerController = new getMembersFromGroupController(this, this.innerModel);
        this.classList.add("loading");

        this.createGroupDiv = document.createElement("div");
        this.createGroupDiv.id = "add-user-div"

        this.createGroupTitle = document.createElement("h2");
        this.createGroupTitle.id = "add-user-title";
        this.createGroupTitle.innerText = "Get Members from Group";
        
        this.selectGroupDiv = document.createElement("div");
        this.selectGroupDiv.id = "select-group-div";

        this.selectGroupSpan = document.createElement("span");
        this.selectGroupSpan.id = "select-group-span";
        this.selectGroupSpan.innerText = "Select group:"
        
        this.selectGroup = document.createElement("select");
        this.selectGroup.id = "select-group";
        this.selectGroup.setAttribute("disabled", true);

        this.addBtn = document.createElement("button");
        this.addBtn.id = "add-btn-disabled";
        this.addBtn.innerText = "Search Members";
        this.addBtn.setAttribute("disabled", true);

        this.userList = document.createElement("ul");
        this.userList.style.display = "flex";
        this.userList.style.width = "50%";
        this.userList.style.flexDirection = "column";
        this.userList.style.alignItems = "center";
        this.userList.style.marginLeft = "auto";
        this.userList.style.marginRight = "auto";

        this.innerController.onload();
        this.selectGroupDiv.appendChild(this.selectGroupSpan);
        this.selectGroupDiv.appendChild(this.selectGroup);

        this.createGroupDiv.appendChild(this.createGroupTitle)
        this.createGroupDiv.appendChild(this.selectGroupDiv);
        this.createGroupDiv.appendChild(this.addBtn);
        this.createGroupDiv.appendChild(this.userList);
    }

    connectedCallback(){
        this.addBtn.addEventListener('click', () => {
            this.innerController.clickAddBtn();
        });

        this.appendChild(this.createGroupDiv);
    }

    createGroupOption(value, txt){
        let opt = document.createElement("option");
        opt.value = value;
        opt.innerText = txt;
        this.selectGroup.appendChild(opt);
    }

    createUserItem(txt){
        let opt = document.createElement("li");
        opt.innerText = txt;
        this.userList.appendChild(opt);
    }

    unlockItems(){
        this.classList.remove("loading");

        if(this.selectGroup.children.length > 0){
            this.selectGroup.removeAttribute("disabled");
        }

        if(this.selectGroup.children.length > 0){
            this.addBtn.removeAttribute("disabled");
            this.addBtn.id = "add-btn";
        }
    }

    lockItems(){
        this.classList.add("loading");
        this.selectGroup.setAttribute("disabled", true);
        this.addBtn.setAttribute("disabled", true);
        this.addBtn.id = "add-btn-disabled";
    }
};

customElements.define('x-getmembersfromgroup', getMembersFromGroupView);

export default getMembersFromGroupView;