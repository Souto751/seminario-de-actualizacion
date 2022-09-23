import createGroupController from './controllerCreateGroup.js';

class createGroupView extends HTMLElement{
    constructor(model){
        super();

        this.innerModel = model;
        this.innerController = new createGroupController(this, this.innerModel);

        this.createGroupDiv = document.createElement("div");
        this.createGroupDiv.id = "create-group-div"

        this.createGroupTitle = document.createElement("h2");
        this.createGroupTitle.id = "create-group-title";
        this.createGroupTitle.innerText = "Create Group";

        this.selectUserDiv = document.createElement("div");
        this.selectUserDiv.id = "group-name-div";

        this.selectUserSpan = document.createElement("span");
        this.selectUserSpan.id = "group-name-span";
        this.selectUserSpan.innerText = "Group name:"
        
        this.selectUser = document.createElement("input");
        this.selectUser.id = "group-name";
        this.selectUser.setAttribute("maxlength", "45");
        
        this.selectGroupDiv = document.createElement("div");
        this.selectGroupDiv.id = "select-group-div";

        this.selectGroupSpan = document.createElement("span");
        this.selectGroupSpan.id = "select-group-span";
        this.selectGroupSpan.innerText = "Description:"
        
        this.selectGroup = document.createElement("textarea");
        this.selectGroup.id = "select-group";
        this.selectGroup.style.resize = "none";
        this.selectGroup.setAttribute("maxlength", "45");

        this.addBtn = document.createElement("button");
        this.addBtn.id = "add-btn";
        this.addBtn.innerText = "Create Group";

        this.selectUserDiv.appendChild(this.selectUserSpan);
        this.selectUserDiv.appendChild(this.selectUser);
        this.selectGroupDiv.appendChild(this.selectGroupSpan);
        this.selectGroupDiv.appendChild(this.selectGroup);

        this.createGroupDiv.appendChild(this.createGroupTitle)
        this.createGroupDiv.appendChild(this.selectUserDiv);
        this.createGroupDiv.appendChild(this.selectGroupDiv);
        this.createGroupDiv.appendChild(this.addBtn);
    }

    connectedCallback(){
        this.addBtn.addEventListener('click', () => {
            this.innerController.clickAddBtn().then(res => {
                if(res.status == "error"){
                    alert(res.message);
                }else{
                    alert("Created!");
                }
            });
        });

        this.appendChild(this.createGroupDiv);
    }

    unlockItems(){
        this.classList.remove("loading");
        this.selectUser.removeAttribute("disabled");
        this.selectGroup.removeAttribute("disabled");
        this.addBtn.removeAttribute("disabled");
        this.addBtn.id = "add-btn";
    }

    lockItems(){
        this.classList.add("loading");
        this.selectUser.setAttribute("disabled", true);
        this.selectGroup.setAttribute("disabled", true);
        this.addBtn.setAttribute("disabled", true);
        this.addBtn.id = "add-btn-disabled";
    }
};

customElements.define('x-creategroup', createGroupView);

export default createGroupView;