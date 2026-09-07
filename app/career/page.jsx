
export default function Page() {
  return (
    <>
      
    
    

    
    <div className="global-animated-bg">
        <div className="bg-orb bg-orb-1"></div>
        <div className="bg-orb bg-orb-2"></div>
        <div className="bg-orb bg-orb-3"></div>
        <div className="bg-noise-overlay"></div>
    </div>

    
    <nav className="navbar glass" id="navbar">
        <a href="index.html" className="nav-logo-link">
            <img src="assets/logo.png" alt="EVX STUDIO Logo" className="nav-logo" />
        </a>
        <ul className="nav-links" id="navLinks">
            <li><a href="index.html#services">Services</a></li>
            <li><a href="index.html#pricing">Pricing</a></li>
            <li><a href="index.html#why-us">Why Us</a></li>
            <li><a href="index.html#faq">FAQ</a></li>
            <li><a href="index.html#contact">Contact</a></li>
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

    
    <section className="section career-header" style={{"position": "relative", "overflow": "hidden", "minHeight": "50vh", "display": "flex", "alignItems": "center", "justifyContent": "center"}}>
        
        <i className="ri-briefcase-4-fill floating-graphic float-1"></i>
        <i className="ri-macbook-line floating-graphic float-2"></i>
        <i className="ri-video-add-fill floating-graphic float-3"></i>
        <i className="ri-star-smile-fill floating-graphic float-4"></i>

        <div className="section-header animate-in" style={{"marginTop": "60px"}}>
            <span className="section-tag glass">JOIN OUR TEAM</span>
            <h1 className="section-title">Create Visuals That <span className="gradient-text">Matter</span></h1>
            <p className="section-subtitle">We are looking for top-tier talent to join our remote editing team.</p>
        </div>
    </section>

    
    <section className="section">
        <div className="career-container" style={{"maxWidth": "1000px", "margin": "0 auto", "padding": "0 1rem", "textAlign": "center"}}>
            
            <div className="career-card glass animate-in" style={{"padding": "4rem 2rem", "borderRadius": "var(--radius-card)", "border": "1px solid rgba(var(--accent-rgb), 0.2)"}}>
                <h2 style={{"fontSize": "2rem", "marginBottom": "1rem", "fontFamily": "var(--font-heading)"}}>Eligibility Requirements</h2>
                <p style={{"marginBottom": "3rem", "color": "var(--text-secondary)", "maxWidth": "600px", "marginLeft": "auto", "marginRight": "auto"}}>We are currently hiring for senior and mid-level editing positions. To be considered, you must have expert-level proficiency in at least two of the following software:</p>
                
                <ul className="eligibility-list" style={{"listStyle": "none", "padding": "0", "display": "flex", "flexDirection": "column", "gap": "1rem", "textAlign": "left", "maxWidth": "400px", "margin": "0 auto", "fontSize": "1.1rem"}}>
                    <li style={{"display": "flex", "alignItems": "center", "gap": "10px"}}><i className="ri-checkbox-circle-fill" style={{"color": "var(--accent)", "fontSize": "1.3rem"}}></i> Adobe Premiere Pro</li>
                    <li style={{"display": "flex", "alignItems": "center", "gap": "10px"}}><i className="ri-checkbox-circle-fill" style={{"color": "var(--accent)", "fontSize": "1.3rem"}}></i> Adobe After Effects</li>
                    <li style={{"display": "flex", "alignItems": "center", "gap": "10px"}}><i className="ri-checkbox-circle-fill" style={{"color": "var(--accent)", "fontSize": "1.3rem"}}></i> DaVinci Resolve</li>
                    <li style={{"display": "flex", "alignItems": "center", "gap": "10px"}}><i className="ri-checkbox-circle-fill" style={{"color": "var(--accent)", "fontSize": "1.3rem"}}></i> Final Cut Pro</li>
                    <li style={{"display": "flex", "alignItems": "center", "gap": "10px"}}><i className="ri-checkbox-circle-fill" style={{"color": "var(--accent)", "fontSize": "1.3rem"}}></i> Blender</li>
                    <li style={{"display": "flex", "alignItems": "center", "gap": "10px"}}><i className="ri-checkbox-circle-fill" style={{"color": "var(--accent)", "fontSize": "1.3rem"}}></i> Autodesk Maya</li>
                    <li style={{"display": "flex", "alignItems": "center", "gap": "10px"}}><i className="ri-checkbox-circle-fill" style={{"color": "var(--accent)", "fontSize": "1.3rem"}}></i> Adobe Photoshop</li>
                </ul>
            </div>

            <div className="career-contact animate-in" style={{"marginTop": "6rem", "paddingBottom": "4rem"}}>
                <h2 style={{"fontSize": "2rem", "marginBottom": "1rem", "fontFamily": "var(--font-heading)"}}>How to Apply</h2>
                <p style={{"marginBottom": "3rem", "color": "var(--text-secondary)"}}>Ready to join us? Reach out through any of the channels below.</p>
                
                <div className="contact-buttons" style={{"display": "flex", "gap": "1.5rem", "justifyContent": "center", "flexWrap": "wrap"}}>
                    <a href="mailto:support@evxstudio.in" className="btn glass-strong" style={{"fontSize": "1.1rem", "padding": "1.2rem 2.5rem", "borderRadius": "100px"}}>
                        <i className="ri-mail-line"></i> Email Us
                    </a>
                    <a href="tel:+919239048684" className="btn glass-strong" style={{"fontSize": "1.1rem", "padding": "1.2rem 2.5rem", "borderRadius": "100px"}}>
                        <i className="ri-phone-line"></i> +91 92390 48684
                    </a>
                    <a href="https://wa.me/+919239048684" target="_blank" rel="noopener noreferrer" className="btn btn-primary cta-glow" style={{"fontSize": "1.1rem", "padding": "1.2rem 2.5rem", "borderRadius": "100px"}}>
                        <i className="ri-whatsapp-line"></i> WhatsApp Us
                    </a>
                </div>
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
                    <li><a href="index.html#services">Services</a></li>
                    <li><a href="index.html#pricing">Pricing</a></li>
                    <li><a href="index.html#why-us">Why Us</a></li>
                    <li><a href="/career">Career</a></li>
                    <li><a href="index.html#contact">Contact</a></li>
                </ul>
            </div>
            <div className="footer-links-group">
                <h4>Services</h4>
                <ul className="footer-links">
                    <li><a href="index.html#pricing">YouTube Shorts</a></li>
                    <li><a href="index.html#pricing">Corporate Videos</a></li>
                    <li><a href="index.html#pricing">SaaS Animation</a></li>
                    <li><a href="index.html#pricing">Graphic Design</a></li>
                </ul>
            </div>
            <div className="footer-links-group">
                <h4>Connect</h4>
                <ul className="footer-links">
                    <li><a href="https://wa.me/+919239048684" target="_blank"><i className="ri-whatsapp-line"></i> WhatsApp</a></li>
                    <li><a href="mailto:support@evxstudio.in" style={{"textTransform": "lowercase"}}><i className="ri-mail-line"></i> support@evxstudio.in</a></li>
                    <li><a href="/portfolio"><i className="ri-gallery-line"></i> Portfolio</a></li>
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

    
    

    
    
    
    
    
    


    </>
  );
}

