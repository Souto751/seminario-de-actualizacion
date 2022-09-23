import removeUserFromGroupController from './controllerRemoveUserFromGroup.js';

class removeUserFromGroupView extends HTMLElement{
    constructor(model){
        super();

        this.innerModel = model;
        this.innerController = new removeUserFromGroupController(this, this.innerModel);
        this.classList.add("loading");

        this.addUserDiv = document.createElement("div");
        this.addUserDiv.id = "add-user-div"

        this.addUserTitle = document.createElement("h2");
        this.addUserTitle.id = "add-user-title";
        this.addUserTitle.innerText = "Remove User from Group";
        
        this.selectGroupDiv = document.createElement("div");
        this.selectGroupDiv.id = "select-group-div";

        this.selectGroupSpan = document.createElement("span");
        this.selectGroupSpan.id = "select-group-span";
        this.selectGroupSpan.innerText = "Select group:"
        
        this.selectGroup = document.createElement("select");
        this.selectGroup.id = "select-group";
        this.selectGroup.setAttribute("disabled", true);

        this.selectUserDiv = document.createElement("div");
        this.selectUserDiv.id = "select-user-div";

        this.selectUserSpan = document.createElement("span");
        this.selectUserSpan.id = "select-user-span";
        this.selectUserSpan.innerText = "Select user:"
        
        this.selectUser = document.createElement("select");
        this.selectUser.id = "select-user";
        this.selectUser.setAttribute("disabled", true);

        this.addBtn = document.createElement("button");
        this.addBtn.id = "add-btn-disabled";
        this.addBtn.innerText = "Remove";
        this.addBtn.setAttribute("disabled", true);

        this.selectUserDiv.appendChild(this.selectUserSpan);
        this.selectUserDiv.appendChild(this.selectUser);
        this.selectGroupDiv.appendChild(this.selectGroupSpan);
        this.selectGroupDiv.appendChild(this.selectGroup);

        this.addUserDiv.appendChild(this.addUserTitle);
        this.addUserDiv.appendChild(this.selectGroupDiv);
        this.addUserDiv.appendChild(this.selectUserDiv);
        this.addUserDiv.appendChild(this.addBtn);
    }

    connectedCallback(){
        this.addBtn.addEventListener('click', () => {
            this.innerController.clickAddBtn();
        });

        this.selectGroup.addEventListener('change', () => {
            this.innerController.onChangeGroup();
        });

        this.appendChild(this.addUserDiv);
    }

    createUserOption(value, txt){
        let opt = document.createElement("option");
        opt.value = value;
        opt.innerText = txt;
        this.selectUser.appendChild(opt);
    }

    createGroupOption(value, txt){
        let opt = document.createElement("option");
        opt.value = value;
        opt.innerText = txt;
        this.selectGroup.appendChild(opt);
    }

    unlockItems(){
        this.classList.remove("loading");

        if(this.selectUser.children.length > 0){
            this.selectUser.removeAttribute("disabled");
        }

        if(this.selectGroup.children.length > 0){
            this.selectGroup.removeAttribute("disabled");
        }

        if(this.selectUser.children.length > 0 && this.selectGroup.children.length > 0){
            this.addBtn.removeAttribute("disabled");
            this.addBtn.id = "add-btn";
        }
    }

    lockItems(){
        this.classList.add("loading");
        this.selectUser.setAttribute("disabled", true);
        this.selectGroup.setAttribute("disabled", true);
        this.addBtn.setAttribute("disabled", true);
        this.addBtn.id = "add-btn-disabled";
    }
};

customElements.define('x-removeuserfromgroup', removeUserFromGroupView);

export default removeUserFromGroupView;