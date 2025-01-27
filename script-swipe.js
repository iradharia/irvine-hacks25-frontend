// DOM
const swiper = document.querySelector("#swiper");
const like = document.querySelector("#like");
const dislike = document.querySelector("#dislike");
const clientDataDiv = document.getElementById("clientData");

// Constants
const clients = [
  { firstName: "Emily", lastName: "Davis", phone: "6123456789", location: "Sunnyvale, California", budget: "500,000", propertyType: ["Luxury", "Townhouse"] },
  { firstName: "Omar", lastName: "Alvarez", phone: "3059876543", location: "San Jose, California", budget: "700,000", propertyType: ["Luxury", "Multi"] },
  { firstName: "Zoe", lastName: "Cooper", phone: "3121234567", location: "Los Angeles, California", budget: "600,000", propertyType: ["Condo", "Townhouse"] },
  { firstName: "Joseph", lastName: "Watson", phone: "4152345678", location: "Bakersfield, California", budget: "450,000", propertyType: ["Single", "Luxury"] },
];

// Variables
let currentCardIndex = 0;

// Functions
function updateClientData(index) {
  if (index >= clients.length) {
    clientDataDiv.innerHTML = `<p>No more clients to show.</p>`;
    return;
  }

  const client = clients[index];
  clientDataDiv.innerHTML = `
    <h3>${client.firstName} ${client.lastName}</h3>
    <p>Phone: ${client.phone}</p>
    <p>Location: ${client.location}</p>
    <p>Budget: $${client.budget}</p>
    <p>Property Type: ${client.propertyType.join(", ")}</p>
  `;
}

function handleAction(direction) {
  // Get the current card
  const currentCard = swiper.querySelector(".card");
  if (!currentCard) return;

  // Animate card dismissal
  currentCard.style.transition = "transform 0.5s, opacity 0.5s";
  currentCard.style.transform = `translate(${direction * 1000}px, 0) rotate(${direction * 45}deg)`;
  currentCard.style.opacity = "0";

  // Remove the card after animation
  setTimeout(() => {
    currentCard.remove();
    currentCardIndex++;

    if (currentCardIndex < clients.length) {
      updateClientData(currentCardIndex);
    } else {
      clientDataDiv.innerHTML = `<p>No more clients to show.</p>`;
    }
  }, 500);

  // Trigger the respective button animation
  if (direction === 1) {
    like.classList.add("trigger");
    setTimeout(() => like.classList.remove("trigger"), 500);
  } else {
    dislike.classList.add("trigger");
    setTimeout(() => dislike.classList.remove("trigger"), 500);
  }
}

// Event Listeners for Like and Dislike Buttons
like.addEventListener("click", () => handleAction(1)); // 1 for "like" (right)
dislike.addEventListener("click", () => handleAction(-1)); // -1 for "dislike" (left)

// Initialize
updateClientData(0);
