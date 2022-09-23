import deleteGroupController from './controllerDeleteGroup.js';

class createGroupView extends HTMLElement{
    constructor(model){
        super();

        this.innerModel = model;
        this.innerController = new deleteGroupController(this, this.innerModel);
        this.classList.add("loading");

        this.createGroupDiv = document.createElement("div");
        this.createGroupDiv.id = "add-user-div"

        this.createGroupTitle = document.createElement("h2");
        this.createGroupTitle.id = "add-user-title";
        this.createGroupTitle.innerText = "Delete Group";
        
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
        this.addBtn.innerText = "Delete Group";
        this.addBtn.setAttribute("disabled", true);

        this.innerController.onload();
        this.selectGroupDiv.appendChild(this.selectGroupSpan);
        this.selectGroupDiv.appendChild(this.selectGroup);

        this.createGroupDiv.appendChild(this.createGroupTitle)
        this.createGroupDiv.appendChild(this.selectGroupDiv);
        this.createGroupDiv.appendChild(this.addBtn);
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

customElements.define('x-deletegroup', createGroupView);

export default createGroupView;