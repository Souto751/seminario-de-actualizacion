class getMembersFromGroupModel{
    constructor(){}
    getMembersFromGroup(id){
        return fetch('../../services/getMembersFromGroup.php?id_group='+id, {
            method: 'POST'
        }).then(res => res.json());
    }
    getGroups(){
        return fetch('../../services/getGroups.php', {
            method: 'GET'
        }).then(res => res.json());
    }
};

export default getMembersFromGroupModel;