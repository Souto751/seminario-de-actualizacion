class deleteUserController{
    constructor(view, model){
        this.innerView = view;
        this.innerModel = model;

        let users = [];
    }

    async onload(){
        await this.innerModel.getUsers().then(res => this.users = res.data);
        if(this.users){
            this.users.map(el => {
                this.innerView.createUserOption(el.id, el.name);
            });
        }
        this.innerView.unlockItems();
    }

    clickAddBtn(){
        let id = this.innerView.selectUser.value;
        this.innerView.lockItems();
        this.innerModel.deleteUser(id).then(res => {alert(res.status); this.innerView.unlockItems();}).then(() => location.reload());
    }
};

export default deleteUserController;