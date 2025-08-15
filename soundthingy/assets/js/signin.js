// ===========================
// Sign In/Up Page JavaScript
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    initializeAuthPage();
});

function initializeAuthPage() {
    initializeTabs();
    initializeForms();
    initializeSocialLogin();
    checkTrialParameter();
}

// Initialize tab switching
function initializeTabs() {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const formContainers = document.querySelectorAll('.auth-form-container');
    
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetTab = this.getAttribute('data-tab');
            
            // Update active tab
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Show corresponding form
            formContainers.forEach(container => {
                if (container.id === `${targetTab}-form`) {
                    container.classList.remove('hidden');
                    container.style.animation = 'fadeIn 0.3s ease';
                } else {
                    container.classList.add('hidden');
                }
            });
        });
    });
}

// Initialize form handling
function initializeForms() {
    const signInForm = document.getElementById('signinForm');
    const signUpForm = document.getElementById('signupForm');
    
    if (signInForm) {
        signInForm.addEventListener('submit', handleSignIn);
    }
    
    if (signUpForm) {
        signUpForm.addEventListener('submit', handleSignUp);
    }
    
    // Real-time validation
    initializeFormValidation();
}

// Handle sign in
function handleSignIn(e) {
    e.preventDefault();
    
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    const remember = form.remember.checked;
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Basic validation
    if (!window.SoundBite.validateEmail(email)) {
        window.SoundBite.showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    if (!password) {
        window.SoundBite.showNotification('Please enter your password', 'error');
        return;
    }
    
    // Show loading state
    const originalText = submitButton.textContent;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Signing In...';
    submitButton.disabled = true;
    
    // Simulate authentication
    setTimeout(() => {
        // Mock authentication - in real app, this would call your backend
        const userData = {
            email: email,
            name: 'User', // Would come from backend
            loginTime: new Date().toISOString(),
            remember: remember
        };
        
        // Store user data
        localStorage.setItem('SoundBite_user', JSON.stringify(userData));
        
        // Show success
        window.SoundBite.showNotification('Welcome back!', 'success');
        
        // Redirect
        setTimeout(() => {
            const urlParams = new URLSearchParams(window.location.search);
            const redirectTo = urlParams.get('redirect') || 'browse.php';
            window.location.href = redirectTo;
        }, 1500);
        
    }, 2000);
}

// Handle sign up
function handleSignUp(e) {
    e.preventDefault();
    
    const form = e.target;
    const firstName = form.firstname.value;
    const surname = form.surname.value;
    const email = form.email.value;
    const phone = form.phone.value;
    const password = form.password.value;
    const confirmPassword = form['confirm-password'].value;
    const termsAccepted = form.terms.checked;
    const newsletter = form.newsletter.checked;
    const submitButton = form.querySelector('button[type="submit"]');
    
    // Validation
    if (!firstName || !surname) {
        window.SoundBite.showNotification('Please enter your full name', 'error');
        return;
    }
    
    if (!window.SoundBite.validateEmail(email)) {
        window.SoundBite.showNotification('Please enter a valid email address', 'error');
        return;
    }
    
    if (phone && !window.SoundBite.validatePhone(phone)) {
        window.SoundBite.showNotification('Please enter a valid phone number', 'error');
        return;
    }
    
    if (!window.SoundBite.validatePassword(password)) {
        window.SoundBite.showNotification('Password must be at least 8 characters long', 'error');
        return;
    }
    
    if (password !== confirmPassword) {
        window.SoundBite.showNotification('Passwords do not match', 'error');
        return;
    }
    
    if (!termsAccepted) {
        window.SoundBite.showNotification('Please accept the Terms of Service and Privacy Policy', 'error');
        return;
    }
    
    // Show loading state
    const originalText = submitButton.textContent;
    submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Creating Account...';
    submitButton.disabled = true;
    
    // Simulate account creation
    setTimeout(() => {
        // Mock registration - in real app, this would call your backend
        const userData = {
            email: email,
            name: `${firstName} ${surname}`,
            firstName: firstName,
            surname: surname,
            phone: phone,
            newsletter: newsletter,
            registrationTime: new Date().toISOString()
        };
        
        // Store user data
        localStorage.setItem('SoundBite_user', JSON.stringify(userData));
        
        // Check for trial
        const urlParams = new URLSearchParams(window.location.search);
        const trial = urlParams.get('trial');
        
        if (trial) {
            // Start trial
            const trialData = {
                plan: trial,
                billing: 'monthly',
                startDate: new Date().toISOString(),
                endDate: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString()
            };
            localStorage.setItem('SoundBite_trial', JSON.stringify(trialData));
            window.SoundBite.showNotification(`Account created! Your ${trial} trial has started.`, 'success');
        } else {
            window.SoundBite.showNotification('Account created successfully! Welcome to SoundBite.', 'success');
        }
        
        // Redirect
        setTimeout(() => {
            const redirectTo = trial ? 'browse.php' : 'free-sounds.php';
            window.location.href = redirectTo;
        }, 2000);
        
    }, 2500);
}

// Initialize form validation
function initializeFormValidation() {
    const emailInputs = document.querySelectorAll('input[type="email"]');
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    
    // Email validation
    emailInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && !window.SoundBite.validateEmail(this.value)) {
                this.style.borderColor = 'var(--error-color)';
                showFieldError(this, 'Please enter a valid email address');
            } else {
                this.style.borderColor = '';
                hideFieldError(this);
            }
        });
    });
    
    // Password validation
    passwordInputs.forEach(input => {
        if (input.name === 'password') {
            input.addEventListener('input', function() {
                const isValid = window.SoundBite.validatePassword(this.value);
                
                if (this.value && !isValid) {
                    this.style.borderColor = 'var(--error-color)';
                    showFieldError(this, 'Password must be at least 8 characters long');
                } else {
                    this.style.borderColor = isValid ? 'var(--success-color)' : '';
                    hideFieldError(this);
                }
                
                // Check confirm password if it exists
                const confirmPassword = document.getElementById('signup-confirm-password');
                if (confirmPassword && confirmPassword.value) {
                    validatePasswordMatch(this, confirmPassword);
                }
            });
        }
        
        if (input.name === 'confirm-password') {
            input.addEventListener('input', function() {
                const passwordInput = document.getElementById('signup-password');
                validatePasswordMatch(passwordInput, this);
            });
        }
    });
    
    // Phone validation
    phoneInputs.forEach(input => {
        input.addEventListener('blur', function() {
            if (this.value && !window.SoundBite.validatePhone(this.value)) {
                this.style.borderColor = 'var(--error-color)';
                showFieldError(this, 'Please enter a valid phone number');
            } else {
                this.style.borderColor = '';
                hideFieldError(this);
            }
        });
    });
}

