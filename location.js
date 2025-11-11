// Define delivery charges
const deliveryCharges = {
  USA: "£5.00",
  Europe: "€10.00",
  "US/Canada": "$15.00",
  "Rest of the World": "$20.00",
};

// Get all the books
document.querySelectorAll(".book").forEach((book) => {
  const locationSelect = book.querySelector("#location");
  const deliveryChargeDisplay = book.querySelector("#delivery-charge");
  const addToCartButton = book.querySelector(".add-to-cart");

  // Listen for location change
  locationSelect.addEventListener("change", () => {
    const selectedLocation = locationSelect.value;
    if (selectedLocation) {
      // Display the delivery charge based on selected location
      deliveryChargeDisplay.textContent = `Delivery Charge: ${deliveryCharges[selectedLocation]}`;
    } else {
      deliveryChargeDisplay.textContent = "";
    }
  });

  // Add to cart functionality
  addToCartButton.addEventListener("click", () => {
    const selectedLocation = locationSelect.value;
    if (!selectedLocation) {
      alert("Please select a delivery location!");
      return;
    }

    // Get the charge for the selected location
    const charge = deliveryCharges[selectedLocation];

    // Log the added item to the cart (for now, display an alert)
    alert(`Added to cart: The Notebook with delivery charge of ${charge}`);

    // Optionally, you can implement an actual cart system here
  });
});

//Search for book method
function searchBooks() {
  const searchInput = document
    .getElementById("search-input")
    .value.toLowerCase();
  const books = document.querySelectorAll(".book"); // Select all book elements

  books.forEach((book) => {
    const bookTitle = book.querySelector("h3").textContent.toLowerCase(); // Get book title
    if (bookTitle.includes(searchInput)) {
      book.style.display = "block"; // Show book if it matches
    } else {
      book.style.display = "none"; // Hide book if it doesn't match
    }
  });
}
