import editGroupController from './controllerEditGroup.js';

class createUserView extends HTMLElement{
    constructor(model){
        super();

        this.innerModel = model;
        this.innerController = new editGroupController(this, this.innerModel);
        this.classList.add("loading");

        this.createUserDiv = document.createElement("div");
        this.createUserDiv.id = "add-user-div"

        this.createUserTitle = document.createElement("h2");
        this.createUserTitle.id = "add-user-title";
        this.createUserTitle.innerText = "Edit Group";
        
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
        this.addBtn.innerText = "Select";
        this.addBtn.setAttribute("disabled", true);

        this.editDiv = document.createElement("div");
        this.editDiv.id = "edit-div";

        this.editDivName = document.createElement("div");
        this.editDivName.id = "group-name-div";

        this.editSpanName = document.createElement("span");
        this.editSpanName.id = "group-name-span";
        this.editSpanName.innerText = "Group name:"
        
        this.editName = document.createElement("input");
        this.editName.id = "group-name";
        this.editName.setAttribute("maxlength", "45");
        this.editName.setAttribute("disabled", true);
        
        this.editDivDesc = document.createElement("div");
        this.editDivDesc.id = "group-desc-div";

        this.editSpanDesc = document.createElement("span");
        this.editSpanDesc.id = "group-desc-span";
        this.editSpanDesc.innerText = "Description:"
        
        this.editDesc = document.createElement("textarea");
        this.editDesc.id = "group-desc";
        this.editDesc.style.resize = "none";
        this.editDesc.setAttribute("maxlength", "45");
        this.editDesc.setAttribute("disabled", true);

        this.btnDiv = document.createElement("div");
        this.btnDiv.style.width = "100%";
        this.btnDiv.style.display = "flex";
        this.btnDiv.style.justifyContent = "space-around";

        this.editBtn = document.createElement("button");
        this.editBtn.id = "edit-btn-disabled";
        this.editBtn.innerText = "Confirm";
        this.editBtn.setAttribute("disabled", true);

        this.cancelBtn = document.createElement("button");
        this.cancelBtn.id = "cancel-btn-disabled";
        this.cancelBtn.innerText = "Cancel";
        this.cancelBtn.setAttribute("disabled", true);

        this.innerController.onload();

        this.btnDiv.appendChild(this.editBtn);
        this.btnDiv.appendChild(this.cancelBtn);

        this.editDivName.appendChild(this.editSpanName);
        this.editDivName.appendChild(this.editName);

        this.editDivDesc.appendChild(this.editSpanDesc);
        this.editDivDesc.appendChild(this.editDesc);

        this.editDiv.appendChild(this.editDivName);
        this.editDiv.appendChild(this.editDivDesc);
        this.editDiv.appendChild(this.btnDiv);

        this.selectUserDiv.appendChild(this.selectUserSpan);
        this.selectUserDiv.appendChild(this.selectUser);

        this.createUserDiv.appendChild(this.createUserTitle)
        this.createUserDiv.appendChild(this.selectUserDiv);
        this.createUserDiv.appendChild(this.addBtn);
        this.createUserDiv.appendChild(this.editDiv);
    }

    connectedCallback(){
        this.addBtn.addEventListener('click', () => {
            this.innerController.clickAddBtn();
        });

        this.cancelBtn.addEventListener('click', () => {
            this.innerController.clickCancelBtn();
        });

        this.editBtn.addEventListener('click', () => {
            this.innerController.clickEditBtn();
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

customElements.define('x-editgroup', createUserView);

export default createUserView;