// Validate password match
function validatePasswordMatch(passwordInput, confirmInput) {
    if (passwordInput.value && confirmInput.value) {
        if (passwordInput.value === confirmInput.value) {
            confirmInput.style.borderColor = 'var(--success-color)';
            hideFieldError(confirmInput);
        } else {
            confirmInput.style.borderColor = 'var(--error-color)';
            showFieldError(confirmInput, 'Passwords do not match');
        }
    }
}

// Show field error
function showFieldError(field, message) {
    hideFieldError(field); // Remove existing error
    
    const error = document.createElement('div');
    error.className = 'field-error';
    error.textContent = message;
    error.style.cssText = `
        color: var(--error-color);
        font-size: 0.85rem;
        margin-top: 0.5rem;
        animation: fadeIn 0.3s ease;
    `;
    
    field.parentNode.appendChild(error);
}

// Hide field error
function hideFieldError(field) {
    const existingError = field.parentNode.querySelector('.field-error');
    if (existingError) {
        existingError.remove();
    }
}

// Initialize social login
function initializeSocialLogin() {
    const socialButtons = document.querySelectorAll('.social-btn');
    
    socialButtons.forEach(button => {
        button.addEventListener('click', function() {
            const provider = this.textContent.toLowerCase();
            handleSocialLogin(provider, this);
        });
    });
}

// Handle social login
function handleSocialLogin(provider, button) {
    const originalText = button.innerHTML;
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Connecting...';
    button.disabled = true;
    
    // Simulate social login
    setTimeout(() => {
        // Mock social authentication
        const userData = {
            email: 'user@example.com',
            name: 'Social User',
            provider: provider,
            loginTime: new Date().toISOString()
        };
        
        localStorage.setItem('SoundBite_user', JSON.stringify(userData));
        window.SoundBite.showNotification(`Successfully signed in with ${provider}!`, 'success');
        
        // Redirect
        setTimeout(() => {
            window.location.href = 'browse.php';
        }, 1500);
        
    }, 2000);
}

// Check for trial parameter
function checkTrialParameter() {
    const urlParams = new URLSearchParams(window.location.search);
    const trial = urlParams.get('trial');
    
    if (trial) {
        // Switch to sign up tab
        const signUpTab = document.querySelector('[data-tab="signup"]');
        const signInTab = document.querySelector('[data-tab="signin"]');
        
        if (signUpTab && signInTab) {
            signInTab.classList.remove('active');
            signUpTab.classList.add('active');
            
            document.getElementById('signin-form').classList.add('hidden');
            document.getElementById('signup-form').classList.remove('hidden');
        }
        
        // Show trial notification
        setTimeout(() => {
            window.SoundBite.showNotification(`Sign up now to start your ${trial} trial!`, 'info');
        }, 1000);
    }
}

// Password toggle functionality
function togglePassword(inputId) {
    const input = document.getElementById(inputId);
    const button = input.parentNode.querySelector('.password-toggle');
    const icon = button.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.className = 'fas fa-eye-slash';
    } else {
        input.type = 'password';
        icon.className = 'fas fa-eye';
    }
}

// Make togglePassword available globally
window.togglePassword = togglePassword;

// Check if user is already signed in
document.addEventListener('DOMContentLoaded', function() {
    const user = localStorage.getItem('SoundBite_user');
    if (user) {
        // User is already signed in, redirect
        const urlParams = new URLSearchParams(window.location.search);
        const redirect = urlParams.get('redirect') || 'browse.php';
        window.location.href = redirect;
    }
});

// Export functions
window.AuthPage = {
    handleSignIn,
    handleSignUp,
    handleSocialLogin,
    togglePassword,
    validatePasswordMatch
};

