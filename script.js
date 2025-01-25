function register() {
  let userInput = document.getElementById("name-input").value;
  console.log(userInput);

  fetch("https://537e-169-234-82-73.ngrok-free.app/" + userInput).then((response) => {
    getDatabaseDataAndShowOnWebsite();
  });
}

function getDatabaseDataAndShowOnWebsite() {
  fetch("https://537e-169-234-82-73.ngrok-free.app/")
    //we get data in a hjumbled binary mess, we convert into a readable understanble format
    .then((response) => response.json())
    //
    .then((response) => {
      document.getElementById("display").innerHTML = JSON.stringify(
        response
      );
    });
}

