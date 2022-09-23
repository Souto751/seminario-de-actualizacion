class createUserModel{
    constructor(){}
    createUser(user, password){
        return fetch('../../services/createUser.php?user='+user+'&password='+password, {
            method: 'POST'
        }).then(res => res.json());
    }
};

export default createUserModel;