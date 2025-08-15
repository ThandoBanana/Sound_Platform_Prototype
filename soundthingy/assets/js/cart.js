// ===========================
// Cart Page JavaScript
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    initializeCartPage();
});

function initializeCartPage() {
    loadCartItems();
    initializePromoCode();
    initializeCheckout();
}

// Load cart items from localStorage
function loadCartItems() {
    const cart = JSON.parse(localStorage.getItem('SoundBite_cart') || '[]');
    const emptyCart = document.getElementById('emptyCart');
    const cartContent = document.getElementById('cartContent');
    
    if (cart.length === 0) {
        emptyCart.style.display = 'block';
        cartContent.style.display = 'none';
    } else {
        emptyCart.style.display = 'none';
        cartContent.style.display = 'block';
        renderCartItems(cart);
        updateCartSummary(cart);
    }
}

// Render cart items
function renderCartItems(cart) {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartCountElement = document.querySelector('.cart-count');
    
    // Update cart count
    cartCountElement.textContent = `${cart.length} ${cart.length === 1 ? 'item' : 'items'} in your cart`;
    
    // Clear existing items
    cartItemsContainer.innerHTML = '';
    
    cart.forEach(item => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <div class="item-image">
                <img src="${item.image || 'assets/images/default-pack.jpg'}" alt="${item.name}">
            </div>
            <div class="item-details">
                <h4>${item.name}</h4>
                <p class="category">${item.category}</p>
            </div>
            <div class="item-price">${item.price}</div>
            <button class="remove-item" data-item-id="${item.id}">
                <i class="fas fa-trash"></i>
            </button>
        `;
        
        cartItemsContainer.appendChild(cartItem);
    });
    
    // Add event listeners for remove buttons
    const removeButtons = cartItemsContainer.querySelectorAll('.remove-item');
    removeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const itemId = this.getAttribute('data-item-id');
            removeFromCart(itemId);
        });
    });
}

// Remove item from cart
function removeFromCart(itemId) {
    let cart = JSON.parse(localStorage.getItem('SoundBite_cart') || '[]');
    const itemIndex = cart.findIndex(item => item.id === itemId);
    
    if (itemIndex > -1) {
        const removedItem = cart[itemIndex];
        cart.splice(itemIndex, 1);
        
        localStorage.setItem('SoundBite_cart', JSON.stringify(cart));
        window.SoundBite.updateCartCount();
        
        // Show notification
        window.SoundBite.showNotification(`${removedItem.name} removed from cart`, 'info');
        
        // Reload cart
        loadCartItems();
    }
}

// Update cart summary
function updateCartSummary(cart) {
    const subtotalElement = document.getElementById('subtotal');
    const taxElement = document.getElementById('tax');
    const totalElement = document.getElementById('total');
    
    let subtotal = 0;
    
    cart.forEach(item => {
        // Extract price from string (e.g., "R569.81" -> 569.81)
        const price = parseFloat(item.price.replace(/[^0-9.]/g, ''));
        subtotal += price;
    });
    
    const tax = subtotal * 0.08; // 8% tax
    const total = subtotal + tax;
    
    subtotalElement.textContent = `R${subtotal.toFixed(2)}`;
    taxElement.textContent = `R${tax.toFixed(2)}`;
    totalElement.textContent = `R${total.toFixed(2)}`;
    
    // Store totals for checkout
    window.cartTotals = {
        subtotal: subtotal,
        tax: tax,
        total: total
    };
}

// Initialize promo code functionality
function initializePromoCode() {
    const promoInput = document.getElementById('promoCode');
    const applyPromoButton = document.getElementById('applyPromo');
    
    if (applyPromoButton) {
        applyPromoButton.addEventListener('click', function() {
            const promoCode = promoInput.value.trim().toUpperCase();
            applyPromoCode(promoCode);
        });
    }
    
    if (promoInput) {
        promoInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                const promoCode = this.value.trim().toUpperCase();
                applyPromoCode(promoCode);
            }
        });
    }
}

// Apply promo code
function applyPromoCode(code) {
    const promoInput = document.getElementById('promoCode');
    const applyButton = document.getElementById('applyPromo');
    
    // Mock promo codes
    const promoCodes = {
        'WELCOME10': { discount: 0.10, description: '10% off your first order' },
        'SAVE20': { discount: 0.20, description: '20% off everything' },
        'STUDENT15': { discount: 0.15, description: '15% student discount' },
        'NEWUSER': { discount: 0.25, description: '25% off for new users' }
    };
    
    if (!code) {
        window.SoundBite.showNotification('Please enter a promo code', 'error');
        return;
    }
    
    // Show loading state
    const originalText = applyButton.textContent;
    applyButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i>';
    applyButton.disabled = true;
    
    setTimeout(() => {
        if (promoCodes[code]) {
            const promo = promoCodes[code];
            const currentDiscount = JSON.parse(localStorage.getItem('SoundBite_promo') || 'null');
            
            if (currentDiscount && currentDiscount.code === code) {
                window.SoundBite.showNotification('Promo code already applied', 'warning');
            } else {
                // Apply discount
                localStorage.setItem('SoundBite_promo', JSON.stringify({
                    code: code,
                    discount: promo.discount,
                    description: promo.description
                }));
                
                window.SoundBite.showNotification(`Promo code applied! ${promo.description}`, 'success');
                applyDiscountToCart(promo.discount);
                promoInput.value = '';
            }
        } else {
            window.SoundBite.showNotification('Invalid promo code', 'error');
        }
        
        applyButton.textContent = originalText;
        applyButton.disabled = false;
    }, 1500);
}

// Apply discount to cart
function applyDiscountToCart(discountPercent) {
    const subtotalElement = document.getElementById('subtotal');
    const totalElement = document.getElementById('total');
    
    if (!window.cartTotals) return;
    
    const discountAmount = window.cartTotals.subtotal * discountPercent;
    const newSubtotal = window.cartTotals.subtotal - discountAmount;
    const newTax = newSubtotal * 0.08;
    const newTotal = newSubtotal + newTax;
    
    // Update display
    subtotalElement.innerHTML = `
        <span style="text-decoration: line-through; color: var(--text-gray);">R${window.cartTotals.subtotal.toFixed(2)}</span>
        R${newSubtotal.toFixed(2)}
    `;
    
    totalElement.textContent = `R${newTotal.toFixed(2)}`;
    
    // Add discount row
    const summaryCard = document.querySelector('.summary-card');
    const existingDiscount = summaryCard.querySelector('.discount-row');
    
    if (!existingDiscount) {
        const discountRow = document.createElement('div');
        discountRow.className = 'summary-row discount-row';
        discountRow.style.color = 'var(--success-color)';
        discountRow.innerHTML = `
            <span>Discount (${Math.round(discountPercent * 100)}%)</span>
            <span>-R${discountAmount.toFixed(2)}</span>
        `;
        
        const totalRow = summaryCard.querySelector('.summary-row.total');
        summaryCard.insertBefore(discountRow, totalRow);
    }
    
    // Update stored totals
    window.cartTotals = {
        subtotal: newSubtotal,
        tax: newTax,
        total: newTotal,
        discount: discountAmount
    };
}

// Initialize checkout functionality
function initializeCheckout() {
    const checkoutButton = document.getElementById('checkoutBtn');
    
    if (checkoutButton) {
        checkoutButton.addEventListener('click', handleCheckout);
    }
}

// Handle checkout
function handleCheckout() {
    const cart = JSON.parse(localStorage.getItem('SoundBite_cart') || '[]');
    
    if (cart.length === 0) {
        window.SoundBite.showNotification('Your cart is empty', 'error');
        return;
    }
    
    // Check if user is signed in
    const user = localStorage.getItem('SoundBite_user');
    if (!user) {
        window.SoundBite.showNotification('Please sign in to continue with checkout', 'info');
        setTimeout(() => {
            window.location.href = 'signin.php?redirect=cart.php';
        }, 2000);
        return;
    }
    
    // Show checkout modal
    showCheckoutModal();
}

// Show checkout modal
function showCheckoutModal() {
    const modal = document.createElement('div');
    modal.className = 'checkout-modal';
    
    const totals = window.cartTotals || { subtotal: 0, tax: 0, total: 0 };
    
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Complete Your Purchase</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="checkout-summary">
                        <h4>Order Summary</h4>
                        <div class="summary-details">
                            <div class="summary-row">
                                <span>Subtotal</span>
                                <span>R${totals.subtotal.toFixed(2)}</span>
                            </div>
                            <div class="summary-row">
                                <span>Tax</span>
                                <span>R${totals.tax.toFixed(2)}</span>
                            </div>
                            ${totals.discount ? `
                                <div class="summary-row discount">
                                    <span>Discount</span>
                                    <span>-R${totals.discount.toFixed(2)}</span>
                                </div>
                            ` : ''}
                            <div class="summary-row total">
                                <span><strong>Total</strong></span>
                                <span><strong>R${totals.total.toFixed(2)}</strong></span>
                            </div>
                        </div>
                    </div>
                    
                    <form class="checkout-form">
                        <h4>Payment Information</h4>
                        <div class="form-group">
                            <label for="checkout-email">Email Address</label>
                            <input type="email" id="checkout-email" required>
                        </div>
                        <div class="form-group">
                            <label for="checkout-card">Card Number</label>
                            <input type="text" id="checkout-card" placeholder="1234 5678 9012 3456" required>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="checkout-expiry">Expiry</label>
                                <input type="text" id="checkout-expiry" placeholder="MM/YY" required>
                            </div>
                            <div class="form-group">
                                <label for="checkout-cvc">CVC</label>
                                <input type="text" id="checkout-cvc" placeholder="123" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="checkout-name">Cardholder Name</label>
                            <input type="text" id="checkout-name" required>
                        </div>
                        
                        <button type="submit" class="checkout-submit-btn">
                            Complete Purchase - R${totals.total.toFixed(2)}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    `;
    
    // Style modal
    styleCheckoutModal(modal);
    document.body.appendChild(modal);
    
    // Handle form submission
    const form = modal.querySelector('.checkout-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        processPayment(form, modal);
    });
    
    // Format card inputs
    formatCheckoutInputs(modal);
    
    // Close modal functionality
    setupCheckoutModalClose(modal);
}

