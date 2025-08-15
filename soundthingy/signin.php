<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign In</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/signin.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <?php include 'h_f/navbar.php'; ?>

    <section class="auth-section">
        <div class="auth-container">
            <div class="auth-card">
                <div class="auth-tabs">
                    <button class="tab-btn active" data-tab="signin">Sign In</button>
                    <button class="tab-btn" data-tab="signup">Sign Up</button>
                </div>

                <div class="auth-form-container" id="signin-form">
                    <div class="auth-header">
                        <h2>Welcome Back</h2>
                        <p>Sign in to your SoundBite account</p>
                    </div>

                    <form class="auth-form" id="signinForm">
                        <div class="form-group">
                            <label for="signin-email">Email Address</label>
                            <input type="email" id="signin-email" name="email" required>
                        </div>

                        <div class="form-group">
                            <label for="signin-password">Password</label>
                            <div class="password-input">
                                <input type="password" id="signin-password" name="password" required>
                                <button type="button" class="password-toggle" onclick="togglePassword('signin-password')">
                                    <i class="fas fa-eye"></i>
                                </button>
                            </div>
                        </div>

                        <div class="form-options">
                            <label class="checkbox-label">
                                <input type="checkbox" name="remember">
                                <span class="checkmark"></span>
                                Remember me
                            </label>
                            <a href="#" class="forgot-password">Forgot password?</a>
                        </div>

                        <button type="submit" class="auth-btn primary">Sign In</button>
                    </form>

                    <div class="auth-divider">
                        <span>Or continue with</span>
                    </div>

                    <div class="social-login">
                        <button class="social-btn google-btn">
                            <i class="fab fa-google"></i>
                            Continue with Google
                        </button>
                        <button class="social-btn facebook-btn">
                            <i class="fab fa-facebook-f"></i>
                            Continue with Facebook
                        </button>
                        <button class="social-btn twitter-btn">
                            <i class="fab fa-twitter"></i>
                            Continue with Twitter
                        </button>
                    </div>
                </div>

                <div class="auth-form-container hidden" id="signup-form">
                    <div class="auth-header">
                        <h2>Create Account</h2>
                        <p>Join SoundBite and start creating</p>
                    </div>

                    <form class="auth-form" id="signupForm">
                        <div class="form-row">
                            <div class="form-group">
                                <label for="signup-firstname">First Name</label>
                                <input type="text" id="signup-firstname" name="firstname" required>
                            </div>
                            <div class="form-group">
                                <label for="signup-surname">Surname</label>
                                <input type="text" id="signup-surname" name="surname" required>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="signup-email">Email Address</label>
                            <input type="email" id="signup-email" name="email" required>
                        </div>

                        <div class="form-group">
                            <label for="signup-phone">Phone Number</label>
                            <input type="tel" id="signup-phone" name="phone">
                        </div>

                        <div class="form-group">
                            <label for="signup-password">Password</label>
                            <div class="password-input">
                                <input type="password" id="signup-password" name="password" required>
                                <button type="button" class="password-toggle" onclick="togglePassword('signup-password')">
                                    <i class="fas fa-eye"></i>
                                </button>
                            </div>
                            <div class="password-requirements">
                                <small>Password must be at least 8 characters long</small>
                            </div>
                        </div>

                        <div class="form-group">
                            <label for="signup-confirm-password">Confirm Password</label>
                            <div class="password-input">
                                <input type="password" id="signup-confirm-password" name="confirm-password" required>
                                <button type="button" class="password-toggle" onclick="togglePassword('signup-confirm-password')">
                                    <i class="fas fa-eye"></i>
                                </button>
                            </div>
                        </div>

                        <div class="form-options">
                            <label class="checkbox-label">
                                <input type="checkbox" name="terms" required>
                                <span class="checkmark"></span>
                                I agree to the <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>
                            </label>
                        </div>

                        <div class="form-options">
                            <label class="checkbox-label">
                                <input type="checkbox" name="newsletter">
                                <span class="checkmark"></span>
                                Subscribe to our newsletter for updates and exclusive offers
                            </label>
                        </div>

                        <button type="submit" class="auth-btn primary">Create Account</button>
                    </form>

                    <div class="auth-divider">
                        <span>Or sign up with</span>
                    </div>

                    <div class="social-login">
                        <button class="social-btn google-btn">
                            <i class="fab fa-google"></i>
                            Sign up with Google
                        </button>
                        <button class="social-btn facebook-btn">
                            <i class="fab fa-facebook-f"></i>
                            Sign up with Facebook
                        </button>
                        <button class="social-btn twitter-btn">
                            <i class="fab fa-twitter"></i>
                            Sign up with Twitter
                        </button>
                    </div>
                </div>
            </div>

            <div class="benefits-sidebar">
                <h3>Why Join SoundBite?</h3>
                <div class="benefit-item">
                    <i class="fas fa-music"></i>
                    <div>
                        <h4>Premium Quality</h4>
                        <p>Access thousands of professional-grade sound effects</p>
                    </div>
                </div>
                <div class="benefit-item">
                    <i class="fas fa-download"></i>
                    <div>
                        <h4>Instant Downloads</h4>
                        <p>Get your sounds immediately after purchase</p>
                    </div>
                </div>
                <div class="benefit-item">
                    <i class="fas fa-shield-alt"></i>
                    <div>
                        <h4>Royalty-Free</h4>
                        <p>Use in any project without additional licensing</p>
                    </div>
                </div>
                <div class="benefit-item">
                    <i class="fas fa-headphones"></i>
                    <div>
                        <h4>Expert Support</h4>
                        <p>Get help from our audio professionals</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <?php include 'h_f/footer.php'; ?>
    
    <script src="assets/js/main.js"></script>
    <script src="assets/js/signin.js"></script>
</body>
</html>
