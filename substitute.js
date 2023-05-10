function foodSwapSelect() {
  const inputElement = document.querySelector(".food-select");
  const foodSelect = inputElement.value;

  console.log(foodSelect);

  var details = getFoodDetails(foodSelect);

  // Display the details
  var detailsDisplay = document.getElementById("details");

  const html = `
    <div class = "product-box">
      <div>
        <img src = "${details.image}" class = "product-image">
      </div>
      <div>
        <div class = "product-name">${details.name}</div>
        <div class = "product-details">${details.description}</div>
      </div>
    <div>
  `;
}

function getFoodDetails() {

  var details = {};

  switch (foodSelect) {
    case "velveta-cheese":
      details.name = "Velveta Cheese";
      details.image = "Velveeta-Cheese-Substitutes.jpg";
      details.description = "A classic beef burger, made with a juicy patty and all the toppings.";
      break;
    case "onion-powder":
      details.name = "Onion Powder";
      details.image = "Substitute-for-Onion-Powder.jpg";
      details.description = "The best substitute for onion powder are onion flakes and jarred minced onion. You can also use onion paste, chopped chives, and leeks as onion powder substitute.";
      break;
  }
}