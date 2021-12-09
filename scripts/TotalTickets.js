const contentTarget = document.querySelector(".customers")
const eventHub = document.querySelector("#state-fair")

let ticketCount = -1;

export const TotalTicket = () => {
  ticketCount++
  contentTarget.innerHTML = `Total tickets purchased: ${ticketCount}`
}

