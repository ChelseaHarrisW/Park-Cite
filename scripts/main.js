import { findGuest } from "./guest.js"
import { findParks } from "./parkArea.js"
import { findService } from "./services.js"


const mainContainer = document.querySelector("#container") // reffrences  the ID by using the #. this helps link the CSS

const applicationHTML = `
    <div id="header">
    <img class="logo" alt="park" src= "https://www.cedarparktexas.gov/home/showpublishedimage/8511/636487491632730000" />
    <h1>Cedar Park</h1>
    </div>
    <article class="details">
        <section class="detail--column list details__park">
            <h2>Park Divisions</h2>
            ${findParks()}
        </section>
    </article>
    <div class="details--container">
        <article class="details">
            <section class="detail--column list details__services">
                <h2>Services</h2>
                ${findService()}
            </section>
        </article>

        <article class="details">
            <section class="detail--column list details__services">
                <h2>Welcome Our Guest</h2>
                ${findGuest()}
            </section>
        </article>
    </div>


`

mainContainer.innerHTML = applicationHTML // this line put all the info into HTML
