<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Creator Dashboard</title>
    <link rel="stylesheet" href="assets/css/style.css" />
    <link rel="stylesheet" href="assets/css/browse.css" />
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
</head>
<body>
    <?php include 'h_f/navbar.php'; ?>

    <header class="browse-header" style="margin-top:72px;height:auto;padding:2rem 0;background:linear-gradient(180deg,var(--dark-bg) 0%, var(--dark-secondary) 100%);">
        <div class="header-overlay">
            <div class="container">
                <h1>Your Packs</h1>
                <p>Manage your uploaded sound packs</p>
                <div style="margin-top:1rem;">
                    <a href="creator-upload.php" class="cta-button btn-sm"><i class="fas fa-plus"></i> New Pack</a>
                    <a href="creators.php" class="cta-button secondary btn-sm">Creator Guide</a>
                </div>
            </div>
        </div>
    </header>

    <section class="sound-packs">
        <div class="container">
            <div id="dashboardSummary" style="margin-bottom:1.5rem;color:var(--text-gray);"></div>
            <div class="packs-grid" id="creatorPacks"></div>
        </div>
    </section>

    <?php include 'h_f/footer.php'; ?>

    <audio id="previewAudio" preload="none"></audio>
    <script src="assets/js/main.js"></script>
    <script>
    (function(){
      const grid = document.getElementById('creatorPacks');
      const summary = document.getElementById('dashboardSummary');
      const packs = JSON.parse(localStorage.getItem('SoundBite_creator_packs') || '[]');

      function render(){
        grid.innerHTML = '';
        summary.textContent = packs.length ? `You have ${packs.length} published pack${packs.length>1?'s':''}.` : 'You have no packs yet.';

        packs.forEach((p, idx) => {
          const card = document.createElement('div');
          card.className = 'pack-card';
          card.innerHTML = `
            <div class="pack-image">
              <img src="${p.thumb || 'assets/images/cinematic-pack.jpg'}" alt="${p.title}">
              <div class="pack-overlay">
                <button class="play-preview" data-audio="assets/audio/previews/riser-wildfire-285209.mp3">
                  <i class="fas fa-play"></i>
                </button>
              </div>
            </div>
            <div class="pack-info">
              <h3>${p.title}</h3>
              <p class="pack-category">${p.category}</p>
              <p class="pack-description">${(p.tags||[]).join(', ') || 'No tags'}</p>
              <div class="pack-footer">
                <span class="pack-price">$${Number(p.price).toFixed(2)}</span>
                <div style="display:flex;gap:0.5rem;">
                  <button class="add-to-cart" data-idx="${idx}">Preview</button>
                  <button class="download-free" data-delete="${idx}">Delete</button>
                </div>
              </div>
            </div>
          `;
          grid.appendChild(card);
        });

        wireActions();
      }

      function wireActions(){
        document.querySelectorAll('[data-delete]').forEach(btn => {
          btn.addEventListener('click', function(){
            const index = Number(this.getAttribute('data-delete'));
            packs.splice(index,1);
            localStorage.setItem('SoundBite_creator_packs', JSON.stringify(packs));
            window.SoundBite.showNotification('Pack deleted', 'success');
            render();
          });
        });
      }

      render();
    })();
    </script>
</body>
</html>
