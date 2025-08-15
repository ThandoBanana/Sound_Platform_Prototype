// ===========================
// Free Sounds Page JavaScript
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    initializeFreeSoundsPage();
});

function initializeFreeSoundsPage() {
    initializeFreeDownloads();
    initializeCategoryFilters();
    checkUserAuthentication();
}

// Initialize free download functionality
function initializeFreeDownloads() {
    const downloadButtons = document.querySelectorAll('.download-free');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const packId = this.getAttribute('data-pack-id');
            const packCard = this.closest('.pack-card');
            const packName = packCard.querySelector('h3').textContent;
            
            handleFreeDownload(packId, packName, this);
        });
    });
}

// Handle free download
function handleFreeDownload(packId, packName, button) {
    // Check if user is signed in (mock check)
    const isSignedIn = localStorage.getItem('SoundBite_user') !== null;
    
    if (!isSignedIn) {
        // Show sign-in modal or redirect
        showSignInPrompt();
        return;
    }
    
    // Check if already downloaded
    const downloads = JSON.parse(localStorage.getItem('SoundBite_downloads') || '[]');
    if (downloads.includes(packId)) {
        window.SoundBite.showNotification('Already downloaded! Check your downloads.', 'info');
        return;
    }
    
    // Simulate download process
    startFreeDownload(packId, packName, button);
}

// Start free download process
function startFreeDownload(packId, packName, button) {
    const originalText = button.textContent;
    
    // Show loading state
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Preparing...';
    button.disabled = true;
    
    // Simulate download preparation
    setTimeout(() => {
        button.innerHTML = '<i class="fas fa-download fa-bounce"></i> Downloading...';
        
        setTimeout(() => {
            // Mark as downloaded
            const downloads = JSON.parse(localStorage.getItem('SoundBite_downloads') || '[]');
            downloads.push(packId);
            localStorage.setItem('SoundBite_downloads', JSON.stringify(downloads));
            
            // Reset button
            button.innerHTML = '<i class="fas fa-check"></i> Downloaded';
            button.style.background = 'var(--success-color)';
            
            // Show success notification
            window.SoundBite.showNotification(`${packName} downloaded successfully!`, 'success');
            
            // Optional: Trigger actual download
            triggerDownload(packName);
            
            setTimeout(() => {
                button.innerHTML = originalText;
                button.disabled = false;
                button.style.background = '';
            }, 3000);
        }, 2000);
    }, 1000);
}

// Trigger actual file download (mock)
function triggerDownload(packName) {
    // In a real implementation, this would download the actual files
    // For demo purposes, we'll create a mock zip file download
    
    const link = document.createElement('a');
    link.href = '#'; // Would be the actual file URL
    link.download = `${packName.replace(/\s+/g, '_')}_Free_Pack.zip`;
    link.style.display = 'none';
    
    document.body.appendChild(link);
    // link.click(); // Uncomment to actually trigger download
    document.body.removeChild(link);
}

// Show sign-in prompt
function showSignInPrompt() {
    const modal = document.createElement('div');
    modal.className = 'signin-modal';
    modal.innerHTML = `
        <div class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>Sign In Required</h3>
                    <button class="modal-close">&times;</button>
                </div>
                <div class="modal-body">
                    <p>You need to sign in to download free sound packs.</p>
                    <div class="modal-actions">
                        <a href="signin.php" class="cta-button primary">Sign In</a>
                        <button class="cta-button secondary modal-close">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Add styles
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
        max-width: 400px;
        width: 90%;
        position: relative;
        z-index: 1;
        animation: fadeInUp 0.3s ease;
    `;
    
    const header = modal.querySelector('.modal-header');
    header.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.5rem 2rem;
        border-bottom: 1px solid var(--border-dark);
    `;
    
    const body = modal.querySelector('.modal-body');
    body.style.cssText = `
        padding: 2rem;
        text-align: center;
    `;
    
    const actions = modal.querySelector('.modal-actions');
    actions.style.cssText = `
        display: flex;
        gap: 1rem;
        margin-top: 2rem;
        justify-content: center;
        flex-wrap: wrap;
    `;
    
    const closeBtn = modal.querySelector('.modal-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: var(--text-gray);
        font-size: 1.5rem;
        cursor: pointer;
        padding: 0.25rem;
        transition: var(--transition);
    `;
    
    document.body.appendChild(modal);
    
    // Close modal functionality
    function closeModal() {
        modal.style.animation = 'fadeOut 0.3s ease';
        setTimeout(() => {
            if (modal.parentNode) {
                modal.remove();
            }
        }, 300);
    }
    
    modal.querySelectorAll('.modal-close').forEach(btn => {
        btn.addEventListener('click', closeModal);
    });
    
    overlay.addEventListener('click', closeModal);
    
    // Prevent closing when clicking on modal content
    content.addEventListener('click', e => e.stopPropagation());
    
    // ESC key to close
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escHandler);
        }
    });
}

// Initialize category filters for free sounds
function initializeCategoryFilters() {
    const categoryButtons = document.querySelectorAll('.category-btn');
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Update active state
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Get selected category
            const category = new URL(this.href).searchParams.get('category') || 'all';
            filterFreePacksByCategory(category);
        });
    });
    
    // Apply initial filter based on URL
    const urlParams = new URLSearchParams(window.location.search);
    const initialCategory = urlParams.get('category') || 'all';
    filterFreePacksByCategory(initialCategory);
}

// Filter free packs by category
function filterFreePacksByCategory(category) {
    const packCards = document.querySelectorAll('.pack-card');
    
    packCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        
        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.3s ease';
        } else {
            card.style.display = 'none';
        }
    });
}

// Check user authentication status
function checkUserAuthentication() {
    const user = localStorage.getItem('SoundBite_user');
    const ctaSection = document.querySelector('.signup-cta');
    
    if (user && ctaSection) {
        // User is signed in, update CTA
        const ctaContent = ctaSection.querySelector('.cta-content');
        ctaContent.innerHTML = `
            <h2>Welcome Back!</h2>
            <p>You're all set to download free sounds. Explore our collection below.</p>
        `;
    }
}

// Track download analytics (mock)
function trackDownload(packId, packName) {
    // In a real app, this would send analytics data to your backend
    console.log(`Download tracked: ${packName} (ID: ${packId})`);
    
    // Update local stats
    const stats = JSON.parse(localStorage.getItem('SoundBite_stats') || '{}');
    stats.totalDownloads = (stats.totalDownloads || 0) + 1;
    stats.lastDownload = {
        packId,
        packName,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('SoundBite_stats', JSON.stringify(stats));
}

// Get user's download history
function getDownloadHistory() {
    return JSON.parse(localStorage.getItem('SoundBite_downloads') || '[]');
}

// Check if pack is already downloaded
function isPackDownloaded(packId) {
    const downloads = getDownloadHistory();
    return downloads.includes(packId);
}

// Mark downloaded packs on page load
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const downloadButtons = document.querySelectorAll('.download-free');
        downloadButtons.forEach(button => {
            const packId = button.getAttribute('data-pack-id');
            if (isPackDownloaded(packId)) {
                button.innerHTML = '<i class="fas fa-check"></i> Downloaded';
                button.style.background = 'var(--success-color)';
                button.disabled = true;
            }
        });
    }, 500);
});

// Export functions
window.FreeSounds = {
    handleFreeDownload,
    startFreeDownload,
    showSignInPrompt,
    filterFreePacksByCategory,
    getDownloadHistory,
    isPackDownloaded,
    trackDownload
};

