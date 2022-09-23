import deleteUserController from './controllerDeleteUser.js';

class createUserView extends HTMLElement{
    constructor(model){
        super();

        this.innerModel = model;
        this.innerController = new deleteUserController(this, this.innerModel);
        this.classList.add("loading");

        this.createUserDiv = document.createElement("div");
        this.createUserDiv.id = "add-user-div"

        this.createUserTitle = document.createElement("h2");
        this.createUserTitle.id = "add-user-title";
        this.createUserTitle.innerText = "Delete User";
        
        this.selectUserDiv = document.createElement("div");
        this.selectUserDiv.id = "select-group-div";

        this.selectUserSpan = document.createElement("span");
        this.selectUserSpan.id = "select-group-span";
        this.selectUserSpan.innerText = "Select group:"
        
        this.selectUser = document.createElement("select");
        this.selectUser.id = "select-group";
        this.selectUser.setAttribute("disabled", true);

        this.addBtn = document.createElement("button");
        this.addBtn.id = "add-btn-disabled";
        this.addBtn.innerText = "Delete User";
        this.addBtn.setAttribute("disabled", true);

        this.innerController.onload();
        this.selectUserDiv.appendChild(this.selectUserSpan);
        this.selectUserDiv.appendChild(this.selectUser);

        this.createUserDiv.appendChild(this.createUserTitle)
        this.createUserDiv.appendChild(this.selectUserDiv);
        this.createUserDiv.appendChild(this.addBtn);
    }

    connectedCallback(){
        this.addBtn.addEventListener('click', () => {
            this.innerController.clickAddBtn();
        });

        this.appendChild(this.createUserDiv);
    }

    createUserOption(value, txt){
        let opt = document.createElement("option");
        opt.value = value;
        opt.innerText = txt;
        this.selectUser.appendChild(opt);
    }

    unlockItems(){
        this.classList.remove("loading");

        if(this.selectUser.children.length > 0){
            this.selectUser.removeAttribute("disabled");
        }

        if(this.selectUser.children.length > 0){
            this.addBtn.removeAttribute("disabled");
            this.addBtn.id = "add-btn";
        }
    }

    lockItems(){
        this.classList.add("loading");
        this.selectUser.setAttribute("disabled", true);
        this.addBtn.setAttribute("disabled", true);
        this.addBtn.id = "add-btn-disabled";
    }
};

customElements.define('x-deleteuser', createUserView);

export default createUserView;