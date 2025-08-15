<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping Cart</title>
    <link rel="stylesheet" href="assets/css/style.css">
    <link rel="stylesheet" href="assets/css/cart.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <?php include 'h_f/navbar.php'; ?>

    <div class="cart-page">
        <div class="container">
            <div class="empty-cart" id="emptyCart">
                <div class="empty-cart-content">
                    <i class="fas fa-shopping-cart"></i>
                    <h2>Your cart is empty</h2>
                    <p>Discover amazing sound packs and add them to your cart to get started.</p>
                    <a href="browse.php" class="cta-button">Browse Sound Packs</a>
                </div>
            </div>

            <div class="cart-content" id="cartContent" style="display: none;">
                <div class="cart-header">
                    <h1>Your Cart</h1>
                    <p class="cart-count">3 items in your cart</p>
                </div>

                <div class="cart-main">
                    <div class="cart-items">
                        <div class="cart-item" id="cartItems">
                        </div>
                    </div>

                    <div class="cart-summary">
                        <div class="summary-card">
                            <h3>Order Summary</h3>
                            
                            <div class="summary-row">
                                <span>Subtotal</span>
                                <span id="subtotal">R0.00</span>
                            </div>
                            
                            <div class="summary-row">
                                <span>Tax</span>
                                <span id="tax">R0.00</span>
                            </div>
                            
                            <div class="summary-row total">
                                <span>Total</span>
                                <span id="total">R0.00</span>
                            </div>

                            <button class="checkout-btn" id="checkoutBtn">
                                <i class="fas fa-credit-card"></i>
                                Proceed to Checkout
                            </button>

                            <div class="payment-methods">
                                <p>We accept:</p>
                                <div class="method-icons">
                                    <i class="fab fa-cc-visa"></i>
                                    <i class="fab fa-cc-mastercard"></i>
                                    <i class="fab fa-cc-amex"></i>
                                    <i class="fab fa-cc-paypal"></i>
                                </div>
                            </div>
                        </div>

                        <div class="promo-card">
                            <h4>Have a promo code?</h4>
                            <div class="promo-input">
                                <input type="text" id="promoCode" placeholder="Enter code">
                                <button type="button" id="applyPromo">Apply</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <?php include 'h_f/footer.php'; ?>
    
    <script src="assets/js/main.js"></script>
    <script src="assets/js/cart.js"></script>

    <style>
        .cart-page {
            min-height: 100vh;
            padding: 120px 0 2rem;
        }

        .empty-cart {
            text-align: center;
            padding: 4rem 0;
        }

        .empty-cart-content i {
            font-size: 4rem;
            color: var(--text-gray);
            margin-bottom: 2rem;
        }

        .empty-cart-content h2 {
            color: var(--text-light);
            margin-bottom: 1rem;
        }

        .empty-cart-content p {
            color: var(--text-gray);
            margin-bottom: 2rem;
            max-width: 400px;
            margin-left: auto;
            margin-right: auto;
        }

        .cart-header {
            margin-bottom: 2rem;
        }

        .cart-header h1 {
            color: var(--text-light);
            margin-bottom: 0.5rem;
        }

        .cart-count {
            color: var(--text-gray);
            font-size: 1.1rem;
        }

        .cart-main {
            display: grid;
            grid-template-columns: 2fr 1fr;
            gap: 3rem;
        }

        .cart-item {
            background: var(--dark-secondary);
            border: 1px solid var(--border-dark);
            border-radius: var(--border-radius-lg);
            padding: 1.5rem;
            margin-bottom: 1rem;
            display: flex;
            align-items: center;
            gap: 1rem;
        }

        .item-image {
            width: 80px;
            height: 80px;
            border-radius: var(--border-radius);
            overflow: hidden;
            flex-shrink: 0;
        }

        .item-image img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .item-details {
            flex: 1;
        }

        .item-details h4 {
            color: var(--text-light);
            margin-bottom: 0.5rem;
        }

        .item-details .category {
            color: var(--primary-color);
            font-size: 0.9rem;
            text-transform: uppercase;
            font-weight: 600;
        }

        .item-price {
            color: var(--text-light);
            font-size: 1.25rem;
            font-weight: 600;
        }

        .remove-item {
            background: var(--error-color);
            color: white;
            border: none;
            padding: 0.5rem;
            border-radius: var(--border-radius);
            cursor: pointer;
            transition: var(--transition);
        }

        .remove-item:hover {
            background: #dc2626;
        }

        .summary-card {
            background: var(--dark-secondary);
            border: 1px solid var(--border-dark);
            border-radius: var(--border-radius-lg);
            padding: 2rem;
            margin-bottom: 1.5rem;
        }

        .summary-card h3 {
            color: var(--text-light);
            margin-bottom: 1.5rem;
        }

        .summary-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 1rem;
            color: var(--text-gray);
        }

        .summary-row.total {
            border-top: 1px solid var(--border-dark);
            padding-top: 1rem;
            font-size: 1.25rem;
            font-weight: 600;
            color: var(--text-light);
        }

        .checkout-btn {
            width: 100%;
            padding: 1rem;
            background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
            color: white;
            border: none;
            border-radius: var(--border-radius-lg);
            font-size: 1.1rem;
            font-weight: 600;
            cursor: pointer;
            transition: var(--transition);
            margin: 1.5rem 0;
        }

        .checkout-btn:hover {
            transform: translateY(-2px);
            box-shadow: var(--shadow-lg);
        }

        .payment-methods {
            text-align: center;
            margin-top: 1rem;
        }

        .payment-methods p {
            color: var(--text-gray);
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
        }

        .method-icons {
            display: flex;
            justify-content: center;
            gap: 1rem;
        }

        .method-icons i {
            font-size: 1.5rem;
            color: var(--text-gray);
        }

        .promo-card {
            background: var(--dark-secondary);
            border: 1px solid var(--border-dark);
            border-radius: var(--border-radius-lg);
            padding: 1.5rem;
        }

        .promo-card h4 {
            color: var(--text-light);
            margin-bottom: 1rem;
        }

        .promo-input {
            display: flex;
            gap: 0.5rem;
        }

        .promo-input input {
            flex: 1;
            padding: 0.75rem;
            background: var(--dark-bg);
            border: 1px solid var(--border-dark);
            border-radius: var(--border-radius);
            color: var(--text-light);
        }

        .promo-input button {
            padding: 0.75rem 1rem;
            background: var(--primary-color);
            color: white;
            border: none;
            border-radius: var(--border-radius);
            cursor: pointer;
            transition: var(--transition);
        }

        .promo-input button:hover {
            background: var(--primary-dark);
        }

        @media (max-width: 768px) {
            .cart-main {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .cart-item {
                flex-direction: column;
                text-align: center;
            }

            .item-image {
                width: 100px;
                height: 100px;
            }
        }
    </style>
</body>
</html>