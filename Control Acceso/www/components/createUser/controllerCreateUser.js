class createUserController{
    constructor(view, model){
        this.innerView = view;
        this.innerModel = model;
    }

    async clickAddBtn(){
        let user = this.innerView.selectUser.value;
        let pwd = this.innerView.selectGroup.value;
        this.innerView.lockItems();
        let res = await this.innerModel.createUser(user, pwd).then(res => res);
        this.innerView.selectUser.value = "";
        this.innerView.selectGroup.value = "";
        this.innerView.unlockItems();
        return res;
    }
};

export default createUserController;