// ===========================
// Pricing Page JavaScript
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    initializePricingPage();
});

function initializePricingPage() {
    initializeBillingToggle();
    initializePlanButtons();
    initializeComparisonTable();
}

// Initialize billing toggle functionality
function initializeBillingToggle() {
    const billingToggle = document.getElementById('billing-toggle');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const annualPrices = document.querySelectorAll('.annual-price');
    const billingContainer = document.querySelector('.billing-toggle');
    
    if (billingToggle) {
        billingToggle.addEventListener('change', function() {
            const isAnnual = this.checked;
            
            // Toggle price display
            monthlyPrices.forEach(price => {
                price.style.display = isAnnual ? 'none' : 'inline';
            });
            
            annualPrices.forEach(price => {
                price.style.display = isAnnual ? 'inline' : 'none';
            });
            
            // Update billing toggle class
            if (isAnnual) {
                billingContainer.classList.add('annual');
            } else {
                billingContainer.classList.remove('annual');
            }
            
            // Add animation to plan cards
            const planCards = document.querySelectorAll('.plan-card');
            planCards.forEach((card, index) => {
                card.style.animation = `fadeIn 0.3s ease ${index * 0.1}s both`;
            });
            
            // Show savings notification
            if (isAnnual) {
                window.SoundBite.showNotification('Great choice! You\'ll save 20% with annual billing.', 'success');
            }
        });
    }
}

// Initialize plan buttons
function initializePlanButtons() {
    const planButtons = document.querySelectorAll('.plan-btn');
    
    planButtons.forEach(button => {
        button.addEventListener('click', function() {
            const planCard = this.closest('.plan-card');
            const planName = planCard.querySelector('h3').textContent;
            const isAnnual = document.getElementById('billing-toggle').checked;
            const billing = isAnnual ? 'annual' : 'monthly';
            
            handlePlanSelection(planName, billing, this);
        });
    });
}

// Handle plan selection
function handlePlanSelection(planName, billing, button) {
    const originalText = button.textContent;
    
    // Different actions based on plan type
    if (planName.toLowerCase() === 'enterprise') {
        // Contact sales for enterprise
        handleEnterpriseContact(button);
    } else if (planName.toLowerCase() === 'pro' && originalText.includes('Free Trial')) {
        // Start free trial
        handleFreeTrial(planName, billing, button);
    } else {
        // Regular subscription
        handleSubscription(planName, billing, button);
    }
}

// Handle enterprise contact
function handleEnterpriseContact(button) {
    const originalText = button.textContent;
    
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Connecting...';
    button.disabled = true;
    
    // Simulate contact process
    setTimeout(() => {
        // Show contact modal
        showContactModal();
        
        button.textContent = originalText;
        button.disabled = false;
    }, 1500);
}

// Handle free trial
function handleFreeTrial(planName, billing, button) {
    const originalText = button.textContent;
    
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Starting Trial...';
    button.disabled = true;
    
    // Simulate trial setup
    setTimeout(() => {
        // Check if user is signed in
        const isSignedIn = localStorage.getItem('SoundBite_user') !== null;
        
        if (!isSignedIn) {
            // Redirect to sign up with trial parameter
            window.location.href = 'signin.php?trial=pro';
        } else {
            // Start trial
            startFreeTrial(planName, billing);
            button.innerHTML = '<i class="fas fa-check"></i> Trial Started!';
            button.style.background = 'var(--success-color)';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.disabled = false;
                button.style.background = '';
            }, 3000);
        }
    }, 2000);
}

// Handle subscription
function handleSubscription(planName, billing, button) {
    const originalText = button.textContent;
    
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    button.disabled = true;
    
    // Simulate subscription process
    setTimeout(() => {
        // In a real app, this would integrate with payment processor
        showPaymentModal(planName, billing);
        
        button.textContent = originalText;
        button.disabled = false;
    }, 1500);
}

