import { TotalTicket } from "../TotalTickets.js"

const contentTarget = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolders = () => {
    eventHub.addEventListener("foodTicketPurchased", customEvent => {
        TotalTicket();
        contentTarget.innerHTML += `
            <div class="eater person">
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