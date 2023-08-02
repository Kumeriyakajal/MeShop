// JavaScript for mycart.js
// Fetch cart items from local storage and render them on the page
function renderCartItems() {
    const cartItems = getCartItems();
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';
  
    if (cartItems.length === 0) {
      cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
      cartItems.forEach((item, index) => {
        const cartItemElement = document.createElement('div');
        cartItemElement.innerHTML = `
          <p>${item.name} - $${item.price}</p>
          <button class="removeItemButton" data-index="${index}">Remove</button>
        `;
        cartItemsContainer.appendChild(cartItemElement);
      });
    }
  }
  
  // Render cart items when the page loads
  renderCartItems();

  var rzpy1 = new Razorpay(options);
  rzpy1.open();
  // clear mycart
  // clear mycart - localStorage
  e.preventDefault();
  
  