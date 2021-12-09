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
}