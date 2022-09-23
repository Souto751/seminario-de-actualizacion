class deleteGroupModel{
    constructor(){}
    deleteGroup(id){
        return fetch('../../services/deleteGroup.php?id_group='+id, {
            method: 'POST'
        }).then(res => res.json());
    }
    getGroups(){
        return fetch('../../services/getGroups.php', {
            method: 'GET'
        }).then(res => res.json());
    }
};

export default deleteGroupModel;