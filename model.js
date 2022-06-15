class AllTeams{
    constructor(TeamID,TeamName){
        this.TeamID = TeamID;
        this.TeamName = TeamName;
    }
}

class Team_Dropdown{
    constructor(id,childid,name,code,parentid){
        this.id = id;
        this.childid = childid;
        this.name = name;
        this.code = code;
        this.parentid = parentid;
    }
}

module.exports = {
    AllTeams : AllTeams,
    Team_Dropdown :Team_Dropdown
}
