class deleteGroupController{
    constructor(view, model){
        this.innerView = view;
        this.innerModel = model;

        let groups = [];
    }

    async onload(){
        await this.innerModel.getGroups().then(res => this.groups = res.data);
        if(this.groups){
            this.groups.map(el => {
                this.innerView.createGroupOption(el.id, el.name);
            });
        }
        this.innerView.unlockItems();
    }

    clickAddBtn(){
        let id = this.innerView.selectGroup.value;
        this.innerView.lockItems();
        this.innerModel.deleteGroup(id).then(res => {alert(res.status); this.innerView.unlockItems();}).then(() => location.reload());
    }
};

export default deleteGroupController;