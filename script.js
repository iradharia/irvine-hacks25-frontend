function register() {
  let userInput = document.getElementById("name-input").value;
  console.log(userInput);

  fetch("http://localhost:5000/add-realtor/" + userInput).then((response) => {
    getDatabaseDataAndShowOnWebsite();
  });
}

function getDatabaseDataAndShowOnWebsite() {
  fetch("http://localhost:5000/")
    //we get data in a hjumbled binary mess, we convert into a readable understanble format
    .then((response) => response.json())
    //
    .then((response) => {
      document.getElementById("display").innerHTML = JSON.stringify(
        response.realtors
      );
    });
}


print("hello world ")