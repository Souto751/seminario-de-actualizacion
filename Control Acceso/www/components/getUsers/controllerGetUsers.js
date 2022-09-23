class getUsersController{
    constructor(view, model){
        this.innerView = view;
        this.innerModel = model;
    }

    async onClickBtn(){
        let users;
        this.innerView.lockItems();
        while(this.innerView.userList.firstChild){
            this.innerView.userList.removeChild(this.innerView.userList.firstChild);
        }
        this.innerView.classList.add("loading");
        await this.innerModel.getUsers().then(res => {users = res.data});
        if(users){
            users.map(grp => {
                this.innerView.createGroupItem(grp.name);
            });
            this.innerView.unlockItems();
            this.innerView.classList.remove("loading");
        }
    }
};

export default getUsersController;