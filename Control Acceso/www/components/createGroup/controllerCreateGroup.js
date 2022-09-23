class createGroupController{
    constructor(view, model){
        this.innerView = view;
        this.innerModel = model;
    }

    async clickAddBtn(){
        let name = this.innerView.selectUser.value;
        let desc = this.innerView.selectGroup.value;
        this.innerView.lockItems();
        let res = await this.innerModel.createGroup(name, desc).then(res => res);
        this.innerView.selectUser.value = "";
        this.innerView.selectGroup.value = "";
        this.innerView.unlockItems();
        return res;
    }
};

export default createGroupController;