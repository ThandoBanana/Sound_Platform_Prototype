<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Creators</title>
    <link rel="stylesheet" href="assets/css/style.css" />
    <link rel="stylesheet" href="assets/css/signin.css" />
    <link rel="stylesheet" href="assets/css/browse.css" />
    <link rel="stylesheet" href="assets/css/pricing.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
</head>
<body>
    <?php include 'h_f/navbar.php'; ?>

    <header class="pricing-header" style="margin-top:72px;">
        <div class="header-overlay">
            <div class="container">
                <h1>Become a Creator</h1>
                <p>Apply to share your sound packs with a global audience of professionals</p>
            </div>
        </div>
    </header>

    <section class="auth-section" style="padding: 3rem 0; background: linear-gradient(180deg, var(--dark-bg) 0%, var(--dark-secondary) 100%);">
        <div class="auth-container" style="grid-template-columns: 1.2fr 0.8fr; gap: 2rem;">

            <div class="auth-card">
                <div class="auth-tabs">
                    <button class="tab-btn active" disabled>Creator Application</button>
                    <button class="tab-btn" disabled style="opacity:.6; cursor:not-allowed;">Getting Approved</button>
                </div>
                <div class="auth-form-container">
                    <div class="auth-header">
                        <h2>Apply to Join</h2>
                        <p>Showcase your best work and tell us about your expertise</p>
                    </div>

                    <form class="auth-form" id="creatorApplyForm">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="creator-name">Full Name</label>
                                <input type="text" id="creator-name" name="name" required />
                            </div>
                            <div class="form-group">
                                <label for="creator-email">Email</label>
                                <input type="email" id="creator-email" name="email" required />
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="creator-portfolio">Portfolio URL</label>
                            <input type="url" id="creator-portfolio" name="portfolio" placeholder="https://your-website.com" />
                        </div>

                        <div class="form-group">
                            <label>Primary Categories</label>
                            <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:0.5rem;">
                                <label class="checkbox-label"><input type="checkbox" name="categories" value="Cinematic" /><span class="checkmark"></span>Cinematic</label>
                                <label class="checkbox-label"><input type="checkbox" name="categories" value="Ambient" /><span class="checkmark"></span>Ambient</label>
                                <label class="checkbox-label"><input type="checkbox" name="categories" value="Nature" /><span class="checkmark"></span>Nature</label>
                                <label class="checkbox-label"><input type="checkbox" name="categories" value="Electronic" /><span class="checkmark"></span>Electronic</label>
                                <label class="checkbox-label"><input type="checkbox" name="categories" value="Percussion" /><span class="checkmark"></span>Percussion</label>
                                <label class="checkbox-label"><input type="checkbox" name="categories" value="Vocal" /><span class="checkmark"></span>Vocal</label>
                                <label class="checkbox-label"><input type="checkbox" name="categories" value="Industrial" /><span class="checkmark"></span>Industrial</label>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="creator-bio">About You</label>
                            <textarea id="creator-bio" rows="4" placeholder="Tell us about your experience and the kind of sound packs you create..." style="width:100%;padding:1rem;background:var(--dark-bg);border:1px solid var(--border-dark);border-radius:var(--border-radius);color:var(--text-light);"></textarea>
                        </div>

                        <div class="form-options" style="margin-bottom:1rem;">
                            <label class="checkbox-label">
                                <input type="checkbox" id="agree-terms" required />
                                <span class="checkmark"></span>
                                I agree to the <a href="#">Creator Terms</a> and <a href="#">Content Guidelines</a>
                            </label>
                        </div>

                        <button type="submit" class="auth-btn primary btn-md" style="width:auto;min-width:220px;">
                            <i class="fas fa-paper-plane"></i> Submit Application
                        </button>
                    </form>

                    <div class="auth-divider"><span>What happens next?</span></div>
                    <p style="margin:0 0 1rem;color:var(--text-gray);">Our team reviews applications within 3â€“5 business days. Approved creators gain access to the upload tool and sales dashboard.</p>
                </div>
            </div>

            <aside class="benefits-sidebar">
                <h3>Creator Benefits</h3>
                <div class="benefit-item">
                    <i class="fas fa-dollar-sign"></i>
                    <div>
                        <h4>Revenue Share</h4>
                        <p>Earn on every sold pack with transparent analytics</p>
                    </div>
                </div>
                <div class="benefit-item">
                    <i class="fas fa-tags"></i>
                    <div>
                        <h4>Category Tagging</h4>
                        <p>Improve discovery with rich tagging and keywords</p>
                    </div>
                </div>
                <div class="benefit-item">
                    <i class="fas fa-bolt"></i>
                    <div>
                        <h4>Fast Publishing</h4>
                        <p>Upload 8-sound packs with preview in minutes</p>
                    </div>
                </div>
                <div class="benefit-item">
                    <i class="fas fa-headset"></i>
                    <div>
                        <h4>Premium Support</h4>
                        <p>Priority assistance for technical and content questions</p>
                    </div>
                </div>

                <div style="display:flex;flex-direction:column;gap:0.75rem;">
                    <a class="cta-button" href="creator-upload.php" aria-label="Upload a sound pack">
                        <i class="fas fa-upload"></i> Upload Sound Pack
                    </a>
                    <a class="cta-button secondary" href="creator-dashboard.php" aria-label="Go to creator dashboard">
                        <i class="fas fa-chart-line"></i> Creator Dashboard
                    </a>
                </div>
            </aside>

        </div>
    </section>

    <section class="features" style="padding-top:2rem;">
        <div class="container">
            <div class="features-grid">
                <div class="feature-card">
                    <div class="feature-icon"><i class="fas fa-folder-open"></i></div>
                    <h3>8-Sound Pack Format</h3>
                    <p>All packs contain 8 curated sounds. Provide one preview per pack to increase conversions.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon"><i class="fas fa-search"></i></div>
                    <h3>Optimized for Discovery</h3>
                    <p>Tag by category, type, and keywords to surface your packs in search and filters.</p>
                </div>
                <div class="feature-card">
                    <div class="feature-icon"><i class="fas fa-shield-alt"></i></div>
                    <h3>Simple Licensing</h3>
                    <p>Royalty-free license lets buyers use your sounds across projects without friction.</p>
                </div>
            </div>
        </div>
    </section>

    <?php include 'h_f/footer.php'; ?>

    <script src="assets/js/main.js"></script>
    <script>
      (function() {
        const form = document.getElementById('creatorApplyForm');
        if (!form) return;

        form.addEventListener('submit', function(e) {
          e.preventDefault();

          const name = document.getElementById('creator-name').value.trim();
          const email = document.getElementById('creator-email').value.trim();
          const portfolio = document.getElementById('creator-portfolio').value.trim();
          const bio = document.getElementById('creator-bio').value.trim();
          const agree = document.getElementById('agree-terms').checked;
          const categoryEls = form.querySelectorAll('input[name="categories"]:checked');
          const categories = Array.from(categoryEls).map(c => c.value);

          if (!name) return window.SoundBite.showNotification('Please enter your full name', 'error');
          if (!window.SoundBite.validateEmail(email)) return window.SoundBite.showNotification('Please enter a valid email address', 'error');
          if (!agree) return window.SoundBite.showNotification('Please accept the Creator Terms and Content Guidelines', 'error');

          const application = { name, email, portfolio, bio, categories, date: new Date().toISOString() };
          const existing = JSON.parse(localStorage.getItem('SoundBite_creator_applications') || '[]');
          existing.push(application);
          localStorage.setItem('SoundBite_creator_applications', JSON.stringify(existing));

          window.SoundBite.showNotification('Application submitted! We will review it within 3â€“5 business days.', 'success');
          form.reset();
        });
      })();
    </script>
</body>
</html>
