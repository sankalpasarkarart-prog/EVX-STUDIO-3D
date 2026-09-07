
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
        <div className="founder-profile">
            <img src="assets/founder.jpg" alt="Sankalpa Sarkar (ESHAN)" className="founder-img" />
            <h1 className="founder-name">Sankalpa Sarkar (ESHAN)</h1>
            <div className="founder-title">Senior Motion Graphics Artist & Founder of EVX STUDIO</div>
            <div className="founder-location"><i className="ri-map-pin-line"></i> West Bengal, India</div>
        </div>

        <div className="founder-story glass-strong">
            <p>Hi, I’m Eshan. Before I was ever rendering keyframes or managing timelines, my world was built entirely out of water and pigment. For over 12 years, I have been a dedicated watercolor artist. That foundation gave me an incredibly deep appreciation for composition, design, color theory, and visual storytelling—skills that you can't just learn from a software manual.</p>
            
            <p>My journey into the digital space actually started on YouTube. I wanted to share my watercolor paintings with the world, which meant I had to figure out how to film and edit my own videos. What started as a necessity quickly turned into an absolute passion. I found myself completely captivated by the art of video editing, motion graphics, and animation. I started diving deep into software like Premiere Pro, After Effects, DaVinci Resolve, Adobe Animate, Photoshop, and Affinity.</p>
            
            <p>The more I edited, the more I realized that manipulating pixels on a screen felt just like putting brush strokes on a canvas. The medium had changed, but the art remained the same. That realization led to the birth of EVX STUDIO.</p>
            
            <p>I also have a deep, underlying interest in technology. In fact, the very website you're scrolling through right now was designed and built by me. I love creating seamless, premium experiences, whether that’s in a 30-second viral short, a complex 3D animation, or the code that powers this site.</p>
            
            <p>At EVX STUDIO, I blend traditional artistic principles with cutting-edge tech to create visuals that don't just look good, but genuinely connect with people. Thanks for stopping by, and I can't wait to see what we create together.</p>
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

