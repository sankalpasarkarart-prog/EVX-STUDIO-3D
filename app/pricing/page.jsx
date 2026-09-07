
export default function Page() {
  return (
    <>
      
    
    <div className="evx-loader">
        <div className="evx-loader-text">EVX</div>
        <div className="evx-loader-bar"></div>
    </div>

    <div className="global-animated-bg">
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>
        <div className="bg-orb bg-orb-3"></div>
        <div className="bg-noise-overlay"></div>
    </div>

    
    <nav className="navbar glass" id="navbar">
        <a href="/" className="nav-logo-link">
            <img src="assets/logo.png" alt="EVX STUDIO Logo" className="nav-logo" />
        </a>
        <ul className="nav-links" id="navLinks">
            <li><a href="/#services">Services</a></li>
            <li><a href="/pricing" className="active">Pricing</a></li>
            <li><a href="/#why-us">Why Us</a></li>
            <li><a href="/#faq">FAQ</a></li>
            <li><a href="/#contact">Contact</a></li>
            <li>
                <a href="/portfolio" className="nav-cta">
                    <i className="ri-gallery-line"></i> Portfolio
                </a>
            </li>
        </ul>
        <button className="mobile-menu-btn" id="mobileMenuBtn" aria-label="Toggle menu">
            <span></span>
            <span></span>
            <span></span>
        </button>
    </nav>

        
    <section className="section" id="pricing-single" style={{"paddingTop": "150px", "paddingBottom": "2rem"}}>
        <div className="section-header animate-in">
            <span className="section-tag glass">SINGLE VIDEOS</span>
            <h2 className="section-title">Short Video <span className="gradient-text">Pricing</span></h2>
            <p className="section-subtitle">Prices below are for short videos, calculated per minute. Minimum chargeable duration is 1 minute.</p>
        </div>
        
        <div className="pricing-grid-single animate-in">
            <div className="pricing-card-single glass tilt-card">
                <h3>Normal Clean Editing</h3>
                <p className="price-desc">Minimal cuts, captions, and transitions</p>
                <div className="price-amt">
                    <span className="currency">₹</span>600 <span className="usd-approx">/ ~$6.35</span>
                </div>
                <button className="btn-primary add-to-cart-btn" style={{"marginTop": "1.5rem", "width": "100%", "padding": "0.8rem", "fontSize": "0.95rem"}} data-id="single-clean" data-name="Normal Clean Editing" data-price="600">
                    <i className="ri-shopping-cart-2-line"></i> Add to Cart
                </button>
            </div>
            
            <div className="pricing-card-single glass tilt-card">
                <h3>Shorts with Motion Graphics</h3>
                <p className="price-desc">Engaging visuals and standard motion graphics</p>
                <div className="price-amt">
                    <span className="currency">₹</span>900 <span className="usd-approx">/ ~$9.52</span>
                </div>
                <button className="btn-primary add-to-cart-btn" style={{"marginTop": "1.5rem", "width": "100%", "padding": "0.8rem", "fontSize": "0.95rem"}} data-id="single-motion" data-name="Shorts with Motion Graphics" data-price="900">
                    <i className="ri-shopping-cart-2-line"></i> Add to Cart
                </button>
            </div>
            
            <div className="pricing-card-single glass tilt-card">
                <h3>Documentary Style</h3>
                <p className="price-desc">Story-driven editing with b-roll and sound design</p>
                <div className="price-amt">
                    <span className="currency">₹</span>1,100 <span className="usd-approx">/ ~$11.64</span>
                </div>
                <button className="btn-primary add-to-cart-btn" style={{"marginTop": "1.5rem", "width": "100%", "padding": "0.8rem", "fontSize": "0.95rem"}} data-id="single-doc" data-name="Documentary Style" data-price="1100">
                    <i className="ri-shopping-cart-2-line"></i> Add to Cart
                </button>
            </div>
            
            <div className="pricing-card-single glass tilt-card">
                <h3>Real Estate Shorts</h3>
                <p className="price-desc">Stunning property showcases and walkthroughs</p>
                <div className="price-amt">
                    <span className="currency">₹</span>1,500 <span className="usd-approx">/ ~$15.87</span>
                </div>
                <button className="btn-primary add-to-cart-btn" style={{"marginTop": "1.5rem", "width": "100%", "padding": "0.8rem", "fontSize": "0.95rem"}} data-id="single-realestate" data-name="Real Estate Shorts" data-price="1500">
                    <i className="ri-shopping-cart-2-line"></i> Add to Cart
                </button>
            </div>
            
            <div className="pricing-card-single glass-strong tilt-card highlight">
                <h3>Advanced Motion Graphics</h3>
                <p className="price-desc">Complex animations and high-end visual effects</p>
                <div className="price-amt">
                    <span className="currency" style={{"color": "var(--accent)"}}>₹</span>1,700 <span className="usd-approx">/ ~$17.99</span>
                </div>
                <button className="btn-primary add-to-cart-btn" style={{"marginTop": "1.5rem", "width": "100%", "padding": "0.8rem", "fontSize": "0.95rem"}} data-id="single-advanced" data-name="Advanced Motion Graphics" data-price="1700">
                    <i className="ri-shopping-cart-2-line"></i> Add to Cart
                </button>
            </div>
        </div>
        
        <div style={{"textAlign": "center", "marginTop": "3rem"}} className="animate-in">
            <p style={{"color": "var(--text-secondary)", "fontSize": "1.1rem"}}>For detailed pricing, you can <a href="https://wa.me/+919239048684?text=can%20I%20get%20more%20information%20about%20the%20pricing%3F" target="_blank" className="gradient-text" style={{"fontWeight": "600"}}>contact us</a>.</p>
        </div>
    </section>

    
    <section className="section section-alt" id="pricing-calculator">
        <div className="section-header animate-in">
            <span className="section-tag glass">MONTHLY RETAINER</span>
            <h2 className="section-title">Price <span className="gradient-text">Calculator</span></h2>
            <p className="section-subtitle">Choose the amount of videos per month to estimate your retainer.</p>
        </div>
        
        <div className="calculator-container glass-strong animate-in">
            <div className="calculator-controls">
                <label htmlFor="videoCount">Videos per month: <span id="videoCountDisplay" className="gradient-text">3</span></label>
                <input type="range" id="videoCount" min="3" max="20" value="3" className="pricing-slider" />
                <div className="slider-labels">
                    <span>3</span>
                    <span>20</span>
                </div>
            </div>
            
            <div className="calculator-results">
                <div className="price-display">
                    <span className="price-currency">₹</span>
                    <span className="price-amount" id="priceINR">5,000</span>
                    <span className="price-period">/mo</span>
                </div>
                <div className="price-display-usd">
                    <span>≈ $</span>
                    <span id="priceUSD">52.91</span>
                    <span>/mo</span>
                </div>
                <div className="per-video-breakdown glass">
                    <i className="ri-pie-chart-2-line"></i>
                    <span>Per video cost: <strong id="perVideoINR" style={{"color": "var(--accent)"}}>₹1,666</strong> (≈ $<span id="perVideoUSD">17.63</span>)</span>
                </div>
            </div>
            
            
            <div style={{"marginTop": "2rem"}}>
                <button className="btn-primary" id="addRetainerBtn" style={{"padding": "1rem 2.5rem", "fontSize": "1.1rem"}}>
                    <i className="ri-shopping-cart-2-line"></i> Add Retainer to Cart
                </button>
            </div>
            <div className="calculator-disclaimer" style={{"marginTop": "2rem"}}>
                <p><i className="ri-information-line"></i> * This is only the starting price. The main pricing and the original pricing may vary on the complexity of the work.</p>
            </div>
        </div>
    </section>

    
    <footer className="footer">
        <div className="footer-content">
            <div className="footer-brand">
                <p>Premium media production company crafting visual stories for brands worldwide.</p>

                <div style={{"marginTop": "1.5rem", "display": "flex", "flexDirection": "column", "gap": "1rem", "maxWidth": "250px"}}>
                    <a href="/know-about-the-founder" className="btn-primary" style={{"textAlign": "center", "padding": "0.8rem", "fontSize": "0.95rem"}}>Know About the Founder</a>
                    <a href="/know-about-us" className="btn-primary" style={{"textAlign": "center", "padding": "0.8rem", "fontSize": "0.95rem", "background": "rgba(var(--accent-rgb), 0.1)", "border": "1px solid var(--accent)", "boxShadow": "none"}}>Know About Us</a>
                </div>

            </div>
            <div className="footer-links-group">
                <h4>Quick Links</h4>
                <ul className="footer-links">
                    <li><a href="/#services">Services</a></li>
                    <li><a href="/pricing">Pricing</a></li>
                    <li><a href="/#why-us">Why Us</a></li>
                    <li><a href="/career">Career</a></li>
                    <li><a href="/#contact">Contact</a></li>
                </ul>
            </div>
            <div className="footer-links-group">
                <h4>Services</h4>
                <ul className="footer-links">
                    <li><a href="/pricing">YouTube Shorts</a></li>
                    <li><a href="/pricing">Corporate Videos</a></li>
                    <li><a href="/pricing">SaaS Animation</a></li>
                    <li><a href="/pricing">Graphic Design</a></li>
                </ul>
            </div>
            <div className="footer-links-group">
                <h4>Connect</h4>
                <ul className="footer-links">
                    <li><a href="https://wa.me/+919239048684" target="_blank"><i className="ri-whatsapp-line"></i> WhatsApp</a></li>
                    <li><a href="mailto:support@evxstudio.in" style={{"textTransform": "lowercase"}}><i className="ri-mail-line"></i> support@evxstudio.in</a></li>
                    <li><a href="/portfolio"><i className="ri-gallery-line"></i> Portfolio</a></li>
                    <li><a href="/terms"><i className="ri-file-paper-2-line"></i> Terms & Conditions</a></li>
                    <li><a href="/sitemap.xml"><i className="ri-node-tree"></i> Sitemap</a></li>
                </ul>
            </div>
        </div>
        <div className="footer-bottom">
            <p>&copy; 2025 EVX STUDIO. All rights reserved. Founded by <strong>ESHAN</strong>. <br /> <span className="cursive">made with ❤️ by EVX STUDIO</span></p>
        </div>
    </footer>

    
    <a href="https://wa.me/+919239048684" target="_blank" rel="noopener noreferrer" className="whatsapp-float" aria-label="Chat on WhatsApp" id="whatsappFloat">
        <div className="whatsapp-pulse"></div>
        <i className="ri-whatsapp-line"></i>
    </a>

    
    




    
    <div className="cart-overlay" id="cartOverlay"></div>
    <div className="cart-drawer glass-strong" id="cartDrawer">
        <div className="cart-header">
            <h3>Your Cart</h3>
            <button className="cart-close" id="cartClose"><i className="ri-close-line"></i></button>
        </div>
        <div className="cart-items" id="cartItems">
            
        </div>
        <div className="cart-footer">
            <div className="cart-subtotal">
                <span>Subtotal</span>
                <span id="cartSubtotal">₹0</span>
            </div>
            <div className="cart-coupon">
                <input type="text" id="couponInput" placeholder="Coupon code (e.g. PAYWITHWISE)" />
                <button id="applyCouponBtn" className="btn-secondary">Apply</button>
            </div>
            <p id="couponMessage" style={{"fontSize": "0.8rem", "color": "#ff4757", "marginTop": "0.5rem", "display": "none"}}></p>
            <div className="cart-discount" id="cartDiscountRow" style={{"display": "none", "justifyContent": "space-between", "marginTop": "1rem", "color": "#00e676", "fontWeight": "600"}}>
                <span>Discount (<span id="appliedCouponName"></span>)</span>
                <span id="cartDiscount">-₹0</span>
            </div>
            <div className="cart-total" style={{"display": "flex", "justifyContent": "space-between", "alignItems": "flex-end", "marginTop": "1.5rem", "paddingTop": "1.5rem", "borderTop": "1px solid rgba(255,255,255,0.1)"}}>
                <span style={{"fontSize": "1.2rem", "fontWeight": "600"}}>Net Amount</span>
                <div style={{"textAlign": "right"}}>
                    <span id="cartTotalINR" style={{"display": "block", "fontSize": "1.8rem", "fontWeight": "800", "color": "var(--accent)"}}>₹0</span>
                    <span id="cartTotalUSD" style={{"fontSize": "1rem", "color": "var(--text-muted)"}}>≈ $0.00</span>
                </div>
            </div>
            <button className="btn-primary checkout-btn" id="checkoutBtn" style={{"width": "100%", "marginTop": "1.5rem", "padding": "1rem", "fontSize": "1.1rem", "justifyContent": "center"}}>
                <i className="ri-whatsapp-line" style={{"fontSize": "1.4rem"}}></i> Checkout via WhatsApp
            </button>
        </div>
    </div>
    <button className="cart-floating-btn" id="cartFloatingBtn">
        <i className="ri-shopping-cart-2-line"></i>
        <span className="cart-badge" id="cartBadge">0</span>
    </button>
    


    
    
    
    
    
    


    </>
  );
}

