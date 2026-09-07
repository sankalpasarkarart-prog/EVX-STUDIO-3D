
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
        <a href="#hero" className="nav-logo-link">
            <img src="assets/logo.png" alt="EVX STUDIO Logo" className="nav-logo" />
        </a>
        <ul className="nav-links" id="navLinks">
            <li><a href="#services">Services</a></li>
            <li><a href="/pricing">Pricing</a></li>
            <li><a href="#why-us">Why Us</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li><a href="#contact">Contact</a></li>
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

    
    <section className="hero" id="hero">
        
        <i className="ri-rocket-2-fill floating-graphic float-1"></i>
        <i className="ri-star-fill floating-graphic float-2"></i>
        <i className="ri-play-circle-fill floating-graphic float-3"></i>
        <i className="ri-magic-fill floating-graphic float-4"></i>
        
        <div className="hero-content">
            <h3 className="hero-tagline" style={{"fontFamily": "var(--font-heading)", "fontWeight": "800", "color": "var(--text-primary)", "marginBottom": "1.5rem", "fontSize": "1.3rem", "letterSpacing": "0.5px"}}>No need to stress, let EVX handle the mess!</h3>
            <h1>
                Best Video Editing<br />
                <span className="gradient-text">Video Editing and Post Production Company in India</span>
            </h1>
            <p className="hero-subtitle">
                The top video editing and post production company trusted by 50+ global brands. Our team of 15+ professional video editors delivers YouTube shorts, corporate videos, SaaS animations &amp; more — at the cheapest rates in the industry.
            </p>
            <div className="hero-badge">
                <i className="ri-sparkling-2-fill"></i>
                Plans starting from only <strong>$15</strong>
            </div>
            <div className="hero-ctas">
                <a href="/pricing" className="btn-primary">
                    <i className="ri-price-tag-3-line"></i> View Pricing
                </a>
                <a href="/portfolio" className="btn-secondary">
                    <i className="ri-gallery-line"></i> View Portfolio
                </a>
            </div>
            <p style={{"fontSize": "1.2rem", "color": "var(--text-secondary)", "marginTop": "1.5rem", "fontFamily": "'Caveat', cursive", "letterSpacing": "1px"}}>(Trust us, we take care of your pocket better than your ex did! 🤫💸)</p>
        </div>

    </section>
    
    <div className="pov-text-banner glass animate-in" style={{"maxWidth": "900px", "margin": "2rem auto 4rem", "padding": "3rem 2rem", "textAlign": "center", "borderRadius": "var(--radius-card)", "position": "relative", "zIndex": "10"}}>
        <h2 style={{"fontSize": "clamp(1.8rem, 4vw, 2.5rem)", "fontFamily": "var(--font-heading)", "fontWeight": "800", "lineHeight": "1.3", "color": "var(--text-primary)", "letterSpacing": "-0.5px"}}>
            <span style={{"color": "var(--accent)"}}>POV:</span> You just reclaimed <strong style={{"color": "#fff", "textShadow": "0 0 10px rgba(255,255,255,0.3)"}}>20 hours</strong> of your week because you outsourced your editing to <strong style={{"color": "#fff", "textShadow": "0 0 10px rgba(255,255,255,0.3)"}}>us</strong>.
        </h2>
    </div>


    
    <section className="section" id="services">
        <div className="section-header animate-in">
            <span className="section-tag glass">OUR SERVICES</span>
            <h2 className="section-title">What We <span className="gradient-text">Create</span></h2>
            <p className="section-subtitle">From concept to final cut — we deliver premium media content that captivates audiences and drives results.</p>
        </div>
        <div className="services-grid">
            <div className="service-card glass tilt-card animate-in">
                <div className="service-icon">
                    <i className="ri-music-2-line"></i>
                </div>
                <h3>Music Videos</h3>
                <p>Cinematic music video editing with color grading, visual effects, and seamless transitions that amplify your sound.</p>
            </div>
            <div className="service-card glass tilt-card animate-in">
                <div className="service-icon">
                    <i className="ri-building-2-line"></i>
                </div>
                <h3>Corporate Videos</h3>
                <p>Professional corporate content including brand films, testimonials, and company profiles that build trust and credibility.</p>
            </div>
            <div className="service-card glass tilt-card animate-in">
                <div className="service-icon">
                    <i className="ri-home-5-line"></i>
                </div>
                <h3>Real Estate Ads</h3>
                <p>Stunning property showcase videos with aerial shots, walkthroughs, and dynamic transitions that sell spaces.</p>
            </div>
            <div className="service-card glass tilt-card animate-in">
                <div className="service-icon">
                    <i className="ri-youtube-line"></i>
                </div>
                <h3>YouTube Short-Form</h3>
                <p>Scroll-stopping YouTube Shorts and Reels with punchy edits, captions, and trending formats that drive engagement.</p>
            </div>
            <div className="service-card glass tilt-card animate-in">
                <div className="service-icon">
                    <i className="ri-video-line"></i>
                </div>
                <h3>YouTube Long-Form</h3>
                <p>Full-length YouTube videos with professional editing, sound design, graphics, and retention-optimized pacing.</p>
            </div>
            <div className="service-card glass tilt-card animate-in">
                <div className="service-icon">
                    <i className="ri-graduation-cap-line"></i>
                </div>
                <h3>Educational Shorts</h3>
                <p>Informative short-form content with clear visuals, motion graphics, and engaging storytelling for learning.</p>
            </div>
            <div className="service-card glass tilt-card animate-in">
                <div className="service-icon">
                    <i className="ri-information-line"></i>
                </div>
                <h3>Informational Shorts</h3>
                <p>Data-driven short videos with sleek motion graphics, infographics, and animated text overlays.</p>
            </div>
            <div className="service-card glass tilt-card animate-in">
                <div className="service-icon">
                    <i className="ri-rocket-2-line"></i>
                </div>
                <h3>SaaS Animated Content</h3>
                <p>Explainer videos and product demos with custom 2D/3D animations that simplify complex software concepts.</p>
            </div>
            <div className="service-card glass tilt-card animate-in">
                <div className="service-icon">
                    <i className="ri-palette-line"></i>
                </div>
                <h3>Graphic Design</h3>
                <p>Brand identity, social media creatives, thumbnails, banners, and marketing collateral that stand out.</p>
            </div>
            <div className="service-card glass tilt-card animate-in">
                <div className="service-icon">
                    <i className="ri-megaphone-line"></i>
                </div>
                <h3>Ad Campaigns</h3>
                <p>High-converting video ads and creative campaigns for social media, Google, and programmatic platforms.</p>
            </div>
        </div>

        
        <div className="promo-banner glass animate-in" style={{"marginTop": "4rem", "textAlign": "center", "padding": "3rem 2rem", "border": "1px solid rgba(138, 43, 226, 0.3)", "background": "linear-gradient(135deg, rgba(20,20,25,0.8) 0%, rgba(30,30,40,0.8) 100%)", "position": "relative", "overflow": "hidden", "borderRadius": "1.5rem", "boxShadow": "0 10px 30px rgba(0,0,0,0.5)"}}>
            <div style={{"position": "absolute", "top": "-50px", "left": "-50px", "width": "150px", "height": "150px", "background": "#8a2be2", "filter": "blur(70px)", "opacity": "0.5"}}></div>
            <div style={{"position": "absolute", "bottom": "-50px", "right": "-50px", "width": "150px", "height": "150px", "background": "#00b9ff", "filter": "blur(70px)", "opacity": "0.5"}}></div>
            <h3 style={{"fontSize": "2.2rem", "fontFamily": "var(--font-heading)", "fontWeight": "800", "marginBottom": "1rem", "position": "relative", "zIndex": "1"}}>
                <span className="gradient-text">Try our services for the first time at a cost lower than a pizza.</span> 🍕
            </h3>
            <p style={{"fontSize": "1.1rem", "color": "var(--text-primary)", "marginBottom": "1.5rem", "position": "relative", "zIndex": "1", "fontStyle": "italic"}}>
                Pizza gives you calories, but we give you peace of mind! 🧘‍♂️ Skip the grease, invest in your brand, and let us serve up some fresh, stress-free edits.
            </p>
            <p style={{"fontSize": "0.95rem", "color": "var(--text-secondary)", "position": "relative", "zIndex": "1", "letterSpacing": "0.5px", "opacity": "0.8"}}>
                *try for 10 USD/ short and 15 USD/ long video. applicable only for 1st time try
            </p>
        </div>
    </section>

    
    <section className="section" id="how-it-works">
        <div className="section-header animate-in">
            <span className="section-tag glass">HOW IT WORKS</span>
            <h2 className="section-title">Hire the Best Video Editors in <span className="gradient-text">3 Simple Steps</span></h2>
            <p className="section-subtitle">Our streamlined process makes outsourcing your video editing effortless. From brief to final delivery — we handle everything.</p>
            <p className="section-subtitle" style={{"marginTop": "0.5rem", "fontFamily": "'Caveat', cursive", "fontSize": "1.3rem", "color": "var(--accent)"}}>Drama will give you trauma, but our seamless cuts will fix your footage faster than a drama llama! 🦙✨</p>
        </div>
        <div className="process-grid">
            <div className="process-step glass tilt-card animate-in">
                <div className="process-number">01</div>
                <div className="process-icon"><i className="ri-chat-3-line"></i></div>
                <h3>Share Your Brief</h3>
                <p>Tell us about your project — whether it's YouTube shorts, corporate videos, SaaS animations, or real estate ads. Send us your raw footage and references via WhatsApp or email.</p>
            </div>
            <div className="process-step glass tilt-card animate-in">
                <div className="process-number">02</div>
                <div className="process-icon"><i className="ri-movie-2-line"></i></div>
                <h3>We Edit &amp; Create</h3>
                <p>Our professional video editors, motion graphics artists, and graphic designers get to work. We craft every frame with precision, creativity, and your brand guidelines in mind.</p>
            </div>
            <div className="process-step glass tilt-card animate-in">
                <div className="process-number">03</div>
                <div className="process-icon"><i className="ri-check-double-line"></i></div>
                <h3>Review &amp; Deliver</h3>
                <p>Receive your polished video within 24–72 hours. Request revisions if needed — we don't stop until you're 100% satisfied with the final result.</p>
            </div>
        </div>
    </section>

    
    <section className="section section-alt" id="why-us">
        <div className="section-header animate-in">
            <span className="section-tag glass">WHY EVX STUDIO</span>
            <h2 className="section-title">Why We're the Top <span className="gradient-text">video editing and post production company</span></h2>
            <p className="section-subtitle">Rated as one of the best video editing agencies in India — delivering premium quality at the cheapest prices, on time, every time.</p>
            <p className="section-subtitle" style={{"marginTop": "0.5rem", "fontFamily": "'Caveat', cursive", "fontSize": "1.3rem", "color": "#ff4757"}}>Sick of your videos looking like trash? 🗑️ Our edits make your content hot, bold, and ready to smash! 💥</p>
        </div>

        <div className="stats-row animate-in">
            <div className="stat-item">
                <div className="stat-number"><span className="counter" data-target="3" data-suffix="+">0+</span></div>
                <div className="stat-label">Years of Experience</div>
            </div>
            <div className="stat-item">
                <div className="stat-number"><span className="counter" data-target="15" data-suffix="+">0+</span></div>
                <div className="stat-label">Team Members</div>
            </div>
            <div className="stat-item">
                <div className="stat-number"><span className="counter" data-target="500" data-suffix="+">0+</span></div>
                <div className="stat-label">Projects Delivered</div>
            </div>
            <div className="stat-item">
                <div className="stat-number"><span className="counter" data-target="50" data-suffix="+">0+</span></div>
                <div className="stat-label">Global Clients</div>
            </div>
        </div>

        <div className="growth-chart-wrapper glass-strong animate-in" id="growthChart">
            <div className="chart-header" style={{"textAlign": "center", "marginBottom": "3rem"}}>
                <h3 style={{"fontSize": "2.2rem", "marginBottom": "0.5rem"}}>Grow your business <span className="gradient-text">300% faster</span> with us</h3>
                <p style={{"color": "var(--text-secondary)", "fontSize": "1.1rem"}}>Consistent, high-quality video content is the ultimate lever for scalable growth.</p>
            </div>
            
            <div className="premium-bar-chart">
                <div className="bar-container">
                    <div className="bar-label">Month 1</div>
                    <div className="bar-track glass">
                        <div className="bar-fill" style={{"--target-height": "25%", "animationDelay": "0.2s"}}>
                            <div className="bar-value">25%</div>
                        </div>
                    </div>
                    <div className="bar-title">Initial</div>
                </div>
                
                <div className="bar-container">
                    <div className="bar-label">Month 2</div>
                    <div className="bar-track glass">
                        <div className="bar-fill" style={{"--target-height": "45%", "animationDelay": "0.4s"}}>
                            <div className="bar-value">45%</div>
                        </div>
                    </div>
                    <div className="bar-title">Optimization</div>
                </div>
                
                <div className="bar-container">
                    <div className="bar-label">Month 3</div>
                    <div className="bar-track glass">
                        <div className="bar-fill" style={{"--target-height": "70%", "animationDelay": "0.6s"}}>
                            <div className="bar-value">70%</div>
                        </div>
                    </div>
                    <div className="bar-title">Scaling</div>
                </div>
                
                <div className="bar-container">
                    <div className="bar-label">Month 4</div>
                    <div className="bar-track glass">
                        <div className="bar-fill highlight" style={{"--target-height": "100%", "animationDelay": "0.8s"}}>
                            <div className="bar-value">300% ROI</div>
                        </div>
                    </div>
                    <div className="bar-title">Viral Growth</div>
                </div>
            </div>
        </div>

        <div className="features-grid">
            <div className="feature-card glass tilt-card animate-in">
                <div className="feature-icon">
                    <i className="ri-award-line"></i>
                </div>
                <h3>Premium Quality</h3>
                <p>Every frame is meticulously crafted by experienced editors who understand storytelling, pacing, and brand aesthetics.</p>
            </div>
            <div className="feature-card glass tilt-card animate-in">
                <div className="feature-icon">
                    <i className="ri-timer-flash-line"></i>
                </div>
                <h3>Fast Turnaround</h3>
                <p>We deliver on time, every time. Most projects are completed within 24-72 hours without compromising quality.</p>
            </div>
            <div className="feature-card glass tilt-card animate-in">
                <div className="feature-icon">
                    <i className="ri-global-line"></i>
                </div>
                <h3>Global Experience</h3>
                <p>We've worked with popular brands across the world, bringing diverse perspectives and international standards.</p>
            </div>
            <div className="feature-card glass tilt-card animate-in">
                <div className="feature-icon">
                    <i className="ri-money-dollar-circle-line"></i>
                </div>
                <h3>Unbeatable Pricing</h3>
                <p>Plans starting from just $15 — premium quality at prices that make professional video editing accessible to everyone.</p>
            </div>
            <div className="feature-card glass tilt-card animate-in">
                <div className="feature-icon">
                    <i className="ri-team-line"></i>
                </div>
                <h3>Dedicated Team</h3>
                <p>A team of 15+ highly skilled video editors, graphic designers, and cinematographers dedicated to your vision.</p>
            </div>
            <div className="feature-card glass tilt-card animate-in">
                <div className="feature-icon">
                    <i className="ri-customer-service-2-line"></i>
                </div>
                <h3>24/7 Support</h3>
                <p>Round-the-clock communication via WhatsApp and email. Your project manager is always just a message away.</p>
            </div>
        </div>
    </section>

    
    <section className="section" id="refund">
        <div className="refund-banner glass animate-in">
            <div className="refund-shield">
                <i className="ri-shield-check-fill"></i>
            </div>
            <h2>100% <span className="gradient-text">Money-Back</span> Guarantee</h2>
            <p>We stand behind our work. If your project is undelivered or doesn't meet quality standards, you'll receive a <strong>full 100% refund</strong> — no questions asked. Your satisfaction is our top priority.</p>
            <p style={{"marginTop": "1rem", "fontFamily": "'Caveat', cursive", "fontSize": "1.4rem", "color": "#00e676"}}>If you don't dig our style and feel it's trash, we'll hand back your hard-earned cash, in a flash, with zero clash! 💸🤝</p>
            <div className="refund-badges">
                <div className="refund-badge-item">
                    <i className="ri-check-double-line"></i>
                    <span>Quality Guaranteed</span>
                </div>
                <div className="refund-badge-item">
                    <i className="ri-time-line"></i>
                    <span>On-Time Delivery</span>
                </div>
                <div className="refund-badge-item">
                    <i className="ri-refund-2-line"></i>
                    <span>Full Refund Policy</span>
                </div>
            </div>
        </div>
    </section>

    
    <section className="section section-alt" id="payments">
        <div className="section-header animate-in">
            <span className="section-tag glass">PAYMENTS</span>
            <h2 className="section-title">We Accept <span className="gradient-text">All Payments</span></h2>
            <p className="section-subtitle">Pay with any method that works for you — we support international and domestic payments.</p>
        </div>
        <div className="payment-grid animate-in">
            <div className="payment-badge glass">
                <i className="ri-paypal-line"></i>
                <span>PayPal</span>
            </div>
            <div className="payment-badge glass">
                <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor"><path d="M12.6 3.1c-1.1-.1-2.1.3-2.9 1L5.5 8.3c-.5.5-.8 1.1-.8 1.8v4c0 1.4 1.1 2.5 2.5 2.5h1.1l.7-2.5H7.2c-.3 0-.5-.2-.5-.5v-4c0-.2.1-.4.2-.5l4.2-4.2c.3-.3.7-.4 1.1-.4.4 0 .7.1 1 .4l4.2 4.2c.1.1.2.3.2.5v4c0 .3-.2.5-.5.5h-1.8l.7 2.5h1.1c1.4 0 2.5-1.1 2.5-2.5v-4c0-.7-.3-1.3-.8-1.8l-4.2-4.2c-.5-.5-1.2-.8-1.9-.9z"/><path d="M10.5 10.5L8 19h2.5l1-3.5h2l1 3.5H17l-2.5-8.5h-4zm1.5 2l.5 2h-1l.5-2z"/></svg>
                <span>Wise</span>
            </div>
            <div className="payment-badge glass">
                <i className="ri-visa-line"></i>
                <span>Visa</span>
            </div>
            <div className="payment-badge glass">
                <i className="ri-mastercard-line"></i>
                <span>Mastercard</span>
            </div>
            <div className="payment-badge glass">
                <i className="ri-bank-card-line"></i>
                <span>RuPay</span>
            </div>
            <div className="payment-badge glass">
                <span className="payment-text-icon">UPI</span>
                <span>UPI</span>
            </div>

            <div className="payment-badge glass">
                <i className="ri-bank-line"></i>
                <span>NEFT</span>
            </div>
            <div className="payment-badge glass">
                <i className="ri-google-line"></i>
                <span>Google Pay</span>
            </div>
            <div className="payment-badge glass">
                <i className="ri-bit-coin-line"></i>
                <span>Crypto</span>
            </div>
        </div>
    </section>

    
    <section className="section section-alt" id="faq">
        <div className="section-header animate-in">
            <span className="section-tag glass">FAQ</span>
            <h2 className="section-title">Frequently Asked <span className="gradient-text">Questions</span></h2>
            <p className="section-subtitle">Everything you need to know about our video editing and post production company and services.</p>
        </div>
        <div className="faq-container">
            <details className="faq-item glass animate-in">
                <summary className="faq-question">
                    <span>What makes EVX STUDIO the best video editing and post production company?</span>
                    <i className="ri-add-line faq-icon"></i>
                </summary>
                <div className="faq-answer">
                    <p>EVX STUDIO is rated among the top video editing agencies because we combine premium quality with the most affordable pricing in the industry. With 15+ skilled video editors, 3+ years of experience, and 500+ projects delivered for brands worldwide, we offer professional-grade editing starting from just $15. Our 100% money-back guarantee ensures zero risk for every client.</p>
                </div>
            </details>
            <details className="faq-item glass animate-in">
                <summary className="faq-question">
                    <span>How much does video editing cost at your video editing and post production company?</span>
                    <i className="ri-add-line faq-icon"></i>
                </summary>
                <div className="faq-answer">
                    <p>We are the cheapest video editing and post production company offering professional services. YouTube Shorts &amp; Reels start from $15, informational shorts from $25, corporate shorts from $30, real estate ads from $32, and SaaS animated videos from $139. For music videos, contact us for a custom quote. These are the most competitive rates you'll find for this level of quality.</p>
                </div>
            </details>
            <details className="faq-item glass animate-in">
                <summary className="faq-question">
                    <span>Is EVX STUDIO the cheapest Video Editing and Post Production Company in India?</span>
                    <i className="ri-add-line faq-icon"></i>
                </summary>
                <div className="faq-answer">
                    <p>Yes! EVX STUDIO is one of the cheapest video editing agencies in India without compromising on quality. Based in West Bengal, India, our team of 15+ professional video editors delivers international-standard editing at Indian pricing. Plans start from only $15 (approximately ₹1,250), making us the most affordable choice for creators and businesses worldwide.</p>
                </div>
            </details>
            <details className="faq-item glass animate-in">
                <summary className="faq-question">
                    <span>Who is the best video editor in India for YouTube content?</span>
                    <i className="ri-add-line faq-icon"></i>
                </summary>
                <div className="faq-answer">
                    <p>EVX STUDIO's team includes some of the best video editors in India, specializing in YouTube content. Whether it's short-form content (Shorts, Reels, TikTok) or long-form YouTube videos, our editors understand retention, pacing, trending formats, and platform algorithms. We've edited content for popular creators and brands across the globe.</p>
                </div>
            </details>
            <details className="faq-item glass animate-in">
                <summary className="faq-question">
                    <span>What types of video editing services does EVX STUDIO offer?</span>
                    <i className="ri-add-line faq-icon"></i>
                </summary>
                <div className="faq-answer">
                    <p>As a full-service video editing and post production company, we offer: YouTube Shorts &amp; Reels editing, YouTube long-form video editing, corporate video production, real estate advertisement videos, SaaS animated explainer videos, music video post-production, educational &amp; informational shorts, motion graphics, graphic design, ad campaign creatives, and thumbnail design. We cover every aspect of digital media production.</p>
                </div>
            </details>
            <details className="faq-item glass animate-in">
                <summary className="faq-question">
                    <span>How fast can you deliver edited videos?</span>
                    <i className="ri-add-line faq-icon"></i>
                </summary>
                <div className="faq-answer">
                    <p>Our top video editors deliver most projects within 24–72 hours. YouTube Shorts and Reels are typically delivered same-day or next-day. For complex projects like SaaS animated videos or music videos, delivery takes 5–7 business days. Rush delivery is available upon request for an additional fee.</p>
                </div>
            </details>
            <details className="faq-item glass animate-in">
                <summary className="faq-question">
                    <span>Do you offer a refund if I'm not satisfied?</span>
                    <i className="ri-add-line faq-icon"></i>
                </summary>
                <div className="faq-answer">
                    <p>Absolutely. EVX STUDIO offers a 100% money-back guarantee. If your project is undelivered or doesn't meet the agreed quality standards, you receive a full refund — no questions asked. We're one of the few video editing agencies that offer this level of buyer protection.</p>
                </div>
            </details>
            <details className="faq-item glass animate-in">
                <summary className="faq-question">
                    <span>How do I hire video editors from EVX STUDIO?</span>
                    <i className="ri-add-line faq-icon"></i>
                </summary>
                <div className="faq-answer">
                    <p>Hiring the best video editors in India is easy! Simply message us on WhatsApp at +91 9239048684 or email support@evxstudio.in. Share your project brief, raw footage, and references. We'll provide a quote within hours and get started immediately. No contracts, no minimum commitments.</p>
                </div>
            </details>
        </div>
        <div className="faq-whatsapp-cta" style={{"textAlign": "center", "marginTop": "3rem"}}>
            <p style={{"color": "var(--text-secondary)", "marginBottom": "1.5rem", "fontSize": "1.1rem"}}>Have any other questions?</p>
            <a href="https://wa.me/+919239048684" target="_blank" className="btn-primary" style={{"display": "inline-flex", "alignItems": "center", "gap": "0.5rem"}}>
                <i className="ri-whatsapp-line" style={{"fontSize": "1.2rem"}}></i> Ask on WhatsApp
            </a>
            <p style={{"marginTop": "1.5rem", "fontFamily": "'Caveat', cursive", "fontSize": "1.3rem", "color": "var(--accent)"}}>We will reply faster than your ex. 🏃💨 And our fast replies are our ultimate flex! 💪</p>
        </div>
    </section>

    
    <section className="section section-alt" id="contact">
        <div className="section-header animate-in">
            <span className="section-tag glass">GET IN TOUCH</span>
            <h2 className="section-title">Let's <span className="gradient-text">Connect</span></h2>
            <p className="section-subtitle">Ready to bring your vision to life? Reach out and let's discuss your project.</p>
            <p className="section-subtitle" style={{"marginTop": "0.5rem", "fontFamily": "'Caveat', cursive", "fontSize": "1.4rem", "color": "var(--accent)"}}>Ready to make your content pop? 🍿 Slide into our DMs and let's make those heaters drop! 🔥</p>
        </div>

        <div className="contact-grid">
            <div className="contact-card glass tilt-card animate-in">
                <div className="contact-icon">
                    <i className="ri-user-star-line"></i>
                </div>
                <div className="contact-info">
                    <h4>Founder</h4>
                    <p><strong>ESHAN</strong> (Sankalpa Sarkar)</p>
                </div>
            </div>
            <div className="contact-card glass tilt-card animate-in">
                <div className="contact-icon">
                    <i className="ri-phone-line"></i>
                </div>
                <div className="contact-info">
                    <h4>Phone</h4>
                    <p><a href="tel:+919239048684">+91 9239048684</a></p>
                </div>
            </div>
            <div className="contact-card glass tilt-card animate-in">
                <div className="contact-icon">
                    <i className="ri-mail-line"></i>
                </div>
                <div className="contact-info">
                    <h4>Email</h4>
                    <p><a href="mailto:sankalpa@evxstudio.in">sankalpa@evxstudio.in</a></p>
                </div>
            </div>
            <div className="contact-card glass tilt-card animate-in">
                <div className="contact-icon">
                    <i className="ri-map-pin-2-line"></i>
                </div>
                <div className="contact-info">
                    <h4>Location</h4>
                    <p>West Bengal, India</p>
                </div>
            </div>
        </div>
    </section>

    
    <section className="section closing-cta-section">
        <div className="closing-cta glass animate-in">
            <div className="closing-cta-icon">
                <i className="ri-film-line"></i>
            </div>
            <h2>Stop editing your own content.</h2>
            <p className="closing-cta-year">It's <span className="gradient-text">2026</span>.</p>
            <p className="closing-cta-text">Let the pros handle the <strong>Keyframes</strong> while you handle the <strong>business</strong>.</p>
            <a href="https://wa.me/+919239048684?text=Hi%2C%20I%20want%20to%20outsource%20my%20editing%20to%20EVX%20STUDIO" target="_blank" className="btn-primary closing-cta-btn">
                <i className="ri-rocket-2-fill"></i> Let's Get Started
            </a>
        </div>
    </section>
    
    <section className="section consultation-section animate-in" id="consultation">
        <div className="glass consultation-card">
            <h2 className="section-title">Get a 100% Free <br /><span className="gradient-text">Consultation & Quotation</span></h2>
            <p className="section-subtitle">Speak with our expert video editors and strategists today. Let's discuss your project, your goals, and how we can help you grow—no strings attached.</p>
            <a href="https://wa.me/+919239048684" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-large cta-glow">
                Talk Now <i className="ri-whatsapp-line"></i>
            </a>
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
                    <li><a href="#services">Services</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li><a href="#why-us">Why Us</a></li>
                    <li><a href="/career">Career</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
            <div className="footer-links-group">
                <h4>Services</h4>
                <ul className="footer-links">
                    <li><a href="#pricing">YouTube Shorts</a></li>
                    <li><a href="#pricing">Corporate Videos</a></li>
                    <li><a href="#pricing">SaaS Animation</a></li>
                    <li><a href="#pricing">Graphic Design</a></li>
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

