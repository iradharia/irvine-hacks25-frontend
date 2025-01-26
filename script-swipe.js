// DOM
const swiper = document.querySelector("#swiper");
const like = document.querySelector("#like");
const dislike = document.querySelector("#dislike");

// constants
const urls = [
  "https://images.unsplash.com/photo-1498462440456-0dba182e775b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BsYXNofGVufDB8fDB8fHwy",
  "https://source.unsplash.com/random/1000x1000/?landscape",
  "https://source.unsplash.com/random/1000x1000/?ocean",
  "https://source.unsplash.com/random/1000x1000/?moutain",
  "https://source.unsplash.com/random/1000x1000/?forest",
];

// variables
let cardCount = 0;

// functions
function appendNewCard() {
  const card = new Card({
    imageUrl: urls[cardCount % 5],
    onDismiss: appendNewCard,
    onLike: () => {
      like.style.animationPlayState = "running";
      like.classList.toggle("trigger");
    },
    onDislike: () => {
      dislike.style.animationPlayState = "running";
      dislike.classList.toggle("trigger");
    },
  });
  swiper.append(card.element);
  cardCount++;

  const cards = swiper.querySelectorAll(".card:not(.dismissing)");
  cards.forEach((card, index) => {
    card.style.setProperty("--i", index);
  });
}

// first 5 cards
for (let i = 0; i < 5; i++) {
  appendNewCard();
}

    function displayData() {
    const [first, second, third, fourth] = data
    }
    // Function to display each client's data separately
    function displayFirst() {
      const clientDataDiv = document.getElementById("clientData");

      // HTML content for each client
      const firstContent = `
        <div class="client">
          <h3>${first.firstName} ${first.lastName}</h3>
          <p>Email: ${first.email}</p>
          <p>Phone: ${first.phone}</p>
          <p>Location: ${first.city}, ${first.state}</p>
          <p>Budget: $${first.budget}</p>
          <p>Pronouns: ${first.pronouns}</p>
          <p>Property Type: ${first.propertyType.join(", ")}</p>
          <p>Lifestyle: ${first.lifestyle.join(", ")}</p>
          <p>Personality: ${first.personality.join(", ")}</p>
          <hr>
        </div>
      `;

      // Append the content for each client
      clientDataDiv.innerHTML = firstContent;
    }

    function displayFirst() {
      const clientDataDiv = document.getElementById("clientData");

      // HTML content for each client
      const firstContent = `
        <div class="client">
          <h3>${first.firstName} ${first.lastName}</h3>
          <p>Phone: ${first.phone}</p>
          <p>Location: ${first.city}, ${first.state}</p>
          <p>Budget: $${first.budget}</p>
          <p>Property Type: ${first.propertyType.join(", ")}</p>
          <hr>
        </div>
      `;

      // Append the content for each client
      clientDataDiv.innerHTML = firstContent;
    }

    function displaySecond() {
      const clientDataDiv = document.getElementById("clientData");
      let htmlContent = "";

      data.forEach(client => {
        htmlContent += `
          <div class="client">
            <h3>${client.firstName} ${client.lastName}</h3>
            <p>Email: ${client.email}</p>
            <p>Phone: ${client.phone}</p>
            <p>Location: ${client.city}, ${client.state}</p>
            <p>Budget: $${client.budget}</p>
            <p>Experience Level: ${client.experienceLevel}</p>
            <p>Timeline: ${client.timeline}</p>
            <p>Pronouns: ${client.pronouns}</p>
            <p>Language: ${client.language}</p>
            <p>Property Type: ${client.propertyType.join(", ")}</p>
            <p>Lifestyle: ${client.lifestyle.join(", ")}</p>
            <p>Personality: ${client.personality.join(", ")}</p>
            <hr>
          </div>
        `;
      });

      clientDataDiv.innerHTML = htmlContent;

      // HTML content for each client
      const secondContent = `
        <div class="client">
          <h3>${second.firstName} ${second.lastName}</h3>
          <p>Phone: ${second.phone}</p>
          <p>Location: ${second.city}, ${second.state}</p>
          <p>Budget: $${second.budget}</p>
          <p>Property Type: ${second.propertyType.join(", ")}</p>
          <hr>
        </div>
      `;

      // Append the content for each client
      clientDataDiv.innerHTML = secondContent;
    }

    function displayThird() {
      const clientDataDiv = document.getElementById("clientData");

      // HTML content for each client
      const thirdContent = `
        <div class="client">
          <h3>${third.firstName} ${third.lastName}</h3>
          <p>Phone: ${third.phone}</p>
          <p>Location: ${third.city}, ${third.state}</p>
          <p>Budget: $${third.budget}</p>
          <p>Property Type: ${third.propertyType.join(", ")}</p>
          <hr>
        </div>
      `;

      // Append the content for each client
      clientDataDiv.innerHTML = thirdContent;
    }

    function displayFourth() {
      const clientDataDiv = document.getElementById("clientData");

      // HTML content for each client
      const fourthContent = `
        <div class="client">
          <h3>${fourth.firstName} ${fourth.lastName}</h3>
          <p>Phone: ${fourth.phone}</p>
          <p>Location: ${fourth.city}, ${fourth.state}</p>
          <p>Budget: $${fourth.budget}</p>
          <p>Property Type: ${fourth.propertyType.join(", ")}</p>
          <hr>
        </div>
      `;

      // Append the content for each client
      clientDataDiv.innerHTML = fourthContent;
    }

    // Call the function to display data on page load
    window.onload = displayData;
    