
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

    
    <main className="terms-content" style={{"marginTop": "80px"}}>
        <h1>Terms and Conditions</h1>
        <p className="subtitle">For brands, creators, and business owners</p>
        
        <p><strong>Last updated: 11 July 2026</strong></p>
        
        <p>This document sets out the service terms that apply when a client places an order with EVX Studio for video editing services. By placing an order, approving a quotation, making an advance payment, or sharing project files for work, the client confirms acceptance of these terms.</p>

        <table className="terms-table">
            <thead>
                <tr>
                    <th>Category</th>
                    <th>Key Point</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Client eligibility</td>
                    <td>Services are provided only to brands, creators, and business owners. EVX Studio does not work with middlemen, resellers, or agencies.</td>
                </tr>
                <tr>
                    <td>Payment</td>
                    <td>50% advance payment is required to place the order. The remaining 50% is due at final handover.</td>
                </tr>
                <tr>
                    <td>Watermark</td>
                    <td>Preview footage may carry a watermark until the final payment is completed.</td>
                </tr>
                <tr>
                    <td>Revisions</td>
                    <td>Free revisions apply only when EVX Studio missed a clear instruction that was provided before work began.</td>
                </tr>
                <tr>
                    <td>Refund</td>
                    <td>A 100% refund may apply if EVX Studio fails to deliver, or if eligible quality issues are confirmed after internal review. Bank and payment method charges are excluded.</td>
                </tr>
            </tbody>
        </table>

        <h2>1. Client Eligibility</h2>
        <p>EVX Studio provides video editing services only to direct clients, including brands, creators, business owners, and official representatives of such businesses.</p>
        <p>EVX Studio does not provide services to middlemen, resellers, third-party agencies, or any person or company ordering work for the purpose of reselling or outsourcing it to another client.</p>
        <p>If EVX Studio discovers that a client is acting as a middleman, reseller, or video editing and post production company after the order has started, EVX Studio may pause or cancel the order and review any payment, delivery, or refund request based on the stage of work completed.</p>

        <h2>2. Order Confirmation and Project Scope</h2>
        <p>Before starting work, the client must provide clear project requirements, including video purpose, script, footage, brand guidelines, references, format, duration, deadline, captions or text requirements, and any other necessary instructions.</p>
        <p>The order scope will be based on the instructions, assets, and requirements shared by the client before work begins. Any new requirement added after the work has started may be treated as additional work and may require an additional fee.</p>
        <p>EVX Studio will create the video or clip according to the client's provided instructions and approved scope.</p>

        <h2>3. Payment Terms</h2>
        <p>A 50% advance upfront payment is required at the time of placing the order. Work will begin only after the advance payment is received and confirmed.</p>
        <p>The remaining 50% payment must be completed at the time of final handover and before delivery of the final unwatermarked files.</p>
        <p>Any bank charges, SWIFT charges, payment gateway charges, currency conversion charges, or payment method fees are the responsibility of the client unless agreed otherwise in writing.</p>

        <h2>4. Watermark and File Handover</h2>
        <p>Until the final payment is completed, EVX Studio may share preview files with a visible watermark for review and approval purposes.</p>
        <p>Final unwatermarked files will be handed over only after the remaining payment has been received and confirmed.</p>
        <p>The client must not publish, upload, distribute, or commercially use any watermarked preview file unless EVX Studio provides written permission.</p>

        <h2>5. Client Responsibility for Information and Content</h2>
        <p>The client is fully responsible for the accuracy, legality, completeness, and truthfulness of all information, claims, footage, images, audio, scripts, captions, statistics, product details, testimonials, or any other content provided to EVX Studio.</p>
        <p>EVX Studio is not responsible for misinformation, incorrect claims, misleading statements, copyright issues, trademark issues, licensing issues, or any other issue caused by content or instructions supplied by the client.</p>
        <p>EVX Studio will edit and produce the video according to the client's requirements and materials. The client must review the final content carefully before approval, publishing, or distribution.</p>

        <h2>6. Free Revision Policy</h2>
        <p>Free revisions will be provided only when EVX Studio missed or failed to follow a clear instruction that was provided by the client before the work began.</p>
        <p>Free revisions do not apply when the requested change is based on new instructions, changed preferences, unclear instructions, incomplete information, incorrect information, or additional requirements shared after the video or clip is ready.</p>
        <p>The client must submit revision requests clearly and in one consolidated message wherever possible, with timestamps or exact references when relevant.</p>

        <h2>7. Paid Revision Policy</h2>
        <p>If the video or clip is ready and the client requests changes because the client provided wrong information, incomplete information, unclear instructions, changed preferences, or new instructions, the changes will be treated as paid revisions.</p>
        <p>If the requested changes are minimal, the client must pay an additional revision fee equal to 20% of the total bill amount.</p>
        <p>If the requested changes are significant, complex, or require major rework, the revision fee may cost up to 70% of the total bill amount, depending on the amount of work required.</p>
        <p>EVX Studio will review the revision request and inform the client whether the change is minimal or significant before proceeding with paid revision work.</p>

        <h2>8. Refund Policy</h2>
        <p>EVX Studio offers a 100% refund policy only if EVX Studio fails to deliver the agreed files, or if the quality of the delivered work does not match the agreed requirements and the refund request is approved after review by the EVX Studio team.</p>
        <p>A refund is not automatically applicable for subjective preference changes, unclear instructions, incorrect information provided by the client, delay caused by the client, change of mind, or new requirements after work has started.</p>
        <p>SWIFT charges, bank charges, payment gateway fees, currency conversion charges, transaction charges, and any payment method charges are not included in the refund amount.</p>
        <p>In case of an approved refund, EVX Studio will refund only the exact net amount received in its bank statement or payment account. For example, if the client sends an amount and payment charges are deducted before the funds reach EVX Studio, only the amount actually received by EVX Studio will be refunded.</p>

        <h2>9. Refund Review and Eligibility</h2>
        <p>Refund requests must be submitted with a clear explanation of the issue and, where relevant, examples showing how the delivery failed to match the agreed requirements.</p>
        <p>The dedicated EVX Studio team will review the delivered video or clip, the original instructions, the project scope, and the client's claim before deciding whether a refund is eligible.</p>
        <p>If the refund is approved, EVX Studio will initiate the refund through a suitable payment method. Any processing time required by banks or payment providers is outside the control of EVX Studio.</p>

        <h2>10. Delivery, Review, and Approval</h2>
        <p>Delivery timelines depend on project complexity, availability of client materials, clarity of instructions, and timely communication from the client.</p>
        <p>The client should review previews and final files carefully and share feedback within a reasonable time. Delays in feedback, file sharing, or payment may delay final delivery.</p>
        <p>Once the client approves the final delivery or uses or publishes the delivered file, the work may be treated as accepted unless a clear eligible issue is reported immediately.</p>

        <h2>11. Communication and Project Materials</h2>
        <p>The client must provide all project files, instructions, access, references, and brand assets required for the project.</p>
        <p>EVX Studio is not responsible for delays, quality limitations, or missing elements caused by low-quality footage, missing files, corrupted files, late information, or incomplete client materials.</p>
        <p>Any file storage, raw project file sharing, or source file delivery must be agreed separately in writing if required.</p>

        <h2>12. Acceptance of Terms</h2>
        <p>By placing an order, making the advance payment, sharing project files, or asking EVX Studio to begin work, the client confirms that they have read, understood, and accepted these Terms and Conditions.</p>
        <p>These terms may be updated by EVX Studio from time to time. The terms applicable to a project will be the terms shared or agreed at the time of order confirmation unless both parties agree otherwise in writing.</p>
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

