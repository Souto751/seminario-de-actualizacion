class getGroupsController{
    constructor(view, model){
        this.innerView = view;
        this.innerModel = model;
    }

    async onClickBtn(){
        let groups;
        this.innerView.lockItems();
        while(this.innerView.groupList.firstChild){
            this.innerView.groupList.removeChild(this.innerView.groupList.firstChild);
        }
        this.innerView.classList.add("loading");
        await this.innerModel.getGroups().then(res => {groups = res.data});
        if(groups){
            groups.map(grp => {
                this.innerView.createGroupItem(grp.name);
            });
            this.innerView.unlockItems();
            this.innerView.classList.remove("loading");
        }
    }
};

export default getGroupsController;