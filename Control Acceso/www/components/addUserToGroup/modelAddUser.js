class addUserModel{
    constructor(){}
    addUser(idUser, idGroup){
        return fetch('../../services/addUserToGroup.php?id_group='+idGroup+'&id_user='+idUser, {
            method: 'POST'
        }).then(res => res.json());
    }

    getUsers(){
        return fetch('../../services/getUsers.php', {method: 'GET'}).then(res => res.json());
    }

    getGroups(){
        return fetch('../../services/getGroups.php', {method: 'GET'}).then(res => res.json());
    }
};

export default addUserModel;