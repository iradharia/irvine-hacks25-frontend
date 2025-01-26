// DOM
const swiper = document.querySelector("#swiper");
const like = document.querySelector("#like");
const dislike = document.querySelector("#dislike");
const clientDataDiv = document.getElementById("clientData");

// Constants
const clients = [
  { firstName: "Emily", lastName: "Davis", phone: "6123456789", location: "Minneapolis, Minnesota", budget: "500,000", propertyType: ["Single", "Townhouse"] },
  { firstName: "Omar", lastName: "Alvarez", phone: "3059876543", location: "Miami, Florida", budget: "700,000", propertyType: ["Luxury", "Multi"] },
  { firstName: "Zoe", lastName: "Cooper", phone: "3121234567", location: "Chicago, Illinois", budget: "600,000", propertyType: ["Condo", "Townhouse"] },
  { firstName: "Joseph", lastName: "Watson", phone: "4152345678", location: "Portland, Oregon", budget: "450,000", propertyType: ["Single", "Luxury"] },
];

// Variables
let currentCardIndex = 0;

// Functions
function updateClientData(index) {
  if (index >= clients.length) return;
  const client = clients[index];
  clientDataDiv.innerHTML = `
    <h3>${client.firstName} ${client.lastName}</h3>
    <p>Phone: ${client.phone}</p>
    <p>Location: ${client.location}</p>
    <p>Budget: $${client.budget}</p>
    <p>Property Type: ${client.propertyType.join(", ")}</p>
  `;
}

function handleSwipe(card, direction) {
  card.style.transition = "transform 1s, opacity 1s";
  card.style.transform = `translate(${direction * 1000}px, 0) rotate(${direction * 45}deg)`;
  card.style.opacity = "0";
  setTimeout(() => card.remove(), 1000);

  if (direction === 1) {
    like.classList.add("trigger");
    setTimeout(() => like.classList.remove("trigger"), 1000);
  } else {
    dislike.classList.add("trigger");
    setTimeout(() => dislike.classList.remove("trigger"), 1000);
  }

  currentCardIndex++;
  if (currentCardIndex < clients.length) {
    updateClientData(currentCardIndex);
  } else {
    clientDataDiv.innerHTML = `<p>No more clients to show.</p>`;
  }
}

function addSwipeEvents(card, index) {
    let startX = 0;
    let currentX = 0;
    let startTime = 0;
    const swipeThreshold = 100; // Pixels to consider a valid swipe
    const swipeSpeedThreshold = 0.5; // Minimum speed (pixels/ms) for a swipe
  
    const handleTouchStart = (e) => {
      startX = e.touches[0].clientX;
      startTime = Date.now(); // Record the swipe start time
      card.style.transition = "none";
    };

  const handleTouchMove = (e) => {
    currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;
    const rotate = deltaX * 0.1;
    card.style.transform = `translate(${deltaX}px, 0) rotate(${rotate}deg)`;
  };

  const handleTouchEnd = () => {
    const deltaX = currentX - startX;
    const timeElapsed = Date.now() - startTime; // Calculate swipe duration
    const swipeSpeed = Math.abs(deltaX) / timeElapsed; // Pixels per millisecond

    if (Math.abs(deltaX) > swipeThreshold || swipeSpeed > swipeSpeedThreshold) {
      // Trigger swipe if threshold or speed is met
      handleSwipe(card, deltaX > 0 ? 1 : -1);
    } else {
      // Reset position if swipe is invalid
      card.style.transition = "transform 0.3s";
      card.style.transform = "translate(0, 0) rotate(0)";
    }
  };

  card.addEventListener("touchstart", handleTouchStart);
  card.addEventListener("touchmove", handleTouchMove);
  card.addEventListener("touchend", handleTouchEnd);

  // Optional: Add mouse swipe support
  let isMouseDown = false;
  card.addEventListener("mousedown", (e) => {
    isMouseDown = true;
    startX = e.clientX;
    startTime = Date.now();
    card.style.transition = "none";
  });
  card.addEventListener("mousemove", (e) => {
    if (!isMouseDown) return;
    currentX = e.clientX;
    const deltaX = currentX - startX;
    const rotate = deltaX * 0.1;
    card.style.transform = `translate(${deltaX}px, 0) rotate(${rotate}deg)`;
  });
  card.addEventListener("mouseup", () => {
    if (!isMouseDown) return;
    isMouseDown = false;
    const deltaX = currentX - startX;
    card.style.transition = "transform 0.3s";

    if (Math.abs(deltaX) > 100) {
      handleSwipe(card, deltaX > 0 ? 1 : -1);
    } else {
      card.style.transform = "translate(0, 0) rotate(0)";
    }
  });
  card.addEventListener("mouseleave", () => {
    if (isMouseDown) {
      isMouseDown = false;
      card.style.transition = "transform 0.3s";
      card.style.transform = "translate(0, 0) rotate(0)";
    }
  });
}

// Attach swipe functionality to all cards
document.querySelectorAll(".card").forEach((card, index) => {
  addSwipeEvents(card, index);
});

// Initialize with the first client's data
updateClientData(0);
