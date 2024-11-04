let cart = [];
let totalAmount = 0;

function toggleItem(button) {
    const service = button.getAttribute('data-service');
    const price = parseInt(button.getAttribute('data-price'), 10);

    if (button.textContent === 'Add Item') {
        addToCart(service, price);
        button.textContent = 'Remove Item';
        button.style.backgroundColor = '#dc3545'; // Change to red for 'Remove'
    } else {
        removeFromCart(service, price);
        button.textContent = 'Add Item';
        button.style.backgroundColor = '#28a745'; // Change back to green for 'Add'
    }
}

function addToCart(service, price) {
    cart.push({ service, price });
    totalAmount += price;
    updateCart();
}

function removeFromCart(service, price) {
    let index = cart.findIndex(item => item.service === service);
    if (index > -1) {
        cart.splice(index, 1);
        totalAmount -= price;
        updateCart();
    }
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalAmountDisplay = document.getElementById('total-amount');
    
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.service} - ₹${item.price}`;
        cartItems.appendChild(li);
    });
    
    totalAmountDisplay.textContent = totalAmount;
}

document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert("Booking confirmed! Total amount: ₹" + totalAmount);
});
