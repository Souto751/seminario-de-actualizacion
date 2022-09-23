class getUsersModel{
    constructor(){}
    getUsers(){
        return fetch('../../services/getUsers.php', {
            method: 'GET'
        }).then(res => res.json());
    }
};

export default getUsersModel;