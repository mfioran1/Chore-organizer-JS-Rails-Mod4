let HOUSE_HOLD_URL = 'http://localhost:3000/house_holds'
const selectHouseHoldBtn = document.getElementById('all-house-options')
const selectForm = document.querySelector('.family-selector')




document.addEventListener('DOMContentLoaded', () => {
    function fetchHouseHolds() {
        return fetch(`${HOUSE_HOLD_URL}`)
        .then(resp => resp.json())
        .then(houseHolds => {
            houseHolds.forEach(houseHold => {
                let hh = new HouseHold(houseHold.name, houseHold.members, houseHold.id)
            })
        HouseHold.renderDropDownOptions()
        HouseHold.renderHouseHolds()
        })
        
    }

    fetchHouseHolds()
    selectHouseHoldBtn.textContent = 'Select Your House Hold'

    
})

selectHouseHoldBtn.addEventListener('click', () => {
    let selectHouse = false
    selectHouse = !selectHouse

    if(selectHouse) {
        selectHouseHoldBtn.textContent = 'Close'
        selectForm.style.display = 'block'
        selectForm.addEventListener('submit', e => {
            e.preventDefault()
            let familyId = e.target.querySelector('#famiy-select').value

            let chosenFamily = HouseHold.all.find(chosenFamily => familyId == chosenFamily.id)
            clearChoreDivs()
            chosenFamily.renderChores()
        })
    }
    else {
        selectHouseHoldBtn.textContent = "Select Your Family"
        selectForm.style.display = 'none'
    }
})



function clearChoreDivs(){
    choreCollection.innerHTML = ""
}

function clearForm() {
    document.querySelector(".input-text").value = ""
}