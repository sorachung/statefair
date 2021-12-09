import { TotalTicket } from "../TotalTickets.js"

const contentTarget = document.querySelector(".games")
const eventHub = document.querySelector("#state-fair")

export const GameTicketHolders = () => {
    eventHub.addEventListener("gameTicketPurchased", customEvent => {
        TotalTicket();
        contentTarget.innerHTML += `
            <div class="player person">
            </div>
            `
    })
    eventHub.addEventListener("fullPackageTicketPurchased", customEvent => {
        TotalTicket();
        contentTarget.innerHTML += `
              <div class="bigSpender person">
              </div>
              `
      })
}