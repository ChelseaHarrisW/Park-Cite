import { findGuest } from "./guest.js"
import { findParks } from "./parkArea.js"
import { findService } from "./services.js"


const mainContainer = document.querySelector("#container") // reffrences  the ID by using the #. this helps link the CSS

const applicationHTML = `
<h1>Cider Park</h1>
<article class="details">
    <section class="detail--column list details__park">
        <h2>Park Divisions</h2>
        ${findParks()}
    </section>
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


`

mainContainer.innerHTML = applicationHTML // this line put all the info into HTML
