// List of services to browse through
const services = [
    {
        name: 'Dry Cleaning',
        price: 500,
        image: 'img2.jfif'
    },
    {
        name: 'Laundry',
        price: 150,
        image: 'img3.jfif'
    },
    {
        name: 'Ironing',
        price: 100,
        image: 'img4.jfif'
    }
];

let currentServiceIndex = 0;

// Function to skip the service
function skipService() {
    currentServiceIndex = (currentServiceIndex + 1) % services.length;
    updateServiceDisplay(currentServiceIndex);
}

// Function to update service display
function updateServiceDisplay(serviceIndex) {
    document.getElementById('service-name').textContent = services[serviceIndex].name;
    document.getElementById('service-price').textContent = `₹${services[serviceIndex].price}.00`;
    document.getElementById('service-image').src = services[serviceIndex].image;
    document.querySelector('.add-btn').setAttribute('data-price', services[serviceIndex].price);
}

// Function to add service to the cart
function addItem() {
    const serviceName = services[currentServiceIndex].name;
    const servicePrice = services[currentServiceIndex].price;

    // Add service to the cart table
    const cartItems = document.getElementById('cart-items');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `<td>${cartItems.rows.length}</td><td>${serviceName}</td><td>₹${servicePrice}</td>`;
    cartItems.appendChild(newRow);

    // Update total price
    const totalPriceEl = document.getElementById('total-price');
    let totalAmount = parseInt(totalPriceEl.textContent);
    totalAmount += servicePrice;
    totalPriceEl.textContent = totalAmount;

    // Remove 'No Items Added' message
    const emptyCartRow = document.querySelector('.empty-cart');
    if (emptyCartRow) {
        emptyCartRow.remove();
    }
}

// Function to toggle mobile menu
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');                                                            
}
// book buton alart
 document.getElementById('booking-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const fullName = document.getElementById('full-name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;

        if (fullName && email && phone ) {
            alert(`Booking Confirmed for ${fullName}`);
        } else {
            alert('Please fill in all fields');
        }
    });
