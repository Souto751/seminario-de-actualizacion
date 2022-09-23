class addUserModel{
    constructor(){}
    removeUser(idUser, idGroup){
        return fetch('../../services/removeUserFromGroup.php?id_group='+idGroup + "&id_user="+idUser, {
            method: 'GET', 
        }).then(res => res.json());
    }

    getUsers(id){
        return fetch('../../services/getMembersFromGroup.php?id_group='+id, {method: 'GET'}).then(res => res.json());
    }

    getGroups(){
        return fetch('../../services/getGroups.php', {method: 'GET'}).then(res => res.json());
    }
};

export default addUserModel;