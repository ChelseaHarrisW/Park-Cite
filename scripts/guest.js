import { getGuests } from "./database.js";

// import function that reprsents the park array from the data
const guests = getGuests()

// iterate the array of parks to assess the objects properties of listed parks
 export const findGuest = () => {
   
     // for each parkObj we want to display the guest.name and the guest.location properties
     
     let html = "<ul>"
    
    for (const guest of guests) {
        html += `<li id="guest--${guest.id}">${guest.firstName} ${guest.lastName}</li>`
    }
    
    html += "</ul>"
    
    return html
 } 
