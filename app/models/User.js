class User {

    constructor(id, username, name, bio, dateUpdated ){

        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dateCreated = new Date();
        this.dateUpdated = dateUpdated;
    }

    get getUsername(){
        return this.username;
    }

    set setUsername(username){

        this.username = username;
    }

    set seDateUpadated(date){
        this.dateUpdated = date;
    }

}

module.exports = User