// ===========================
// Browse Page JavaScript
// ===========================

document.addEventListener('DOMContentLoaded', function() {
    initializeBrowsePage();
});

function initializeBrowsePage() {
    initializeSearch();
    initializeFilters();
    initializeCategoryFilters();
    initializeSidebarFilters();
    initializeSidebarToggle();
    initializeSorting();
}

// Search functionality
function initializeSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');
    
    if (searchInput) {
        // Debounced search
        const debouncedSearch = window.SoundBite.debounce(performSearch, 300);
        
        searchInput.addEventListener('input', function() {
            debouncedSearch(this.value);
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                performSearch(this.value);
            }
        });
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', function() {
            performSearch(searchInput.value);
        });
    }
}

// Perform search
function performSearch(query) {
    const packCards = document.querySelectorAll('.pack-card');
    const normalizedQuery = query.toLowerCase().trim();
    
    packCards.forEach(card => {
        const title = card.querySelector('h3').textContent.toLowerCase();
        const description = card.querySelector('.pack-description').textContent.toLowerCase();
        const category = card.querySelector('.pack-category').textContent.toLowerCase();
        
        const isVisible = title.includes(normalizedQuery) || 
                         description.includes(normalizedQuery) || 
                         category.includes(normalizedQuery);
        
        if (isVisible) {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.3s ease';
        } else {
            card.style.display = 'none';
        }
    });
    
    // Update results count
    updateResultsCount();
}

// Initialize filters
function initializeFilters() {
    const priceFilter = document.getElementById('priceFilter');
    
    if (priceFilter) {
        priceFilter.addEventListener('change', function() {
            applyPriceFilter(this.value);
        });
    }
}

// Apply price filter
function applyPriceFilter(range) {
    const packCards = document.querySelectorAll('.pack-card');
    
    packCards.forEach(card => {
        if (range === '') {
            card.style.display = 'block';
            return;
        }
        
        const priceElement = card.querySelector('.pack-price');
        if (!priceElement) return;
        
        const priceText = priceElement.textContent;
        const price = parseFloat(priceText.replace(/[^0-9.]/g, ''));
        
        let shouldShow = false;
        
        switch(range) {
            case '0-190':
                shouldShow = price <= 190;
                break;
            case '190-475':
                shouldShow = price > 190 && price <= 475;
                break;
            case '475-950':
                shouldShow = price > 475 && price <= 950;
                break;
            case '950+':
                shouldShow = price > 950;
                break;
        }
        
        card.style.display = shouldShow ? 'block' : 'none';
    });
    
    updateResultsCount();
}

// Initialize category filters
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
            applyCategoryFilter(category);
        });
    });
    
    // Apply initial filter based on URL
    const urlParams = new URLSearchParams(window.location.search);
    const initialCategory = urlParams.get('category') || 'all';
    applyCategoryFilter(initialCategory);
}

// Apply category filter
function applyCategoryFilter(category) {
    const packCards = document.querySelectorAll('.pack-card');
    const activeSidebar = getActiveSidebarCategories();

    packCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        let matchTop = (category === 'all' || cardCategory === category);
        let matchSide = (activeSidebar.length === 0 || activeSidebar.includes(cardCategory));

        const shouldShow = matchTop && matchSide;
        card.style.display = shouldShow ? 'block' : 'none';
        if (shouldShow) card.style.animation = 'fadeIn 0.3s ease';
    });

    updateResultsCount();
}

// Initialize sorting
function initializeSorting() {
    const sortSelect = document.getElementById('sortBy');
    
    if (sortSelect) {
        sortSelect.addEventListener('change', function() {
            applySorting(this.value);
        });
    }
}

// Apply sorting
function applySorting(sortBy) {
    const packsGrid = document.getElementById('packsGrid');
    const packCards = Array.from(packsGrid.querySelectorAll('.pack-card'));
    
    packCards.sort((a, b) => {
        switch(sortBy) {
            case 'newest':
                // Assuming newer packs have higher data-pack-id
                const aId = parseInt(a.querySelector('[data-pack-id]').getAttribute('data-pack-id'));
                const bId = parseInt(b.querySelector('[data-pack-id]').getAttribute('data-pack-id'));
                return bId - aId;
                
            case 'popular':
                // Random for demo purposes - in real app, this would be based on actual popularity data
                return Math.random() - 0.5;
                
            case 'price-low':
                const aPriceLow = parseFloat(a.querySelector('.pack-price').textContent.replace(/[^0-9.]/g, ''));
                const bPriceLow = parseFloat(b.querySelector('.pack-price').textContent.replace(/[^0-9.]/g, ''));
                return aPriceLow - bPriceLow;
                
            case 'price-high':
                const aPriceHigh = parseFloat(a.querySelector('.pack-price').textContent.replace(/[^0-9.]/g, ''));
                const bPriceHigh = parseFloat(b.querySelector('.pack-price').textContent.replace(/[^0-9.]/g, ''));
                return bPriceHigh - aPriceHigh;
                
            default:
                return 0;
        }
    });
    
    // Reorder DOM elements
    packCards.forEach(card => {
        packsGrid.appendChild(card);
    });
    
    // Add animation
    packCards.forEach((card, index) => {
        card.style.animation = `fadeIn 0.3s ease ${index * 0.1}s both`;
    });
}

