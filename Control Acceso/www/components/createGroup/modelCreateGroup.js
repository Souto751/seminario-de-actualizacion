class createGroupModel{
    constructor(){}
    createGroup(name, desc){
        return fetch('../../services/createGroup.php?name='+name+'&desc='+desc, {
            method: 'POST'
        }).then(res => res.json());
    }
};

export default createGroupModel;