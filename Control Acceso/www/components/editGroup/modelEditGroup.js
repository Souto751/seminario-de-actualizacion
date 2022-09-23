class deleteUserModel{
    constructor(){}
    editGroup(group){
        return fetch('../../services/editGroup.php?id_group='+group.id+'&name='+group.name+'&desc='+group.description, {
            method: 'POST'
        }).then(res => res.json());
    }
    getGroups(){
        return fetch('../../services/getGroups.php', {
            method: 'GET'
        }).then(res => res.json());
    }
};

export default deleteUserModel;