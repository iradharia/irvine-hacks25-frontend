function register() {
  let userInput = document.getElementById("name-input").value;
  console.log(userInput);

  fetch("https://537e-169-234-82-73.ngrok-free.app/add-realtors" + userInput, {headers: {
    "ngrok-skip-browser-warning": "helloi"
  }}).then((response) => {
    getDatabaseDataAndShowOnWebsite();
  });
}

function getRealtors() {
  fetch("https://537e-169-234-82-73.ngrok-free.app/", {headers: {
    "ngrok-skip-browser-warning": "helloi"
  }}).then((data) => data.json())
    //we get data in a hjumbled binary mess, we convert into a readable understanble format
    // .then((response) => response.json())
    .then((data) => {
      const clients = data.clients; // Access the 'clients' array
      let htmlContent = ''; // String to hold the HTML output

      // Loop through each client and create HTML for each one
      clients.forEach(client => {
        htmlContent += `
          <div class="client">
            <h3>${client.firstName} ${client.lastName} (${client.city}, ${client.state})</h3>
          </div>
        `;
      });

      // Insert the generated HTML content into the element with id "display"
      document.getElementById("display").innerHTML = htmlContent;
});
}


function getClients() {
  fetch("https://537e-169-234-82-73.ngrok-free.app/", {headers: {
    "ngrok-skip-browser-warning": "helloi"
  }}).then((data) => data.json())
    //we get data in a hjumbled binary mess, we convert into a readable understanble format
    // .then((response) => response.json())
    .then((data) => {
      const realtors = data.realtors; // Access the 'clients' array
      let htmlContent = ''; // String to hold the HTML output

      // Loop through each client and create HTML for each one
      clients.forEach(realtor => {
        htmlContent += `
          <div class="client">
            <h3>${realtor.firstName} ${realtor.lastName} (${realtor.city}, ${realtor.state})</h3>
          </div>
        `;
      });

      // Insert the generated HTML content into the element with id "display"
      document.getElementById("display").innerHTML = htmlContent;
});
}
