import { getServices, getParkAreas, getParkAreaServices } from "./database.js";

// import function that reprsents the park array from the database
const Services = getServices()
const parkAreas = getParkAreas()
const ParkAreaServices = getParkAreaServices()
// itterate the  services array and render the list of the services

// iterate the array of parks to passess the objects properties of listed parks

//populate a click event that will activate when a service is clicked

//then string inturpulate a message that says {service} is availible at {park area}

 
export const findService = () => {
    let html = "<ul class=service>"
    
    for (const service of Services) {
        html += `<li id="service--${service.id}">${service.type}</li>`
    }
    
    html += "</ul>"
    
    return html
}






 document.addEventListener( // click
    "click",
   (clickEvent) => {
        const itemClicked = clickEvent.target //
        if (itemClicked.id.startsWith("service")) {
           const [, serviceId] = itemClicked.id.split("--") // using split to sort what we want
           // initilazing the park area template  
           // we created the template because there are multiple services in multiple park areas
           // get all park area services
           for (const service of Services) {
               // the template is scoped here bacause it will be looped through each service instance
               if ( service.id === parseInt(serviceId)) { // we use parseInt to change the string of numbers from the HTML to a interger
                let parkAreaTemplate = ""
                    // we have all matching services here
                  const Matches = ParkAreaServices.filter(  // filter through the empoyees and their IDs 
                      (ParkAreaServices) => ParkAreaServices.serviceId === service.id)
                      for (const match of Matches) {
                          for (const parkArea of parkAreas) {
                              // once looped through both arrays add the matches to the array
                              if (parkArea.id === match.parkAreaId){
                                  // the if else is a fail safe that makes sure when the string is empty we just add it, and when their are multiple things we add the and
                                if (parkAreaTemplate === "") {
                                    parkAreaTemplate += `${parkArea.name}`
                                } else {
                                    parkAreaTemplate += ` and ${parkArea.name}`
                                }
                            }
                        }
                    }
                    
                    
                    window.alert(` ${service.type} is availible at ${parkAreaTemplate}  `) //using the .lenghth property to count orders
                }
            }
        }     })
