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
    
}