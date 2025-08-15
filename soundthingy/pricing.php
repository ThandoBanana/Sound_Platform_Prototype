<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Pricing Plans</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/pricing.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <?php include 'h_f/navbar.php'; ?>

    <header class="pricing-header">
        <div class="header-overlay">
            <div class="container">
                <h1>Choose Your Plan</h1>
                <p>Unlock unlimited access to premium sound effects with our flexible subscription plans</p>
            </div>
        </div>
    </header>

    <section class="pricing-plans">
        <div class="container">
            <div class="billing-toggle">
                <span class="billing-label">Monthly</span>
                <div class="toggle-switch">
                    <input type="checkbox" id="billing-toggle">
                    <label for="billing-toggle"></label>
                </div>
                <span class="billing-label">Annual <span class="discount">Save 20%</span></span>
            </div>

            <div class="plans-grid">
                <div class="plan-card">
                    <div class="plan-header">
                        <h3>Basic</h3>
                        <div class="plan-price">
                            <span class="currency">R</span>
                            <span class="amount monthly-price">189.99</span>
                            <span class="amount annual-price">151.99</span>
                            <span class="period">/month</span>
                        </div>
                        <p class="plan-description">Perfect for individual creators and small projects</p>
                    </div>
                    
                    <div class="plan-features">
                        <ul>
                            <li><i class="fas fa-check"></i>5 downloads per month</li>
                            <li><i class="fas fa-check"></i>Access to basic sound library</li>
                            <li><i class="fas fa-check"></i>Standard quality (44.1kHz/16-bit)</li>
                            <li><i class="fas fa-check"></i>Royalty-free license</li>
                            <li><i class="fas fa-check"></i>Email support</li>
                            <li><i class="fas fa-times"></i>Premium sound packs</li>
                            <li><i class="fas fa-times"></i>Exclusive content</li>
                            <li><i class="fas fa-times"></i>Priority support</li>
                        </ul>
                    </div>
                    
                    <div class="plan-footer">
                        <button class="plan-btn basic-btn">Get Started</button>
                    </div>
                </div>

                <div class="plan-card popular">
                    <div class="popular-badge">Most Popular</div>
                    <div class="plan-header">
                        <h3>Pro</h3>
                        <div class="plan-price">
                            <span class="currency">R</span>
                            <span class="amount monthly-price">379.99</span>
                            <span class="amount annual-price">303.99</span>
                            <span class="period">/month</span>
                        </div>
                        <p class="plan-description">Ideal for professional content creators and agencies</p>
                    </div>
                    
                    <div class="plan-features">
                        <ul>
                            <li><i class="fas fa-check"></i>25 downloads per month</li>
                            <li><i class="fas fa-check"></i>Access to full sound library</li>
                            <li><i class="fas fa-check"></i>Premium quality (96kHz/24-bit)</li>
                            <li><i class="fas fa-check"></i>Extended royalty-free license</li>
                            <li><i class="fas fa-check"></i>Premium sound packs</li>
                            <li><i class="fas fa-check"></i>Early access to new releases</li>
                            <li><i class="fas fa-check"></i>Priority email support</li>
                            <li><i class="fas fa-times"></i>Unlimited downloads</li>
                        </ul>
                    </div>
                    
                    <div class="plan-footer">
                        <button class="plan-btn pro-btn">Start Free Trial</button>
                    </div>
                </div>

                <div class="plan-card">
                    <div class="plan-header">
                        <h3>Enterprise</h3>
                        <div class="plan-price">
                            <span class="currency">R</span>
                            <span class="amount monthly-price">949.99</span>
                            <span class="amount annual-price">759.99</span>
                            <span class="period">/month</span>
                        </div>
                        <p class="plan-description">Complete solution for studios and large organizations</p>
                    </div>
                    
                    <div class="plan-features">
                        <ul>
                            <li><i class="fas fa-check"></i>Unlimited downloads</li>
                            <li><i class="fas fa-check"></i>Access to exclusive enterprise library</li>
                            <li><i class="fas fa-check"></i>Studio quality (192kHz/32-bit)</li>
                            <li><i class="fas fa-check"></i>Commercial broadcast license</li>
                            <li><i class="fas fa-check"></i>All premium sound packs</li>
                            <li><i class="fas fa-check"></i>Exclusive enterprise content</li>
                            <li><i class="fas fa-check"></i>24/7 phone & chat support</li>
                            <li><i class="fas fa-check"></i>Custom sound creation requests</li>
                        </ul>
                    </div>
                    
                    <div class="plan-footer">
                        <button class="plan-btn enterprise-btn">Contact Sales</button>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="features-comparison">
        <div class="container">
            <h2>Compare Plans</h2>
            <div class="comparison-table">
                <table>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>Basic</th>
                            <th>Pro</th>
                            <th>Enterprise</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Monthly Downloads</td>
                            <td>5</td>
                            <td>25</td>
                            <td>Unlimited</td>
                        </tr>
                        <tr>
                            <td>Audio Quality</td>
                            <td>Standard</td>
                            <td>Premium</td>
                            <td>Studio</td>
                        </tr>
                        <tr>
                            <td>Premium Packs</td>
                            <td><i class="fas fa-times"></i></td>
                            <td><i class="fas fa-check"></i></td>
                            <td><i class="fas fa-check"></i></td>
                        </tr>
                        <tr>
                            <td>Exclusive Content</td>
                            <td><i class="fas fa-times"></i></td>
                            <td>Early Access</td>
                            <td><i class="fas fa-check"></i></td>
                        </tr>
                        <tr>
                            <td>Support</td>
                            <td>Email</td>
                            <td>Priority Email</td>
                            <td>24/7 Phone & Chat</td>
                        </tr>
                        <tr>
                            <td>Commercial License</td>
                            <td>Standard</td>
                            <td>Extended</td>
                            <td>Broadcast</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </section>

    <section class="pricing-faq">
        <div class="container">
            <h2>Frequently Asked Questions</h2>
            <div class="faq-grid">
                <div class="faq-item">
                    <h3>Can I cancel my subscription anytime?</h3>
                    <p>Yes, you can cancel your subscription at any time. Your access will continue until the end of your current billing period.</p>
                </div>
                
                <div class="faq-item">
                    <h3>What's included in the royalty-free license?</h3>
                    <p>Our royalty-free license allows you to use the sounds in any commercial or personal project without paying additional fees. Enterprise plans include broadcast licensing.</p>
                </div>
                
                <div class="faq-item">
                    <h3>Can I upgrade or downgrade my plan?</h3>
                    <p>Absolutely! You can change your plan at any time. Upgrades take effect immediately, while downgrades occur at your next billing cycle.</p>
                </div>
                
                <div class="faq-item">
                    <h3>Is there a free trial available?</h3>
                    <p>Yes, we offer a 14-day free trial for the Pro plan. No credit card required to start your trial.</p>
                </div>
                
                <div class="faq-item">
                    <h3>What audio formats are available?</h3>
                    <p>All sounds are available in WAV and MP3 formats. Higher tier plans offer better quality options including 24-bit and 32-bit audio.</p>
                </div>
                
                <div class="faq-item">
                    <h3>Do unused downloads roll over?</h3>
                    <p>Downloads reset each month and don't roll over. However, any sounds you've downloaded remain accessible in your account forever.</p>
                </div>
            </div>
        </div>
    </section>

    <section class="pricing-cta">
        <div class="container">
            <div class="cta-content">
                <h2>Ready to Get Started?</h2>
                <p>Join thousands of creators who trust SoundBite for their audio needs.</p>
                <div class="cta-buttons">
                    <a href="signin.php" class="cta-button primary">Start Free Trial</a>
                    <a href="browse.php" class="cta-button secondary">Browse Library</a>
                </div>
            </div>
        </div>
    </section>

    <?php include 'h_f/footer.php'; ?>
    
    <script src="assets/js/main.js"></script>
    <script src="assets/js/pricing.js"></script>
</body>
</html>
