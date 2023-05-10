function foodSwapSelect() {

  event.preventDefault();

  const select = document.querySelector(".food-select");
  const selectedOption = select.options[select.selectedIndex].value;
  const detailsBox = document.getElementById("details");
  
  // Define object containing food information
  const foodInfo = {
    "velveta-cheese": {
      name: "Velveta Cheese",
      image: "Velveeta-Cheese-Substitutes.jpg",
      details: "Velveta Cheese is a processed cheese product that has a smooth texture and a mild, creamy flavor.",
      substitutes: `1. xyz Cheese  
      2. Me Cheese`
    },
    "cream-cheese": {
      name: "Cream Cheese",
      image: "Cream-Cheese-Substitutes.jpg",
      details: "Cream Cheese is a soft, spreadable cheese that is often used as a topping for bagels or as an ingredient in recipes.",
      substitutes: `1. xyz Cheese 2. Me Cheese`
    },
    "sour-cream": {
      name: "Sour Cream",
      image: "Sour-Cream-Substitutes.jpg",
      details: "Sour Cream is a dairy product that is commonly used as a condiment or ingredient in recipes. It has a tangy flavor and a creamy texture.",
      substitutes: `1. xyz Cheese 2. Me Cheese`
    },
    "onion-powder": {
      name: "Onion Powder",
      image: "Substitute-for-Onion-Powder.jpg",
      details: "Onion Powder is a seasoning made from dried, ground onions. It is commonly used to add flavor to soups, stews, and other dishes.",
      substitutes: `1. xyz Cheese 2. Me Cheese`
    },
    "herbes-de-provence": {
      name: "Herbes de Provence",
      image: "Herbes-de-Provence-Substitutes.jpg",
      details: "Herbes de Provence is a blend of dried herbs that originated in the Provence region of France. It typically includes thyme, rosemary, oregano, and other herbs.",
      substitutes: `1. xyz Cheese 2. Me Cheese`
    },
    "cayenne-pepper": {
      name: "Cayenne Pepper",
      image: "Cayenne-Pepper.jpg",
      details: "Cayenne Pepper is a spicy seasoning made from ground red chili peppers. It is commonly used to add heat to dishes.",
      substitutes: `1. xyz Cheese 2. Me Cheese`
    },
    "spring-onion": {
      name: "Spring Onion",
      image: "Spring-Onion-Substitutes.jpg",
      details: "Spring Onion, also known as scallions, are young onions that are harvested before they develop a bulb. They have a mild, onion-like flavor.",
      substitutes: `1. xyz Cheese 2. Me Cheese`
    },
    "swiss-chard": {
      name: "Swiss Chard",
      image: "Swiss-Chard-Substitutes.jpg",
      details: "Swiss Chard is a leafy green vegetable that is similar to spinach. It has a slightly bitter flavor and can be eaten raw or cooked.",
      substitutes: `1. xyz Cheese 2. Me Cheese`
    },
    "spinach": {
      name: "Spinach",
      image: "Spinach-Substitutes.jpg",
      details: "Spinach is a leafy green vegetable that is rich in vitamins and minerals. It has a mild, slightly bitter flavor and can be eaten raw or cooked.",
      substitutes: `1. xyz Cheese 2. Me Cheese`
    }
  };
  
  // Retrieve information for selected food option
  const food = foodInfo[selectedOption];
  
  // Create HTML to display food information
  const detailsHTML = `
    <div class="product-box">
      <img src="${food.image}" alt="${food.name}" class="product-image">
      <div>
        <h2 class="product-name">${food.name}</h2>
        <p class="product-details">${food.details}</p>
      </div>
    </div>
    <div class="substitute-title">${food.name} Substitutes You Can Easily Swap In</div>
    <div>${food.substitutes}</div>
  `;
  
  // Display food information in details box
  detailsBox.innerHTML = detailsHTML;

  quantitySelect();

  return false;
}



function quantitySelect() {
  const inputElement = document.querySelector(".quantity-select");
  const quantity = inputElement.value;
  console.log(quantity);
}