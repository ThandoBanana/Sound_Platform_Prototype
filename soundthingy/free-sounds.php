<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Free Sound Packs</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/browse.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <?php include 'h_f/navbar.php'; ?>

    <header class="browse-header free-header">
        <div class="header-overlay">
            <div class="container">
                <h1>Free Sound Packs</h1>
                <p>High-quality sound effects at no cost - perfect for getting started</p>
                
                <nav class="category-nav">
                    <a href="?category=all" class="category-btn active">All Categories</a>
                    <a href="?category=ambient" class="category-btn">Ambient</a>
                    <a href="?category=nature" class="category-btn">Nature</a>
                    <a href="?category=percussion" class="category-btn">Percussion</a>
                    <a href="?category=electronic" class="category-btn">Electronic</a>
                    <a href="?category=vocal" class="category-btn">Vocal</a>
                </nav>
            </div>
        </div>
    </header>

    <section class="free-info">
        <div class="container">
            <div class="info-card">
                <i class="fas fa-gift"></i>
                <h3>100% Free</h3>
                <p>No strings attached - download and use in any project</p>
            </div>
            <div class="info-card">
                <i class="fas fa-user-plus"></i>
                <h3>Sign Up Required</h3>
                <p>Create a free account to access all our free sound packs</p>
            </div>
            <div class="info-card">
                <i class="fas fa-balance-scale"></i>
                <h3>Royalty-Free</h3>
                <p>Use in commercial projects without additional licensing fees</p>
            </div>
        </div>
    </section>

    <section class="sound-packs">
        <div class="container">
            <div class="packs-grid" id="packsGrid">
                <div class="pack-card free-pack" data-category="ambient">
                    <div class="pack-image">
                        <img src="assets/images/bg.jpg" alt="Free Ambient Starter">
                        <div class="free-badge">FREE</div>
                        <div class="pack-overlay">
                            <button class="play-preview" data-audio="assets/audio/previews/riser-wildfire-285209.mp3">
                                <i class="fas fa-play"></i>
                            </button>
                        </div>
                    </div>
                    <div class="pack-info">
                        <h3>Ambient Starter Pack</h3>
                        <p class="pack-category">Ambient</p>
                        <p class="pack-description">8 peaceful ambient sounds to set the mood</p>
                        <div class="pack-footer">
                            <span class="pack-price">FREE</span>
                            <button class="download-free" data-pack-id="free1">Download</button>
                        </div>
                    </div>
                </div>

                <div class="pack-card free-pack" data-category="nature">
                    <div class="pack-image">
                        <img src="assets/images/bg.jpg" alt="Free Nature Sounds">
                        <div class="free-badge">FREE</div>
                        <div class="pack-overlay">
                            <button class="play-preview" data-audio="assets/audio/previews/riser-wildfire-285209.mp3">
                                <i class="fas fa-play"></i>
                            </button>
                        </div>
                    </div>
                    <div class="pack-info">
                        <h3>Nature Sounds Pack</h3>
                        <p class="pack-category">Nature</p>
                        <p class="pack-description">8 organic nature sounds from various environments</p>
                        <div class="pack-footer">
                            <span class="pack-price">FREE</span>
                            <button class="download-free" data-pack-id="free2">Download</button>
                        </div>
                    </div>
                </div>

                <div class="pack-card free-pack" data-category="percussion">
                    <div class="pack-image">
                        <img src="assets/images/bg.jpg" alt="Free Percussion Kit">
                        <div class="free-badge">FREE</div>
                        <div class="pack-overlay">
                            <button class="play-preview" data-audio="assets/audio/previews/riser-wildfire-285209.mp3">
                                <i class="fas fa-play"></i>
                            </button>
                        </div>
                    </div>
                    <div class="pack-info">
                        <h3>Basic Percussion Kit</h3>
                        <p class="pack-category">Percussion</p>
                        <p class="pack-description">8 essential percussion elements for any track</p>
                        <div class="pack-footer">
                            <span class="pack-price">FREE</span>
                            <button class="download-free" data-pack-id="free3">Download</button>
                        </div>
                    </div>
                </div>

                <div class="pack-card free-pack" data-category="electronic">
                    <div class="pack-image">
                        <img src="assets/images/bg.jpg" alt="Free Electronic Pack">
                        <div class="free-badge">FREE</div>
                        <div class="pack-overlay">
                            <button class="play-preview" data-audio="assets/audio/previews/riser-wildfire-285209.mp3">
                                <i class="fas fa-play"></i>
                            </button>
                        </div>
                    </div>
                    <div class="pack-info">
                        <h3>Electronic Essentials</h3>
                        <p class="pack-category">Electronic</p>
                        <p class="pack-description">8 modern electronic sounds for digital music</p>
                        <div class="pack-footer">
                            <span class="pack-price">FREE</span>
                            <button class="download-free" data-pack-id="free4">Download</button>
                        </div>
                    </div>
                </div>

                <div class="pack-card free-pack" data-category="vocal">
                    <div class="pack-image">
                        <img src="assets/images/bg.jpg" alt="Free Vocal Textures">
                        <div class="free-badge">FREE</div>
                        <div class="pack-overlay">
                            <button class="play-preview" data-audio="assets/audio/previews/riser-wildfire-285209.mp3">
                                <i class="fas fa-play"></i>
                            </button>
                        </div>
                    </div>
                    <div class="pack-info">
                        <h3>Vocal Textures</h3>
                        <p class="pack-category">Vocal</p>
                        <p class="pack-description">8 ethereal vocal samples and textures</p>
                        <div class="pack-footer">
                            <span class="pack-price">FREE</span>
                            <button class="download-free" data-pack-id="free5">Download</button>
                        </div>
                    </div>
                </div>

                <div class="pack-card free-pack" data-category="ambient">
                    <div class="pack-image">
                        <img src="assets/images/bg.jpg" alt="Free Atmospheric Pack">
                        <div class="free-badge">FREE</div>
                        <div class="pack-overlay">
                            <button class="play-preview" data-audio="assets/audio/previews/riser-wildfire-285209.mp3">
                                <i class="fas fa-play"></i>
                            </button>
                        </div>
                    </div>
                    <div class="pack-info">
                        <h3>Atmospheric Pack</h3>
                        <p class="pack-category">Ambient</p>
                        <p class="pack-description">8 atmospheric sounds for creating mood</p>
                        <div class="pack-footer">
                            <span class="pack-price">FREE</span>
                            <button class="download-free" data-pack-id="free6">Download</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="signup-cta">
        <div class="container">
            <div class="cta-content">
                <h2>Ready to Download Free Sounds?</h2>
                <p>Create your free account to access all our free sound packs and start building your audio library.</p>
                <a href="signin.php" class="cta-button">Sign Up for Free</a>
            </div>
        </div>
    </section>

    <?php include 'h_f/footer.php'; ?>
    
    <audio id="previewAudio" preload="none"></audio>
    
    <script src="assets/js/main.js"></script>
    <script src="assets/js/browse.js"></script>
    <script src="assets/js/free-sounds.js"></script>
</body>
</html>
