// ===========================
// Main JavaScript Functionality
// ===========================

// Global variables
let cart = JSON.parse(localStorage.getItem('SoundBite_cart')) || [];
let currentAudio = null;
const DEFAULT_PREVIEW_SRC = 'assets/audio/previews/riser-wildfire-285209.mp3';

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeComponents();
    updateCartCount();
});

// Initialize all components
function initializeComponents() {
    initializeMobileMenu();
    initializeNavActive();
    initializeScrollEffects();
    initializeHeroWave();
    initializeAudioPreview();
    initializeCartSystem();
}

// Mobile menu functionality
function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', function() {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
            
            // Toggle hamburger animation
            const bars = hamburger.querySelectorAll('.bar');
            bars.forEach(bar => bar.classList.toggle('active'));
        });

        // Close menu when clicking on nav links
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                const bars = hamburger.querySelectorAll('.bar');
                bars.forEach(bar => bar.classList.remove('active'));
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(e) {
            if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
                const bars = hamburger.querySelectorAll('.bar');
                bars.forEach(bar => bar.classList.remove('active'));
            }
        });
    }
}

// Set active navigation based on current page
function initializeNavActive() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.php';
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage || (currentPage === '' && href === 'index.php')) {
            link.classList.add('active');
        }
    });
}

// Scroll effects
function initializeScrollEffects() {
    // Navbar background on scroll
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.style.background = 'rgba(15, 23, 42, 0.98)';
            } else {
                navbar.style.background = 'rgba(15, 23, 42, 0.95)';
            }
        });
    }

    // Fade in animation for elements
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements with fade-in class
    const fadeElements = document.querySelectorAll('.fade-in, .feature-card, .pack-card, .plan-card');
    fadeElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Hero cursor-reactive waveform overlay
function initializeHeroWave() {
    const hero = document.querySelector('.hero');
    if (!hero) return;

    // Create overlay element
    const wave = document.createElement('div');
    wave.className = 'hero-wave';
    wave.setAttribute('aria-hidden', 'true');
    wave.style.cssText = `
        position: absolute;
        inset: 0;
        pointer-events: none;
        z-index: 1;
        mix-blend-mode: screen;
        opacity: 0.35;
        transition: opacity 300ms ease-in-out;
        background-image:
            radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(0, 196, 204, 0.25), rgba(0,0,0,0) 40%),
            repeating-linear-gradient(90deg,
                rgba(0, 196, 204, 0.12) 0px,
                rgba(0, 196, 204, 0.12) 2px,
                rgba(0, 0, 0, 0) 2px,
                rgba(0, 0, 0, 0) 8px
            ),
            repeating-linear-gradient(0deg,
                rgba(0, 196, 204, 0.08) 0px,
                rgba(0, 196, 204, 0.08) 1px,
                rgba(0, 0, 0, 0) 1px,
                rgba(0, 0, 0, 0) 6px
            );
        background-size: auto, 100% 100%, 100% 100%;
        will-change: background-position, opacity;
    `;

    // Positioning context
    hero.style.position = hero.style.position || 'relative';
    hero.appendChild(wave);

    let raf = null;
    let pos = { x: 0.5, y: 0.5 };
    let hover = false;

    function update() {
        wave.style.setProperty('--mx', (pos.x * 100).toFixed(2) + '%');
        wave.style.setProperty('--my', (pos.y * 100).toFixed(2) + '%');
        // Subtle drift of lines for motion
        const t = Date.now() * 0.0003;
        wave.style.backgroundPosition = `0px ${Math.sin(t)*8}px, ${Math.cos(t)*12}px 0px`;
        raf = requestAnimationFrame(update);
    }

    function onMove(e) {
        const rect = hero.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        pos.x = Math.max(0, Math.min(1, x));
        pos.y = Math.max(0, Math.min(1, y));
    }

    function onEnter() { hover = true; wave.style.opacity = '0.45'; }
    function onLeave() { hover = false; wave.style.opacity = '0.25'; }

    hero.addEventListener('mousemove', onMove, { passive: true });
    hero.addEventListener('mouseenter', onEnter);
    hero.addEventListener('mouseleave', onLeave);

    // Start loop
    update();
}

// Audio preview functionality
function initializeAudioPreview() {
    const previewButtons = document.querySelectorAll('.play-preview');
    
    previewButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const audioSrc = this.getAttribute('data-audio');
            const icon = this.querySelector('i');
            
            if (currentAudio && !currentAudio.paused && currentAudio.src.includes(audioSrc)) {
                // Pause current audio
                currentAudio.pause();
                icon.className = 'fas fa-play';
                this.classList.remove('playing');
                deactivateAllRhythmVisuals();
            } else {
                // Stop any currently playing audio
                if (currentAudio) {
                    currentAudio.pause();
                    currentAudio.currentTime = 0;
                    // Reset all other buttons
                    document.querySelectorAll('.play-preview').forEach(btn => {
                        btn.querySelector('i').className = 'fas fa-play';
                        btn.classList.remove('playing');
                    });
                    deactivateAllRhythmVisuals();
                }
                
                // Play new audio
                playAudioPreview(audioSrc, icon, this);
            }
        });
    });
}

