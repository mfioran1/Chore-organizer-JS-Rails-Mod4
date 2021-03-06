let HOUSE_HOLD_URL = 'http://localhost:3000/house_holds'

document.addEventListener('DOMContentLoaded', () => {
    function fetchHouseHolds() {
        return fetch(`${HOUSE_HOLD_URL}`)
        .then(resp => resp.json())
        .then(houseHolds => console.log(houseHolds))
    }
    return fetchHouseHolds()
})