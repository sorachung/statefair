const contentTarget = document.querySelector(".sideshow")
const eventHub = document.querySelector("#state-fair")

export const SideshowTicketHolders = () => {
    eventHub.addEventListener("sideshowTicketPurchased", customEvent => {
      TotalTicket();
        contentTarget.innerHTML += `
            <div class="gawker person">
            </div>
            `
    })

}