// Create and toggle rhythmic visualization on pack image
function activateRhythmVisual(button) {
    const packImage = button.closest('.pack-image');
    if (!packImage) return;
    let visual = packImage.querySelector('.rhythm-visual');
    if (!visual) {
        visual = document.createElement('div');
        visual.className = 'rhythm-visual';
        // Create 12 bars
        const bars = 12;
        for (let i = 0; i < bars; i++) {
            const bar = document.createElement('span');
            bar.className = 'bar';
            bar.style.animationDelay = `${i * 0.08}s`;
            packImage.appendChild(visual);
            visual.appendChild(bar);
        }
    }
    packImage.classList.add('previewing');
}

function deactivateAllRhythmVisuals() {
    document.querySelectorAll('.pack-image.previewing').forEach(img => {
        img.classList.remove('previewing');
    });
}

// Play audio preview
function playAudioPreview(src, icon, button) {
    // Create or reuse audio element
    if (!currentAudio) {
        currentAudio = document.getElementById('previewAudio') || document.createElement('audio');
        if (!document.getElementById('previewAudio')) {
            currentAudio.id = 'previewAudio';
            document.body.appendChild(currentAudio);
        }
    }
    
    currentAudio.src = DEFAULT_PREVIEW_SRC;
    currentAudio.volume = 0.7;
    
    const playPromise = currentAudio.play();
    
    if (playPromise !== undefined) {
        playPromise.then(() => {
            icon.className = 'fas fa-pause';
            button.classList.add('playing');
            activateRhythmVisual(button);
        }).catch(error => {
            console.log('Audio play failed:', error);
            // Fallback: show a message or handle the error gracefully
            showNotification('Audio preview not available', 'error');
        });
    }
    
    // Handle audio end
    currentAudio.addEventListener('ended', function() {
        icon.className = 'fas fa-play';
        button.classList.remove('playing');
        deactivateAllRhythmVisuals();
    });
    
    // Handle audio error
    currentAudio.addEventListener('error', function() {
        icon.className = 'fas fa-play';
        button.classList.remove('playing');
        deactivateAllRhythmVisuals();
        showNotification('Audio preview not available', 'error');
    });
}

// Cart system
function initializeCartSystem() {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const packId = this.getAttribute('data-pack-id');
            const packCard = this.closest('.pack-card');
            const packName = packCard.querySelector('h3').textContent;
            const packPrice = packCard.querySelector('.pack-price').textContent;
            const packImage = packCard.querySelector('img').src;
            const packCategory = packCard.querySelector('.pack-category').textContent;
            
            addToCart({
                id: packId,
                name: packName,
                price: packPrice,
                image: packImage,
                category: packCategory
            });
        });
    });
}

// Add item to cart
function addToCart(item) {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
        showNotification('Item already in cart', 'warning');
        return;
    }
    
    cart.push(item);
    localStorage.setItem('SoundBite_cart', JSON.stringify(cart));
    updateCartCount();
    showNotification(`${item.name} added to cart!`, 'success');
}

// Update cart count in navbar
function updateCartCount() {
    const cartCountElement = document.querySelector('.cart-count');
    if (cartCountElement) {
        cartCountElement.textContent = cart.length;
        
        if (cart.length > 0) {
            cartCountElement.style.display = 'flex';
        } else {
            cartCountElement.style.display = 'none';
        }
    }
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
    `;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${getNotificationColor(type)};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.2);
        z-index: 10000;
        transform: translateX(400px);
        transition: transform 0.3s ease;
        font-weight: 500;
        backdrop-filter: blur(10px);
    `;
    
    notification.querySelector('.notification-content').style.cssText = `
        display: flex;
        align-items: center;
        gap: 0.75rem;
    `;
    
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Auto remove
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    }, 3000);
    
    // Click to close
    notification.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.remove();
            }
        }, 300);
    });
}

function getNotificationIcon(type) {
    switch(type) {
        case 'success': return 'check-circle';
        case 'error': return 'exclamation-triangle';
        case 'warning': return 'exclamation-circle';
        default: return 'info-circle';
    }
}

function getNotificationColor(type) {
    switch(type) {
        case 'success': return 'var(--success-color)';
        case 'error': return 'var(--error-color)';
        case 'warning': return 'var(--warning-color)';
        default: return 'var(--primary-color)';
    }
}

// Smooth scroll for anchor links
document.addEventListener('click', function(e) {
    if (e.target.matches('a[href^="#"]')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
});

// Form validation helpers
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

function validatePhone(phone) {
    const re = /^[\+]?[1-9][\d]{0,15}$/;
    return re.test(phone.replace(/\s/g, ''));
}

// Debounce function for search
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Loading state helper
function setLoadingState(button, isLoading = true) {
    if (isLoading) {
        button.disabled = true;
        button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Loading...';
    } else {
        button.disabled = false;
        button.innerHTML = button.getAttribute('data-original-text') || 'Submit';
    }
}

// Export functions for use in other scripts
window.SoundBite = {
    addToCart,
    updateCartCount,
    showNotification,
    validateEmail,
    validatePassword,
    validatePhone,
    debounce,
    setLoadingState,
    playAudioPreview
};

