class getGroupsModel{
    constructor(){}
    getGroups(idUser, idGroup){
        return fetch('../../services/getGroups.php', {
            method: 'GET'
        }).then(res => res.json());
    }
};

export default getGroupsModel;