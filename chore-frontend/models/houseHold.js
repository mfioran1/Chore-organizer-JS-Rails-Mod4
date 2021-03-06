class HouseHold {
    constructor(name, members, id) {
        this.name = name;
        this.members = members;
        this.id = id;
        this.chores = []

        HouseHold.call.push(this)

    }

    
}