// Update results count
function updateResultsCount() {
    const visibleCards = document.querySelectorAll('.pack-card[style*="display: block"], .pack-card:not([style*="display: none"])');
    const totalCards = document.querySelectorAll('.pack-card');
    
    // Create or update results counter
    let resultsCounter = document.querySelector('.results-counter');
    if (!resultsCounter) {
        resultsCounter = document.createElement('div');
        resultsCounter.className = 'results-counter';
        resultsCounter.style.cssText = `
            text-align: center;
            margin: 2rem 0;
            color: var(--text-gray);
            font-size: 1rem;
        `;
        
        const container = document.querySelector('.sound-packs .container');
        if (container) {
            container.insertBefore(resultsCounter, container.querySelector('.packs-grid'));
        }
    }
    
    const visibleCount = visibleCards.length;
    const totalCount = totalCards.length;
    
    if (visibleCount === totalCount) {
        resultsCounter.textContent = `Showing ${totalCount} sound packs`;
    } else {
        resultsCounter.textContent = `Showing ${visibleCount} of ${totalCount} sound packs`;
    }
}

// Clear all filters
function initializeSidebarFilters() {
    const boxes = document.querySelectorAll('.category-sidebar input[type="checkbox"]');
    boxes.forEach(box => box.addEventListener('change', () => {
        const urlParams = new URLSearchParams(window.location.search);
        const top = urlParams.get('category') || 'all';
        applyCategoryFilter(top);
    }));
}

function initializeSidebarToggle() {
    const toggle = document.querySelector('.sidebar-toggle');
    const list = document.getElementById('sidebar-list');
    if (!toggle || !list) return;

    toggle.addEventListener('click', () => {
        const isOpen = toggle.getAttribute('aria-expanded') === 'true';
        toggle.setAttribute('aria-expanded', String(!isOpen));
        list.style.display = isOpen ? 'none' : 'grid';
        toggle.innerHTML = isOpen ? '<i class="fas fa-chevron-down"></i>' : '<i class="fas fa-chevron-up"></i>';
    });
}

function getActiveSidebarCategories() {
    return Array.from(document.querySelectorAll('.category-sidebar input[type="checkbox"]:checked')).map(i => i.value);
}

function clearAllFilters() {
    // Reset search
    const searchInput = document.getElementById('searchInput');
    if (searchInput) searchInput.value = '';
    
    // Reset filters
    const priceFilter = document.getElementById('priceFilter');
    if (priceFilter) priceFilter.value = '';
    
    const sortSelect = document.getElementById('sortBy');
    if (sortSelect) sortSelect.value = 'newest';
    
    // Reset category
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    const allCategoryBtn = document.querySelector('.category-btn[href*="category=all"]');
    if (allCategoryBtn) allCategoryBtn.classList.add('active');

    // Reset sidebar
    document.querySelectorAll('.category-sidebar input[type="checkbox"]').forEach(i => i.checked = false);
    
    // Show all cards
    const packCards = document.querySelectorAll('.pack-card');
    packCards.forEach(card => {
        card.style.display = 'block';
    });
    
    updateResultsCount();
}

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // Ctrl/Cmd + K to focus search
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('searchInput');
        if (searchInput) {
            searchInput.focus();
            searchInput.select();
        }
    }
    
    // Escape to clear search
    if (e.key === 'Escape') {
        const searchInput = document.getElementById('searchInput');
        if (searchInput && document.activeElement === searchInput) {
            searchInput.value = '';
            performSearch('');
            searchInput.blur();
        }
    }
});

// Add clear filters button
document.addEventListener('DOMContentLoaded', function() {
    const filterControls = document.querySelector('.filter-controls');
    if (filterControls) {
        const clearButton = document.createElement('button');
        clearButton.textContent = 'Clear Filters';
        clearButton.className = 'filter-select';
        clearButton.style.cssText = `
            background: var(--error-color);
            color: white;
            border: 1px solid var(--error-color);
            cursor: pointer;
            min-width: 120px;
        `;
        clearButton.addEventListener('click', clearAllFilters);
        filterControls.appendChild(clearButton);
    }
});

// Export functions
window.BrowsePage = {
    performSearch,
    applyPriceFilter,
    applyCategoryFilter,
    applySorting,
    clearAllFilters
};

