
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
    

    <main className="about-content animate-in">
        <div className="about-header">
            <h1 className="about-title">Know About Us</h1>
            <div className="about-subtitle">We are EVX Studio. A powerhouse team of 15+ artists, designers, 2D/3D animators, video editors, and motion graphics experts.</div>
        </div>

        <div className="process-box glass-strong">
            <h3><i className="ri-team-line"></i> Our Team & Leadership</h3>
            <p>Every single order at EVX STUDIO is personally handled by our founder, Eshan. He either creates and edits the video himself, or directly manages our elite editors, providing strict creative direction to ensure the final product meets our premium standards.</p>
            <p>Beyond our editing talent, we have dedicated scriptwriters, content strategists, and managers who handle end-to-end social media profiles for our clients.</p>
        </div>

        <div className="process-box glass-strong">
            <h3><i className="ri-flow-chart"></i> How We Process Orders</h3>
            
            <div className="process-step">
                <div className="step-number">1</div>
                <div>
                    <strong>Strategy & Blueprint</strong><br />
                    First, our content strategist analyzes the market and creates a comprehensive pathway for us to follow. They provide the initial instructions and creative direction for the campaign.
                </div>
            </div>
            
            <div className="process-step">
                <div className="step-number">2</div>
                <div>
                    <strong>Scripting</strong><br />
                    We ask the client for their topic or core message. Our dedicated scriptwriters then craft an engaging, highly informative, and retention-optimized script.
                </div>
            </div>
            
            <div className="process-step">
                <div className="step-number">3</div>
                <div>
                    <strong>Production & Editing</strong><br />
                    If your plan includes a shoot, our team handles it on-site. If not, you provide the raw data or footage, and we get to work. The best video editors on our team meticulously process your videos under the direct supervision of the founder.
                </div>
            </div>
            
            <div className="process-step">
                <div className="step-number">4</div>
                <div>
                    <strong>Review & Revisions</strong><br />
                    When the video is ready, we share it with you. We stand firmly by our work. If you want any adjustments, we provide revisions. If we ever make a mistake or fall short of our promise, we will give you a free revision or a full refund. We care deeply about client satisfaction.
                </div>
            </div>
            
            <div className="process-step">
                <div className="step-number">5</div>
                <div>
                    <strong>Final Delivery</strong><br />
                    Our QA team thoroughly checks every frame, audio channel, and graphic before finalizing and completing the order.
                </div>
            </div>
        </div>
    </main>

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

    
    

    
    
    
    
    
    


    </>
  );
}

