<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SoundBite</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/home.css">
    <link rel="stylesheet" href="assets/css/browse.css">
    <link rel="stylesheet" href="assets/css/pricing.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <?php include 'h_f/navbar.php'; ?>

    <section class="hero">
        <div class="hero-overlay">
            <div class="hero-content">
                <h1>SoundBite</h1>
                <p class="hero-subtitle">Premium Sound Effects & Audio Library</p>
                <p class="hero-description">Discover thousands of high-quality sound effects, music tracks, and audio samples for your creative projects.</p>
                <a href="browse.php" class="cta-button">Start Browsing</a>
            </div>
        </div>
    </section>

    <section class="sound-packs">
        <div class="container">
            <h2 class="mb-4">Featured Sound Packs</h2>
            <div class="packs-grid">

                <div class="pack-card" data-category="cinematic">
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
                            <a href="browse.php" class="cta-button btn-sm">View Pack</a>
                        </div>
                    </div>
                </div>

                <div class="pack-card" data-category="ambient">
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
                            <a href="browse.php" class="cta-button btn-sm">View Pack</a>
                        </div>
                    </div>
                </div>
                <div class="pack-card" data-category="nature">
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
                            <a href="browse.php" class="cta-button btn-sm">View Pack</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="cta-section">
                <a href="browse.php" class="cta-button secondary">Explore Full Library</a>
            </div>
        </div>
    </section>

    <section class="pricing-plans" style="padding-top: 0;">
        <div class="container">
            <h2 class="mb-4">Choose Your Access</h2>
            <div class="plans-grid">
                <div class="plan-card">
                    <div class="plan-header">
                        <h3>Basic</h3>
                        <div class="plan-price">
                            <span class="currency">R</span>
                            <span class="amount">189.99</span>
                            <span class="period">/month</span>
                        </div>
                        <p class="plan-description">For individual creators getting started</p>
                    </div>
                    <div class="plan-footer">
                        <a href="pricing.php" class="cta-button btn-sm">Get Started</a>
                    </div>
                </div>
                <div class="plan-card popular">
                    <div class="popular-badge">Most Popular</div>
                    <div class="plan-header">
                        <h3>Pro</h3>
                        <div class="plan-price">
                            <span class="currency">R</span>
                            <span class="amount">379.99</span>
                            <span class="period">/month</span>
                        </div>
                        <p class="plan-description">For professionals needing premium content</p>
                    </div>
                    <div class="plan-footer">
                        <a href="pricing.php" class="cta-button btn-sm">Start Free Trial</a>
                    </div>
                </div>
                <div class="plan-card">
                    <div class="plan-header">
                        <h3>Enterprise</h3>
                        <div class="plan-price">
                            <span class="currency">R</span>
                            <span class="amount">949.99</span>
                            <span class="period">/month</span>
                        </div>
                        <p class="plan-description">For studios and large teams at scale</p>
                    </div>
                    <div class="plan-footer">
                        <a href="pricing.php" class="cta-button btn-sm">Contact Sales</a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="features">
        <div class="container">
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-music"></i>
                    </div>
                    <h3>Premium Quality</h3>
                    <p>All our sound effects are professionally recorded and mastered in high-definition quality. Each pack contains 8 carefully curated sounds that will elevate your projects to the next level.</p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-search"></i>
                    </div>
                    <h3>Easy Discovery</h3>
                    <p>Find exactly what you need with our advanced search and filtering system. Browse by category, mood, instrument, or use our smart search to discover new sounds that match your creative vision.</p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-download"></i>
                    </div>
                    <h3>Instant Downloads</h3>
                    <p>Get immediate access to your purchased sound packs with instant downloads. All files come in multiple formats (WAV, MP3) and are ready to use in your favorite audio software.</p>
                </div>

                <div class="feature-card">
                    <div class="feature-icon">
                        <i class="fas fa-shield-alt"></i>
                    </div>
                    <h3>Royalty-Free License</h3>
                    <p>Use our sounds worry-free in any commercial or personal project. Our simple licensing means you can create, publish, and monetize your work without any additional fees or restrictions.</p>
                </div>
            </div>

            <div class="cta-section">
                <a href="browse.php" class="cta-button secondary">Explore Sound Library</a>
            </div>
        </div>
    </section>

    <?php include 'h_f/footer.php'; ?>
    <script src="assets/js/main.js"></script>
</body>
</html>
