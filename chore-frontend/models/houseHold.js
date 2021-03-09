class HouseHold {
    static all = []
    
    constructor(name, members, id) {
        this.name = name;
        this.members = members;
        this.id = id;
        this.chores = []

        HouseHold.all.push(this)

    }

    renderChores() {
        let familySortedChores = this.chores
        familySortedChores.forEach(choreObj => {
            choreObj.render()
        })
    }


    static renderDropDownOptions(){
         let selectHouseHold = document.getElementById('family-select')
        HouseHold.all.forEach(houseHold => {
            let option = document.createElement('option')
            option.setAttribute('value', houseHold.id)
            let house_name = document.createTextNode(houseHold.name)
            option.appendChild(house_name)
            selectHouseHold.appendChild(option)
        })
    }

    static renderHouseHolds() {
        const select = document.querySelector("#select")
        HouseHold.all.forEach(houseHold => {
            let option = document.createElement("option")
            option.value = houseHold.id
            option.textContent = houseHold.name
            select.appendChild(option)
        })
    }


}