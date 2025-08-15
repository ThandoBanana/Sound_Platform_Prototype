<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Upload Sound Pack</title>
    <link rel="stylesheet" href="assets/css/style.css" />
    <link rel="stylesheet" href="assets/css/signin.css" />
    <link rel="stylesheet" href="assets/css/browse.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
</head>
<body>
    <?php include 'h_f/navbar.php'; ?>

    <section class="auth-section" style="padding-top: 96px;">
        <div class="auth-container" style="grid-template-columns: 1.2fr 0.8fr; gap: 2rem;">

            <div class="auth-card">
                <div class="auth-tabs">
                    <button class="tab-btn active" disabled>Upload Sound Pack</button>
                    <button class="tab-btn" disabled style="opacity:.6; cursor:not-allowed;">Guidelines</button>
                </div>

                <div class="auth-form-container">
                    <div class="auth-header">
                        <h2>New Sound Pack</h2>
                        <p>Upload 8 sounds, add one preview, and tag your pack for discovery</p>
                    </div>

                    <form class="auth-form" id="uploadForm">
                        <div class="form-group">
                            <label for="pack-title">Pack Title</label>
                            <input id="pack-title" type="text" required />
                        </div>

                        <div class="form-row">
                            <div class="form-group">
                                <label for="pack-category">Category</label>
                                <select id="pack-category" style="width:100%;padding:1rem;background:var(--dark-bg);border:1px solid var(--border-dark);border-radius:var(--border-radius);color:var(--text-light);">
                                    <option>Cinematic</option>
                                    <option>Ambient</option>
                                    <option>Nature</option>
                                    <option>Electronic</option>
                                    <option>Percussion</option>
                                    <option>Vocal</option>
                                    <option>Industrial</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label for="pack-price">Price (ZAR)</label>
                                <input id="pack-price" type="number" min="0" step="0.01" value="19.99" required />
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="pack-tags">Tags (comma separated)</label>
                            <input id="pack-tags" type="text" placeholder="boom, hit, riser, whoosh" />
                        </div>

                        <div class="form-group">
                            <label for="pack-thumb">Thumbnail Image URL</label>
                            <input id="pack-thumb" type="url" placeholder="https://..." />
                        </div>

                        <div class="form-group">
                            <label>Sounds (8 files - URLs for demo)</label>
                            <div id="soundInputs" style="display:grid;grid-template-columns:1fr;gap:0.5rem;">
                                <input type="url" placeholder="Sound 1 URL" required />
                                <input type="url" placeholder="Sound 2 URL" required />
                                <input type="url" placeholder="Sound 3 URL" required />
                                <input type="url" placeholder="Sound 4 URL" required />
                                <input type="url" placeholder="Sound 5 URL" required />
                                <input type="url" placeholder="Sound 6 URL" required />
                                <input type="url" placeholder="Sound 7 URL" required />
                                <input type="url" placeholder="Sound 8 URL" required />
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="preview-url">Preview URL (one file)</label>
                            <input id="preview-url" type="url" placeholder="Preview audio URL" required />
                        </div>

                        <button type="submit" class="auth-btn primary btn-md" style="width:auto;min-width:220px;">
                            <i class="fas fa-upload"></i> Publish Pack
                        </button>
                    </form>
                </div>
            </div>

            <aside class="benefits-sidebar">
                <h3>Upload Tips</h3>
                <div class="benefit-item">
                    <i class="fas fa-wave-square"></i>
                    <div>
                        <h4>Quality</h4>
                        <p>Use high-quality audio (WAV/MP3). Keep levels consistent across sounds.</p>
                    </div>
                </div>
                <div class="benefit-item">
                    <i class="fas fa-tags"></i>
                    <div>
                        <h4>Tagging</h4>
                        <p>Use descriptive tags and the right category to improve discovery.</p>
                    </div>
                </div>
                <div class="benefit-item">
                    <i class="fas fa-music"></i>
                    <div>
                        <h4>Preview</h4>
                        <p>Choose a strong representative sample as the one pack preview.</p>
                    </div>
                </div>
            </aside>

        </div>
    </section>

    <?php include 'h_f/footer.php'; ?>

    <script src="assets/js/main.js"></script>
    <script>
    (function(){
      const form = document.getElementById('uploadForm');
      if(!form) return;

      form.addEventListener('submit', function(e){
        e.preventDefault();

        const title = document.getElementById('pack-title').value.trim();
        const category = document.getElementById('pack-category').value;
        const price = parseFloat(document.getElementById('pack-price').value) || 0;
        const tags = document.getElementById('pack-tags').value.split(',').map(t=>t.trim()).filter(Boolean);
        const thumb = document.getElementById('pack-thumb').value.trim();
        const preview = document.getElementById('preview-url').value.trim();
        const sounds = Array.from(document.querySelectorAll('#soundInputs input')).map(i=>i.value.trim()).filter(Boolean);

        if (!title) return window.SoundBite.showNotification('Please enter a pack title', 'error');
        if (sounds.length !== 8) return window.SoundBite.showNotification('Please provide exactly 8 sound URLs', 'error');
        if (!preview) return window.SoundBite.showNotification('Please provide a preview URL', 'error');

        const pack = {
          id: 'p' + Date.now(),
          title, category, price, tags, thumb, preview, sounds,
          createdAt: new Date().toISOString()
        };

        const existing = JSON.parse(localStorage.getItem('SoundBite_creator_packs') || '[]');
        existing.push(pack);
        localStorage.setItem('SoundBite_creator_packs', JSON.stringify(existing));

        window.SoundBite.showNotification('Pack published successfully!', 'success');
        setTimeout(()=>{ window.location.href = 'creator-dashboard.php'; }, 1200);
      });
    })();
    </script>
</body>
</html>