// Style checkout modal
function styleCheckoutModal(modal) {
    modal.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
    `;
    
    const overlay = modal.querySelector('.modal-overlay');
    overlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(5px);
    `;
    
    const content = modal.querySelector('.modal-content');
    content.style.cssText = `
        background: var(--dark-secondary);
        border: 1px solid var(--border-dark);
        border-radius: var(--border-radius-xl);
        max-width: 500px;
        width: 90%;
        max-height: 90vh;
        overflow-y: auto;
        position: relative;
        z-index: 1;
        animation: fadeInUp 0.3s ease;
    `;
}

// Format checkout inputs
function formatCheckoutInputs(modal) {
    const cardNumber = modal.querySelector('#checkout-card');
    const expiry = modal.querySelector('#checkout-expiry');
    const cvc = modal.querySelector('#checkout-cvc');
    
    if (cardNumber) {
        cardNumber.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
            e.target.value = value.substring(0, 19);
        });
    }
    
    if (expiry) {
        expiry.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }
    
    if (cvc) {
        cvc.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, '').substring(0, 4);
        });
    }
}

// Setup checkout modal close
function setupCheckoutModalClose(modal) {
    function closeModal() {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            if (modal.parentNode) {
                modal.remove();
            }
        }, 300);
    }
    
    const closeButton = modal.querySelector('.modal-close');
    closeButton.addEventListener('click', closeModal);
    
    const overlay = modal.querySelector('.modal-overlay');
    overlay.addEventListener('click', closeModal);
    
    const content = modal.querySelector('.modal-content');
    content.addEventListener('click', e => e.stopPropagation());
}

// Process payment
function processPayment(form, modal) {
    const submitButton = form.querySelector('.checkout-submit-btn');
    const originalText = submitButton.textContent;
    
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    submitButton.disabled = true;
    
    // Simulate payment processing
    setTimeout(() => {
        // Clear cart
        localStorage.removeItem('SoundBite_cart');
        localStorage.removeItem('SoundBite_promo');
        
        // Update cart count
        window.SoundBite.updateCartCount();
        
        // Show success
        window.SoundBite.showNotification('Purchase successful! Your downloads are ready.', 'success');
        
        // Close modal
        modal.remove();
        
        // Redirect to success page or reload cart
        setTimeout(() => {
            loadCartItems(); // This will show the empty cart state
        }, 1000);
        
    }, 3000);
}

// Export functions
window.CartPage = {
    loadCartItems,
    removeFromCart,
    applyPromoCode,
    handleCheckout,
    processPayment
};

