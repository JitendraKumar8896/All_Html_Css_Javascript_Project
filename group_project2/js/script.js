function scrollToServices() {
    document.querySelector('.achievements-section').scrollIntoView({ behavior: 'smooth' });
}
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

// document.getElementById('booking-form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     alert("Booking confirmed! Total amount: ₹" + totalAmount);
// });

function sendBooking() {
    const name = document.getElementById('full-name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const confirmationMessage = document.getElementById('confirmation-message');
    
    // Clear any previous messages
    confirmationMessage.textContent = '';
    
    
    if (name === '' || email === '' || phone === '') {
        
        confirmationMessage.textContent = "Please fill all the fields! Your booking is confirmed";
        confirmationMessage.style.color = 'red'; // Set the error message color to red
    } else {
        
        confirmationMessage.textContent = "Your booking is confirmed! Amount is:₹"+totalAmount;
        confirmationMessage.style.color = 'green'; 
        // Reset form fields (optional)
        document.getElementById('booking-form').reset();
    }
}




// EmailJs newslatter section code


(function () {
    emailjs.init("OvTeQLerSvpzX-gAg"); // Replace with your EmailJS user ID
})();

document.getElementById('newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    // Get form values
    const fullName = document.getElementById('full_name').value;
    const email = document.getElementById('email_id').value;

    // Parameters for EmailJS
    const templateParams = {
        from_name: fullName,
        to_email: email
    };

    // Send confirmation email via EmailJS
    emailjs.send('service_nvzg20d', 'template_lhfpy5b', templateParams)
        .then(function(response) {
            alert('Subscription successful! A confirmation email has been sent.');
        }, function(error) {
            alert('Failed to send the email. Please try again.');
        });

        document.getElementById('newsletter-form').reset();
});