// Start free trial
function startFreeTrial(planName, billing) {
    const trialData = {
        plan: planName.toLowerCase(),
        billing: billing,
        startDate: new Date().toISOString(),
        endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString() // 14 days from now
    };
    
    localStorage.setItem('SoundBite_trial', JSON.stringify(trialData));
    window.SoundBite.showNotification(`${planName} trial started! 14 days of premium access.`, 'success');
    
    // Redirect to dashboard or browse page
    setTimeout(() => {
        window.location.href = 'browse.php';
    }, 2000);
}

// Show contact modal for enterprise
function showContactModal() {
    const modal = document.createElement('div');
    modal.className = 'contact-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Contact Enterprise Sales</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <form class="contact-form">
                        <div class="form-group">
                            <label for="company-name">Company Name</label>
                            <input type="text" id="company-name" required>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="contact-name">Your Name</label>
                                <input type="text" id="contact-name" required>
                            </div>
                            <div class="form-group">
                                <label for="contact-email">Email</label>
                                <input type="email" id="contact-email" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="contact-phone">Phone Number</label>
                            <input type="tel" id="contact-phone">
                        </div>
                        <div class="form-group">
                            <label for="team-size">Team Size</label>
                            <select id="team-size">
                                <option value="1-10">1-10 people</option>
                                <option value="11-50">11-50 people</option>
                                <option value="51-200">51-200 people</option>
                                <option value="200+">200+ people</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="message">Tell us about your needs</label>
                            <textarea id="message" rows="4" placeholder="Describe your audio requirements and use cases..."></textarea>
                        </div>
                        <button type="submit" class="cta-button primary">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    `;
    
    // Style the modal
    styleModal(modal);
    document.body.appendChild(modal);
    
    // Handle form submission
    const form = modal.querySelector('.contact-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handleContactSubmission(form, modal);
    });
    
    // Close modal functionality
    setupModalClose(modal);
}

// Show payment modal
function showPaymentModal(planName, billing) {
    const modal = document.createElement('div');
    modal.className = 'payment-modal';
    
    const isAnnual = billing === 'annual';
    const prices = {
        basic: isAnnual ? 7.99 : 9.99,
        pro: isAnnual ? 15.99 : 19.99
    };
    const price = prices[planName.toLowerCase()];
    
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Subscribe to ${planName} Plan</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <div class="subscription-summary">
                        <h4>${planName} Plan - ${billing === 'annual' ? 'Annual' : 'Monthly'}</h4>
                        <div class="price-display">
                            <span class="price">$${price}</span>
                            <span class="period">/${billing === 'annual' ? 'month (billed annually)' : 'month'}</span>
                        </div>
                        ${billing === 'annual' ? '<div class="savings">Save 20% with annual billing!</div>' : ''}
                    </div>
                    
                    <form class="payment-form">
                        <h5>Payment Information</h5>
                        <div class="form-group">
                            <label for="card-email">Email Address</label>
                            <input type="email" id="card-email" required>
                        </div>
                        <div class="form-group">
                            <label for="card-number">Card Number</label>
                            <input type="text" id="card-number" placeholder="1234 5678 9012 3456" required>
                        </div>
                        <div class="form-row">
                            <div class="form-group">
                                <label for="card-expiry">Expiry Date</label>
                                <input type="text" id="card-expiry" placeholder="MM/YY" required>
                            </div>
                            <div class="form-group">
                                <label for="card-cvc">CVC</label>
                                <input type="text" id="card-cvc" placeholder="123" required>
                            </div>
                        </div>
                        <div class="form-group">
                            <label for="cardholder-name">Cardholder Name</label>
                            <input type="text" id="cardholder-name" required>
                        </div>
                        
                        <div class="payment-methods">
                            <div class="method-icons">
                                <i class="fab fa-cc-visa"></i>
                                <i class="fab fa-cc-mastercard"></i>
                                <i class="fab fa-cc-amex"></i>
                                <i class="fab fa-cc-paypal"></i>
                            </div>
                        </div>
                        
                        <button type="submit" class="cta-button primary">
                            Subscribe Now - $${price}/${billing === 'annual' ? 'month' : 'month'}
                        </button>
                    </form>
                    
                    <div class="payment-security">
                        <p><i class="fas fa-lock"></i> Your payment information is secure and encrypted.</p>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Style the modal
    styleModal(modal);
    document.body.appendChild(modal);
    
    // Handle form submission
    const form = modal.querySelector('.payment-form');
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        handlePaymentSubmission(form, modal, planName, billing);
    });
    
    // Format card inputs
    formatCardInputs(modal);
    
    // Close modal functionality
    setupModalClose(modal);
}

// Style modal
function styleModal(modal) {
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
    
    const header = modal.querySelector('.modal-header');
    if (header) {
        header.style.cssText = `
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1.5rem 2rem;
            border-bottom: 1px solid var(--border-dark);
        `;
    }
    
    const body = modal.querySelector('.modal-body');
    if (body) {
        body.style.cssText = `
            padding: 2rem;
        `;
    }
}

// Setup modal close functionality
function setupModalClose(modal) {
    function closeModal() {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            if (modal.parentNode) {
                modal.remove();
            }
        }, 300);
    }
    
    const closeButtons = modal.querySelectorAll('.modal-close');
    closeButtons.forEach(btn => {
        btn.addEventListener('click', closeModal);
    });
    
    const overlay = modal.querySelector('.modal-overlay');
    overlay.addEventListener('click', closeModal);
    
    const content = modal.querySelector('.modal-content');
    content.addEventListener('click', e => e.stopPropagation());
    
    // ESC key to close
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escHandler);
        }
    });
}

// Handle contact form submission
function handleContactSubmission(form, modal) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    submitButton.disabled = true;
    
    // Simulate form submission
    setTimeout(() => {
        window.SoundBite.showNotification('Message sent! Our sales team will contact you within 24 hours.', 'success');
        modal.remove();
    }, 2000);
}

// Handle payment form submission
function handlePaymentSubmission(form, modal, planName, billing) {
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Processing...';
    submitButton.disabled = true;
    
    // Simulate payment processing
    setTimeout(() => {
        // Save subscription data
        const subscriptionData = {
            plan: planName.toLowerCase(),
            billing: billing,
            startDate: new Date().toISOString(),
            status: 'active'
        };
        
        localStorage.setItem('SoundBite_subscription', JSON.stringify(subscriptionData));
        window.SoundBite.showNotification('Subscription activated! Welcome to SoundBite Premium.', 'success');
        
        modal.remove();
        
        // Redirect to browse page
        setTimeout(() => {
            window.location.href = 'browse.php';
        }, 2000);
    }, 3000);
}

// Format card inputs
function formatCardInputs(modal) {
    const cardNumber = modal.querySelector('#card-number');
    const cardExpiry = modal.querySelector('#card-expiry');
    const cardCvc = modal.querySelector('#card-cvc');
    
    if (cardNumber) {
        cardNumber.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
            e.target.value = value.substring(0, 19);
        });
    }
    
    if (cardExpiry) {
        cardExpiry.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            e.target.value = value;
        });
    }
    
    if (cardCvc) {
        cardCvc.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, '').substring(0, 4);
        });
    }
}

// Initialize comparison table interactions
function initializeComparisonTable() {
    const table = document.querySelector('.comparison-table table');
    if (!table) return;
    
    // Add hover effects to table rows
    const rows = table.querySelectorAll('tbody tr');
    rows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.backgroundColor = 'rgba(99, 102, 241, 0.1)';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '';
        });
    });
}

// Export functions
window.PricingPage = {
    handlePlanSelection,
    handleEnterpriseContact,
    handleFreeTrial,
    handleSubscription,
    showContactModal,
    showPaymentModal
};

