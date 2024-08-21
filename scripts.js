document.addEventListener('DOMContentLoaded', function() {
    var slider = document.querySelector('.collections-slider');
    var prevBtn = document.querySelector('.carousel-control.prev');
    var nextBtn = document.querySelector('.carousel-control.next');
    
    var currentIndex = 0;
    var itemsToShow = 2; 
    var items = document.querySelectorAll('.collection-item');
    var totalItems = items.length;
    var itemWidth = items[0].offsetWidth + 20; 
    var maxIndex = Math.ceil(totalItems / itemsToShow) - 1;

    function updateSliderPosition() {
        var newTransform = -(currentIndex * itemsToShow * itemWidth);
        slider.style.transform = `translateX(${newTransform}px)`;
    }

    nextBtn.addEventListener('click', function() {
        if (currentIndex < maxIndex) {
            currentIndex++;
            updateSliderPosition();
        }
    });

    prevBtn.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });
});
let cart = [];

function addToCart(name, price) {
    const item = { name, price, quantity: 1 };
    cart.push(item);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; 
    let total = 0;

    cart.forEach(item => {
        const itemRow = document.createElement('div');
        itemRow.className = 'cart-item';
        itemRow.innerHTML = `
            <p>${item.name} - $${item.price} x ${item.quantity}</p>
        `;
        cartItems.appendChild(itemRow);
        total += item.price * item.quantity;
    });

    document.getElementById('cart-total').textContent = total;
}

document.getElementById('checkout-button').addEventListener('click', function() {
    alert('Proceeding to checkout...');
});

