<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Browse Sound Packs</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/browse.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <?php include 'h_f/navbar.php'; ?>

    <header class="browse-header">
        <div class="header-overlay">
            <div class="container">
                <h1>Browse Sound Packs</h1>
                <p>Discover professional sound effects organized by category</p>
                
                <nav class="category-nav">
                    <a href="?category=all" class="category-btn active">All Categories</a>
                    <a href="?category=cinematic" class="category-btn">Cinematic</a>
                    <a href="?category=ambient" class="category-btn">Ambient</a>
                    <a href="?category=nature" class="category-btn">Nature</a>
                    <a href="?category=electronic" class="category-btn">Electronic</a>
                    <a href="?category=percussion" class="category-btn">Percussion</a>
                    <a href="?category=vocal" class="category-btn">Vocal</a>
                    <a href="?category=industrial" class="category-btn">Industrial</a>
                </nav>
            </div>
        </div>
    </header>

    <section class="search-section">
        <div class="container">
            <div class="search-filter-bar">
                <div class="search-box">
                    <input type="text" id="searchInput" placeholder="Search sound packs...">
                    <button type="button" class="search-btn">
                        <i class="fas fa-search"></i>
                    </button>
                </div>
                
                <div class="filter-controls">
                    <select id="priceFilter" class="filter-select">
                        <option value="">Price Range</option>
                        <option value="0-190">R0 - R190</option>
                        <option value="190-475">R190 - R475</option>
                        <option value="475-950">R475 - R950</option>
                        <option value="950+">R950+</option>
                    </select>
                    
                    <select id="sortBy" class="filter-select">
                        <option value="newest">Newest</option>
                        <option value="popular">Most Popular</option>
                        <option value="price-low">Price: Low to High</option>
                        <option value="price-high">Price: High to Low</option>
                    </select>
                </div>
            </div>
        </div>
    </section>

    <section class="sound-packs">
        <div class="container">
            <div class="browse-layout">
                <aside class="category-sidebar" aria-label="Categories filter">
                    <div class="sidebar-header">
                        <h3>Categories</h3>
                        <button class="sidebar-toggle" aria-expanded="true" aria-controls="sidebar-list"><i class="fas fa-chevron-up"></i></button>
                    </div>
                    <ul id="sidebar-list" class="sidebar-list">
                        <li><label class="checkbox-label"><input type="checkbox" value="cinematic"><span class="checkmark"></span><i class="fas fa-film"></i> Cinematic</label></li>
                        <li><label class="checkbox-label"><input type="checkbox" value="ambient"><span class="checkmark"></span><i class="fas fa-wind"></i> Ambient</label></li>
                        <li><label class="checkbox-label"><input type="checkbox" value="nature"><span class="checkmark"></span><i class="fas fa-leaf"></i> Nature</label></li>
                        <li><label class="checkbox-label"><input type="checkbox" value="electronic"><span class="checkmark"></span><i class="fas fa-microchip"></i> Electronic</label></li>
                        <li><label class="checkbox-label"><input type="checkbox" value="percussion"><span class="checkmark"></span><i class="fas fa-drum"></i> Percussion</label></li>
                        <li><label class="checkbox-label"><input type="checkbox" value="vocal"><span class="checkmark"></span><i class="fas fa-microphone"></i> Vocal</label></li>
                        <li><label class="checkbox-label"><input type="checkbox" value="industrial"><span class="checkmark"></span><i class="fas fa-industry"></i> Industrial</label></li>
                    </ul>
                </aside>
                <div class="browse-main">
                    <div class="packs-grid" id="packsGrid">

                <div class="pack-card" data-category="cinematic" data-price="29">
                    <div class="pack-image">
                        <img src="assets/images/bg.jpg" alt="Epic Cinematic Sounds">
                        <div class="pack-overlay">
                            <button class="play-preview" data-audio="assets/audio/previews/riser-wildfire-285209.mp3">
                                <i class="fas fa-play"></i>
                            </button>
                        </div>
                    </div>
                    <div class="pack-info">
                        <h3>Epic Cinematic Sounds</h3>
                        <p class="pack-category">Cinematic</p>
                        <p class="pack-description">8 powerful cinematic sound effects for dramatic scenes</p>
                        <div class="pack-footer">
                            <span class="pack-price">R569.99</span>
                            <button class="add-to-cart" data-pack-id="1">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div class="pack-card" data-category="ambient" data-price="19">
                    <div class="pack-image">
                        <img src="assets/images/bg.jpg" alt="Atmospheric Ambience">
                        <div class="pack-overlay">
                            <button class="play-preview" data-audio="assets/audio/previews/riser-wildfire-285209.mp3">
                                <i class="fas fa-play"></i>
                            </button>
                        </div>
                    </div>
                    <div class="pack-info">
                        <h3>Atmospheric Ambience</h3>
                        <p class="pack-category">Ambient</p>
                        <p class="pack-description">8 soothing ambient sounds for relaxation and focus</p>
                        <div class="pack-footer">
                            <span class="pack-price">R379.99</span>
                            <button class="add-to-cart" data-pack-id="2">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div class="pack-card" data-category="nature" data-price="24">
                    <div class="pack-image">
                        <img src="assets/images/bg.jpg" alt="Forest Sounds">
                        <div class="pack-overlay">
                            <button class="play-preview" data-audio="assets/audio/previews/riser-wildfire-285209.mp3">
                                <i class="fas fa-play"></i>
                            </button>
                        </div>
                    </div>
                    <div class="pack-info">
                        <h3>Forest Sounds</h3>
                        <p class="pack-category">Nature</p>
                        <p class="pack-description">8 authentic forest and wildlife sound effects</p>
                        <div class="pack-footer">
                            <span class="pack-price">R474.99</span>
                            <button class="add-to-cart" data-pack-id="3">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div class="pack-card" data-category="electronic" data-price="34">
                    <div class="pack-image">
                        <img src="assets/images/bg.jpg" alt="Synth Wave Pack">
                        <div class="pack-overlay">
                            <button class="play-preview" data-audio="assets/audio/previews/riser-wildfire-285209.mp3">
                                <i class="fas fa-play"></i>
                            </button>
                        </div>
                    </div>
                    <div class="pack-info">
                        <h3>Synth Wave Pack</h3>
                        <p class="pack-category">Electronic</p>
                        <p class="pack-description">8 retro electronic sounds with modern production</p>
                        <div class="pack-footer">
                            <span class="pack-price">R664.99</span>
                            <button class="add-to-cart" data-pack-id="4">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div class="pack-card" data-category="percussion" data-price="22">
                    <div class="pack-image">
                        <img src="assets/images/bg.jpg" alt="Tribal Percussion">
                        <div class="pack-overlay">
                            <button class="play-preview" data-audio="assets/audio/previews/riser-wildfire-285209.mp3">
                                <i class="fas fa-play"></i>
                            </button>
                        </div>
                    </div>
                    <div class="pack-info">
                        <h3>Tribal Percussion</h3>
                        <p class="pack-category">Percussion</p>
                        <p class="pack-description">8 powerful tribal drum patterns and percussion</p>
                        <div class="pack-footer">
                            <span class="pack-price">R436.99</span>
                            <button class="add-to-cart" data-pack-id="5">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div class="pack-card" data-category="vocal" data-price="27">
                    <div class="pack-image">
                        <img src="assets/images/bg.jpg" alt="Ethereal Vocals">
                        <div class="pack-overlay">
                            <button class="play-preview" data-audio="assets/audio/previews/riser-wildfire-285209.mp3">
                                <i class="fas fa-play"></i>
                            </button>
                        </div>
                    </div>
                    <div class="pack-info">
                        <h3>Ethereal Vocals</h3>
                        <p class="pack-category">Vocal</p>
                        <p class="pack-description">8 haunting vocal textures and harmonies</p>
                        <div class="pack-footer">
                            <span class="pack-price">R531.99</span>
                            <button class="add-to-cart" data-pack-id="6">Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    </section>

    <?php include 'h_f/footer.php'; ?>
    
    <audio id="previewAudio" preload="none"></audio>
    
    <script src="assets/js/main.js"></script>
    <script src="assets/js/browse.js"></script>
</body>
</html>
