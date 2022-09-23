class deleteUserModel{
    constructor(){}
    editGroup(user){
        return fetch('../../services/editUser.php?id_user='+user.id+'&user='+user.user+'&password='+user.password, {
            method: 'POST'
        }).then(res => res.json());
    }
    getGroups(){
        return fetch('../../services/getUsers.php', {
            method: 'GET'
        }).then(res => res.json());
    }
};

export default deleteUserModel;