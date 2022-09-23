class editGroupController{
    constructor(view, model){
        this.innerView = view;
        this.innerModel = model;

        let groups = [];
    }

    async onload(){
        await this.innerModel.getGroups().then(res => this.groups = res.data);
        if(this.groups){
            this.groups.map(el => {
                this.innerView.createUserOption(el.id, el.name);
            });
        }
        this.innerView.unlockItems();
    }

    clickAddBtn(){
        let id = this.innerView.selectUser.value;
        this.innerView.selectUser.setAttribute("disabled", "true");
        let group = this.groups.find(gr => gr.id == id);
        if(group){
            this.innerView.editName.value = group.name;
            this.innerView.editName.removeAttribute("disabled");
            
            this.innerView.editDesc.value = group.description;
            this.innerView.editDesc.removeAttribute("disabled");

            this.innerView.editBtn.id = "edit-btn";
            this.innerView.cancelBtn.id = "cancel-btn";
            this.innerView.editBtn.removeAttribute("disabled");
            this.innerView.cancelBtn.removeAttribute("disabled");

            this.innerView.addBtn.setAttribute("disabled", "true");
            this.innerView.addBtn.id = "add-btn-disabled";
        }
    }

    clickCancelBtn(){
        this.innerView.selectUser.removeAttribute("disabled");
        this.innerView.editName.value = "";
        this.innerView.editName.setAttribute("disabled", "true");
        
        this.innerView.editDesc.value = "";
        this.innerView.editDesc.setAttribute("disabled", "true");

        this.innerView.editBtn.id = "edit-btn-disabled";
        this.innerView.cancelBtn.id = "cancel-btn-disabled";
        this.innerView.editBtn.setAttribute("disabled", "true");
        this.innerView.cancelBtn.setAttribute("disabled", "true");

        this.innerView.addBtn.removeAttribute("disabled");
        this.innerView.addBtn.id = "add-btn";
    }

    clickEditBtn(){
        let id = this.innerView.selectUser.value;
        let group = this.groups.find(gr => gr.id == id);
        group.name = this.innerView.editName.value;
        group.description = this.innerView.editDesc.value;
        this.innerView.editBtn.id = "edit-btn-disabled";
        this.innerView.cancelBtn.id = "cancel-btn-disabled";
        this.innerView.editBtn.setAttribute("disabled", "true");
        this.innerView.cancelBtn.setAttribute("disabled", "true");
        this.innerView.editName.setAttribute("disabled", "true");
        this.innerView.editDesc.setAttribute("disabled", "true");
        this.innerModel.editGroup(group).then(res => {alert(res.status); location.reload();});
    }
};

export default editGroupController;