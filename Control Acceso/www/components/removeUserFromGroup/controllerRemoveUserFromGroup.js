class addUserController{
    constructor(view, model){
        this.innerView = view;
        this.innerModel = model;

        this.loadGroups();
        this.usersFromGroup = [];
    }

    clickAddBtn(){
        let user = this.innerView.selectUser.value;
        let group = this.innerView.selectGroup.value;
        this.innerView.lockItems();
        this.innerModel.removeUser(user, group).then(res => {
            alert(res.status); 
            this.innerView.unlockItems();
            this.usersFromGroup = this.usersFromGroup.filter(us => us.id != group);
            console.log(this.usersFromGroup);
            this.onChangeGroup();
        });
    }

    async loadUsers(){
        return await this.innerModel.getUsers(this.innerView.selectGroup.value).then(res => res);
    }

    async loadGroups(){
        let groups;
        await this.innerModel.getGroups().then(res => {groups = res.data});
        if(groups.length > 0){
            groups.map(grp => {
                this.innerView.createGroupOption(grp.id, grp.name);
            });
            await this.onChangeGroup();
            this.innerView.unlockItems()
        }
    }

    async onChangeGroup(){
        this.innerView.lockItems();
        while(this.innerView.selectUser.firstChild){
            this.innerView.selectUser.removeChild(this.innerView.selectUser.firstChild);
        }
        let groupExists = this.usersFromGroup.find(el => el.id == this.innerView.selectGroup.value);
        if(groupExists){
            groupExists.users.map(usr => {
                this.innerView.createUserOption(usr.id, usr.name);
            });
        }else{
            await this.loadUsers().then(res => {
                let obj = {
                    id: this.innerView.selectGroup.value,
                    users: res.data
                };
                this.usersFromGroup.push(JSON.parse(JSON.stringify(obj)));
                obj.users.map(usr => {
                    this.innerView.createUserOption(usr.id, usr.name);
                });
            });
        }
        this.innerView.unlockItems();
    }
};

export default addUserController;