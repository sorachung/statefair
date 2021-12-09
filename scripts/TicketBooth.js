import { FoodTicketHolders } from "./food/FoodTicketHolder.js";
import { GameTicketHolders } from "./games/GameTicketHolder.js";
import { RideTicketHolders } from "./rides/RideTicketHolders.js";
import { SideshowTicketHolders } from "./sideshows/SideshowTicketHolder.js";
import { TotalTicket } from "./TotalTickets.js";

const contentTarget = document.querySelector(".entry")
const eventHub = document.querySelector("#state-fair")

RideTicketHolders();
FoodTicketHolders();
GameTicketHolders();
SideshowTicketHolders();
TotalTicket();

eventHub.addEventListener("click", event => {
    if (event.target.id === "rideTicket") {
        const rideEvent = new CustomEvent("rideTicketPurchased")
        eventHub.dispatchEvent(rideEvent)
    } else if (event.target.id === "foodTicket") {
        eventHub.dispatchEvent(new CustomEvent("foodTicketPurchased"))
    } else if (event.target.id === "gameTicket") {
        eventHub.dispatchEvent(new CustomEvent("gameTicketPurchased"))
    } else if (event.target.id === "sideshowTicket") {
        eventHub.dispatchEvent(new CustomEvent("sideshowTicketPurchased"))
    } else if (event.target.id === "fullPackageTicket") {
        eventHub.dispatchEvent(new CustomEvent("fullPackageTicketPurchased"))
    }
})

export const TicketBooth = () => {
    contentTarget.innerHTML = `
        <div class="ticketBooth">
            <button id="rideTicket">Ride Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="foodTicket">Food Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="gameTicket">Game Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="sideshowTicket">Sideshow Ticket</button>
        </div>
        <div class="ticketBooth">
            <button id="fullPackageTicket">Full Package Ticket</button>
        </div>
    `
}

