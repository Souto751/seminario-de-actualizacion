class addUserModel{

};

class addUserView extends HTMLElement{
    constructor(model){
        super();

        this.innerModel = model;
        this.innerController = new addUserController();

        this.selectUserDiv = document.createElement("div");
        this.selectUserDiv.id = "select-user-div";
        
        this.selectUser = document.createElement("select");
        this.selectUser.id = "select-user";
        
        this.selectGroupDiv = document.createElement("div");
        this.selectGroupDiv.id = "select-group-div";
        
        this.selectGroup = document.createElement("input");
        this.selectGroup.id = "select-group";
        
        
    }
};

class addUserController{
    
};