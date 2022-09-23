class getMembersFromGroupController{
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

    async clickAddBtn(){
        let users;
        let id = this.innerView.selectGroup.value;
        this.innerView.lockItems();
        while(this.innerView.userList.firstChild){
            this.innerView.userList.removeChild(this.innerView.userList.firstChild);
        }
        this.innerView.classList.add("loading");
        await this.innerModel.getMembersFromGroup(id).then(res => {users = res.data});
        if(users){
            users.map(grp => {
                this.innerView.createUserItem(grp.name);
            });
            this.innerView.unlockItems();
            this.innerView.classList.remove("loading");
        }
    }
};

export default getMembersFromGroupController;