// DOM
const swiper = document.querySelector("#swiper");
const like = document.querySelector("#like");
const dislike = document.querySelector("#dislike");

// constants
const urls = [
  "https://images.unsplash.com/photo-1498462440456-0dba182e775b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BsYXNofGVufDB8fDB8fHwy",
  "https://images.unsplash.com/photo-1498462440456-0dba182e775b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BsYXNofGVufDB8fDB8fHwy",
  "https://images.unsplash.com/photo-1498462440456-0dba182e775b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BsYXNofGVufDB8fDB8fHwy",
  "https://images.unsplash.com/photo-1498462440456-0dba182e775b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BsYXNofGVufDB8fDB8fHwy",
  "https://images.unsplash.com/photo-1498462440456-0dba182e775b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3BsYXNofGVufDB8fDB8fHwy",
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

    const data = [
      {
        "firstName": "emily",
        "lastName": "davis",
        "email": "emily.davis@gmail.com",
        "phone": "6123456789",
        "city": "minneapolis",
        "state": "minnesota",
        "budget": "500000",
        "experienceLevel": "first-time buyer",
        "timeline": "immediate (0-3m)",
        "pronouns": "she/her",
        "language": "english",
        "propertyType": ["single", "townhouse"],
        "lifestyle": ["suburban", "near schools and parks", "pet-friendly"],
        "personality": ["enthusiastic", "attentive", "empathetic"]
      },
      {
        "firstName": "omar",
        "lastName": "alvarez",
        "email": "omar.alvarez@gmail.com",
        "phone": "3059876543",
        "city": "miami",
        "state": "florida",
        "budget": "700000",
        "experienceLevel": "experienced buyer",
        "timeline": "medium-long (3-12m)",
        "pronouns": "he/him",
        "language": "spanish",
        "propertyType": ["luxury", "multi"],
        "lifestyle": ["urban", "commute-friendly", "near shopping and dining"],
        "personality": ["knowledgeable", "adaptable", "people-oriented"]
      },
      {
        "firstName": "zoe",
        "lastName": "cooper",
        "email": "zoe.cooper@gmail.com",
        "phone": "3121234567",
        "city": "chicago",
        "state": "illinois",
        "budget": "600000",
        "experienceLevel": "first-time buyer",
        "timeline": "immediate (0-3m)",
        "pronouns": "she/her",
        "language": "english",
        "propertyType": ["condo", "townhouse"],
        "lifestyle": ["urban", "commute-friendly", "near shopping and dining"],
        "personality": ["reserved", "attentive", "empathetic"]
      },
      {
        "firstName": "joseph",
        "lastName": "watson",
        "email": "joseph.watson@gmail.com",
        "phone": "4152345678",
        "city": "portland",
        "state": "oregon",
        "budget": "450000",
        "experienceLevel": "first-time buyer",
        "timeline": "medium-long (3-12m)",
        "pronouns": "he/him",
        "language": "english",
        "propertyType": ["single", "luxury"],
        "lifestyle": ["suburban", "near schools and parks", "pet-friendly"],
        "personality": ["attentive", "enthusiastic", "empathetic"]
      }
    ];


    const [first, second, third, fourth] = data
    

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
    // window.onload = displayFirst();
    