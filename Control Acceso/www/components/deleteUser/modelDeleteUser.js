class deleteUserModel{
    constructor(){}
    deleteUser(id){
        return fetch('../../services/deleteUser.php?id_user='+id, {
            method: 'POST'
        }).then(res => res.json());
    }
    getUsers(){
        return fetch('../../services/getUsers.php', {
            method: 'GET'
        }).then(res => res.json());
    }
};

export default deleteUserModel;