let HOUSE_HOLD_URL = 'http://localhost:3000/house_holds'
const selectHouseHoldBtn = document.getElementById('all-house-options')
const selectForm = document.querySelector('.family-selector')
const choreForm = document.querySelector('.add-chore-form')
const choreCollection = document.querySelector('#chore-collection')
const addBtn = document.getElementById('new-chore-btn')
const housePopUp = document.getElementById('house-pop-up')
const addHouseHoldBtn = document.getElementById('add-new-family')





// load house-hold drop downs and set text of buttons
document.addEventListener('DOMContentLoaded', () => {
    function fetchHouseHolds() {
        return fetch(`${HOUSE_HOLD_URL}`)
        .then(resp => resp.json())
        .then(houseHolds => {
            houseHolds.forEach(houseHold => {
                let hh = new HouseHold(houseHold.name, houseHold.members, houseHold.id)
                houseHold.chores.forEach(chore => {
                    hh.addChore(chore)
                })
            })
        HouseHold.renderDropDownOptions()
        HouseHold.renderHouseHolds()
        })
        
    }

    fetchHouseHolds()
    selectHouseHoldBtn.textContent = 'Select Your House Hold'
    addBtn.textContent = 'Add a New Chore'
    addHouseHoldBtn.textContent = 'Add a New House Hold'
    
    

    
})
// button and values for 'Select your Family'
let selectHouse = true
selectHouseHoldBtn.addEventListener('click', () => {
    selectHouse = !selectHouse
    if(selectHouse) {
        selectHouseHoldBtn.textContent= 'Close'
        selectForm.style.display = 'block'
        selectForm.addEventListener('submit', e => {
            e.preventDefault()
            let familyId = e.target.querySelector('#family-select').value

            let chosenFamily = HouseHold.all.find(chosenFamily => familyId == chosenFamily.id)
            clearChoreDivs()
            chosenFamily.renderChores()
            chosenFamily.renderMembers()
        })
    } else {
        selectHouseHoldBtn.textContent = "Select Your Family"
        selectForm.style.display = 'none'
    }
})


//button and values for new chore form
let addChore = true
addBtn.addEventListener('click', () => {
    addChore = !addChore
    if(addChore) {
        addBtn.textContent = 'Close'
        choreForm.style.display = 'block'
        choreForm.addEventListener('submit', e => {
            e.preventDefault()
            Chore.postChore(e.target)
        })
    } else {
        addBtn.textContent = "Add a New Chore!"
        choreForm.style.display = 'none'
    }
})

// Add House Hold button and Values
let addHouseHold = true
addHouseHoldBtn.addEventListener('click', () => {
    
    addHouseHold = !addHouseHold
    if (addHouseHold){
        addHouseHoldBtn.textContent = "Close"
        housePopUp.style.display = 'block'
        housePopUp.addEventListener('submit', e => {
            e.preventDefault()
            HouseHold.postHouseHold(e.target)
        })
    } else {
        addHouseHoldBtn.textContent = "Add a New House Hold"
        housePopUp.style.display = 'none'
    }
})






// clear form functions
function clearFamilyDD(){
    document.querySelector("#family-select").innerHTML = ""
}
function clearForm() {
    document.querySelector(".input-text").value = ""
}

function clearNewHouseForm() {
    document.querySelector('.house-hold-input-text').value = ""
    document.querySelector('.house-members-input-text').value  = ""
}

function clearChoreDivs(){
    choreCollection.innerHTML = ""
}

function clearNewChore() {
    document.querySelector("#select").innerHTML = ""  
}
