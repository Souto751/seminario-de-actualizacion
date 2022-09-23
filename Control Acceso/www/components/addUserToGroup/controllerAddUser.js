class addUserController{
    constructor(view, model){
        this.innerView = view;
        this.innerModel = model;

        this.loadUsers().then(() => this.loadGroups()).then(() => this.innerView.unlockItems());
    }

    clickAddBtn(){
        let user = this.innerView.selectUser.value;
        let group = this.innerView.selectGroup.value;
        this.innerView.lockItems();
        this.innerModel.addUser(user, group).then(res => {alert(res.status); this.innerView.unlockItems();});
    }

    async loadUsers(){
        let users;
        await this.innerModel.getUsers().then(res => {users = res.data});
        if(users.length > 0){
            users.map(usr => {
                this.innerView.createUserOption(usr.id, usr.name);
            });
        }
    }

    async loadGroups(){
        let groups;
        await this.innerModel.getGroups().then(res => {groups = res.data});
        if(groups.length > 0){
            groups.map(grp => {
                this.innerView.createGroupOption(grp.id, grp.name);
            });
        }
    }
};

export default addUserController;