import { getParkAreas, getGuests } from "./database.js";

// import function that reprsents the park array from the data
const parkArea = getParkAreas()

// iterate the array of parks to assess the objects properties of listed parks
export const findParks = () => {
    let html = ""
    // for each parkObj we want to display the parkArea.name and the parkArea.location properties
    for (const area of parkArea) {
        html += `<div class="park">`
        html += ` <h2 id= "parkArea.id--${area.id}">${area.name}</h2>
        <div class="parkLocation"> ${area.location}</div>`
    
        html +=  `<div class="parkImage"> 
        <img class="parkImg" alt="park" src= "${area.img}" />`
    
        html +=`</div>`
    }
    return html
}
//define a fx that will use the output from the fx above and convert the corresponding Park info to html

// define a click event so when the  title is clicked the number of guest in the area will appear


// ex of guest obj in the array 
// { id:1, firstName: 'Billie', lastName: 'Jean',ParkAreaId: 1}

// ex of the parkObj in the array
// { id:1, name: 'Chamfort river', location: 'North-West', img: "" }
const guests = getGuests()

document.addEventListener( // click
    "click",
    (clickEvent) => {
        let parkAreaGuests =[]
        const itemClicked = clickEvent.target //
        if (itemClicked.id.startsWith("park")) {
            const [, parkAreaId] = itemClicked.id.split("--") // using split to sort what we want
            for (const guestArea of parkArea) {
                if (guestArea.id === parseInt(parkAreaId)) { // we use parseInt to change the string of numbers from the HTML to a interger
                    for (const guest of guests) {
                        if (guest.ParkAreaId === parseInt(parkAreaId)) {

                            
                            parkAreaGuests = guests.filter(  // filter through the empoyees and their IDs 
                                (parkAreaGuest) => {
                                    if (parkAreaGuest.ParkAreaId === guestArea.id) {
                                    return parkAreaGuest
                                    }
                                }
                                )
                            }
                            
                        }
                        window.alert(` ${guestArea.name} has ${parkAreaGuests.length} guests `) //using the .lenghth property to count orders
                    }
                }
            }
    })