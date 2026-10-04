import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function Terms() {
  const slideInVar = {
    hidden: { opacity: 0, scale: 0.9, y: 50, rotateX: 15 },
    visible: { opacity: 1, scale: 1, y: 0, rotateX: 0, transition: { duration: 1 } }
  };

  return (
    <div className="pt-32 pb-20 container mx-auto px-6 lg:px-12 min-h-screen relative z-10" style={{ perspective: 1000 }}>
      <div className="absolute inset-0 bg-amber-50/10 pointer-events-none -z-10"></div>
      <motion.div 
        initial="hidden" animate="visible" variants={slideInVar}
        className="bg-amber-100/10 backdrop-blur-md border border-amber-200/30 rounded-3xl shadow-2xl p-8 md:p-16 max-w-5xl mx-auto"
      >
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6 border-b border-amber-200/50 pb-8">
          <div>
            <h1 className="text-4xl md:text-6xl font-heading font-black text-brandDark mb-2">Terms and Conditions</h1>
            <p className="text-slate-500 font-medium">For brands, creators, and business owners. Last updated: 11 July 2026</p>
          </div>
          <a 
            href="https://drive.google.com/file/d/1XiYVty-CS3bycy1JrVW7vaGda7Ojs4Dw/view?usp=drive_link" 
            target="_blank" 
            rel="noreferrer" 
            className="px-6 py-3 bg-brandDark text-white font-bold font-heading uppercase tracking-widest text-sm rounded-full hover:bg-amber-600 transition-colors shadow-lg flex items-center gap-2 whitespace-nowrap"
          >
            <Download className="w-4 h-4" /> Download PDF
          </a>
        </div>
        
        <div className="prose prose-lg max-w-none text-slate-800 space-y-8">
          <p className="text-xl font-medium text-brandDark">This document sets out the service terms that apply when a client places an order with EVX Studio for video editing services. By placing an order, approving a quotation, making an advance payment, or sharing project files for work, the client confirms acceptance of these terms.</p>
          
          <div className="overflow-x-auto my-8 border border-amber-200/50 rounded-xl shadow-lg bg-white/40">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-white/60 text-brandDark font-bold">
                  <th className="p-4 border-b border-amber-200/50 w-1/4">Category</th>
                  <th className="p-4 border-b border-amber-200/50">Key Point</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-amber-200/50">
                <tr><td className="p-4 font-bold text-brandDark">Client eligibility</td><td className="p-4 font-medium">Services are provided only to brands, creators, and business owners. EVX Studio does not work with middlemen, resellers, or agencies.</td></tr>
                <tr><td className="p-4 font-bold text-brandDark">Payment</td><td className="p-4 font-medium">50% advance payment is required to place the order. The remaining 50% is due at final handover.</td></tr>
                <tr><td className="p-4 font-bold text-brandDark">Watermark</td><td className="p-4 font-medium">Preview footage may carry a watermark until the final payment is completed.</td></tr>
                <tr><td className="p-4 font-bold text-brandDark">Revisions</td><td className="p-4 font-medium">Free revisions apply only when EVX Studio missed a clear instruction that was provided before work began.</td></tr>
                <tr><td className="p-4 font-bold text-brandDark">Refund</td><td className="p-4 font-medium">A 100% refund may apply if EVX Studio fails to deliver, or if eligible quality issues are confirmed after internal review. Bank and payment method charges are excluded.</td></tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-2xl font-black font-heading text-brandDark mt-10 mb-4">1. Client Eligibility</h2>
          <p>EVX Studio provides video editing services only to direct clients, including brands, creators, business owners, and official representatives of such businesses.</p>
          <p>EVX Studio does not provide services to middlemen, resellers, third-party agencies, or any person or company ordering work for the purpose of reselling or outsourcing it to another client.</p>
          <p>If EVX Studio discovers that a client is acting as a middleman, reseller, or agency after the order has started, EVX Studio may pause or cancel the order and review any payment, delivery, or refund request based on the stage of work completed.</p>

          <h2 className="text-2xl font-black font-heading text-brandDark mt-10 mb-4">2. Order Confirmation and Project Scope</h2>
          <p>Before starting work, the client must provide clear project requirements, including video purpose, script, footage, brand guidelines, references, format, duration, deadline, captions or text requirements, and any other necessary instructions.</p>
          <p>The order scope will be based on the instructions, assets, and requirements shared by the client before work begins. Any new requirement added after the work has started may be treated as additional work and may require an additional fee.</p>
          <p>EVX Studio will create the video or clip according to the client's provided instructions and approved scope.</p>

          <h2 className="text-2xl font-black font-heading text-brandDark mt-10 mb-4">3. Payment Terms</h2>
          <p>A 50% advance upfront payment is required at the time of placing the order. Work will begin only after the advance payment is received and confirmed.</p>
          <p>The remaining 50% payment must be completed at the time of final handover and before delivery of the final unwatermarked files.</p>
          <p>Any bank charges, SWIFT charges, payment gateway charges, currency conversion charges, or payment method fees are the responsibility of the client unless agreed otherwise in writing.</p>

          <h2 className="text-2xl font-black font-heading text-brandDark mt-10 mb-4">4. Watermark and File Handover</h2>
          <p>Until the final payment is completed, EVX Studio may share preview files with a visible watermark for review and approval purposes.</p>
          <p>Final unwatermarked files will be handed over only after the remaining payment has been received and confirmed.</p>
          <p>The client must not publish, upload, distribute, or commercially use any watermarked preview file unless EVX Studio provides written permission.</p>

          <h2 className="text-2xl font-black font-heading text-brandDark mt-10 mb-4">5. Client Responsibility for Information and Content</h2>
          <p>The client is fully responsible for the accuracy, legality, completeness, and truthfulness of all information, claims, footage, images, audio, scripts, captions, statistics, product details, testimonials, or any other content provided to EVX Studio.</p>
          <p>EVX Studio is not responsible for misinformation, incorrect claims, misleading statements, copyright issues, trademark issues, licensing issues, or any other issue caused by content or instructions supplied by the client.</p>
          <p>EVX Studio will edit and produce the video according to the client's requirements and materials. The client must review the final content carefully before approval, publishing, or distribution.</p>

          <h2 className="text-2xl font-black font-heading text-brandDark mt-10 mb-4">6. Free Revision Policy</h2>
          <p>Free revisions will be provided only when EVX Studio missed or failed to follow a clear instruction that was provided by the client before the work began.</p>
          <p>Free revisions do not apply when the requested change is based on new instructions, changed preferences, unclear instructions, incomplete information, incorrect information, or additional requirements shared after the video or clip is ready.</p>
          <p>The client must submit revision requests clearly and in one consolidated message wherever possible, with timestamps or exact references when relevant.</p>

          <h2 className="text-2xl font-black font-heading text-brandDark mt-10 mb-4">7. Paid Revision Policy</h2>
          <p>If the video or clip is ready and the client requests changes because the client provided wrong information, incomplete information, unclear instructions, changed preferences, or new instructions, the changes will be treated as paid revisions.</p>
          <p>If the requested changes are minimal, the client must pay an additional revision fee equal to 20% of the total bill amount.</p>
          <p>If the requested changes are significant, complex, or require major rework, the revision fee may cost up to 70% of the total bill amount, depending on the amount of work required.</p>
          <p>EVX Studio will review the revision request and inform the client whether the change is minimal or significant before proceeding with paid revision work.</p>

          <h2 className="text-2xl font-black font-heading text-brandDark mt-10 mb-4">8. Refund Policy</h2>
          <p>EVX Studio offers a 100% refund policy only if EVX Studio fails to deliver the agreed files, or if the quality of the delivered work does not match the agreed requirements and the refund request is approved after review by the EVX Studio team.</p>
          <p>A refund is not automatically applicable for subjective preference changes, unclear instructions, incorrect information provided by the client, delay caused by the client, change of mind, or new requirements after work has started.</p>
          <p>SWIFT charges, bank charges, payment gateway fees, currency conversion charges, transaction charges, and any payment method charges are not included in the refund amount.</p>
          <p>In case of an approved refund, EVX Studio will refund only the exact net amount received in its bank statement or payment account. For example, if the client sends an amount and payment charges are deducted before the funds reach EVX Studio, only the amount actually received by EVX Studio will be refunded.</p>
          <p>If the refund is approved, EVX Studio will initiate the refund through a suitable payment method. Any processing time required by banks or payment providers is outside the control of EVX Studio.</p>

          <h2 className="text-2xl font-black font-heading text-brandDark mt-10 mb-4">9. Refund Review and Eligibility</h2>
          <p>Refund requests must be submitted with a clear explanation of the issue and, where relevant, examples showing how the delivery failed to match the agreed requirements.</p>
          <p>The dedicated EVX Studio team will review the delivered video or clip, the original instructions, the project scope, and the client's claim before deciding whether a refund is eligible.</p>

          <h2 className="text-2xl font-black font-heading text-brandDark mt-10 mb-4">Additional Terms</h2>

          <h2 className="text-2xl font-black font-heading text-brandDark mt-10 mb-4">10. Delivery, Review, and Approval</h2>
          <p>Delivery timelines depend on project complexity, availability of client materials, clarity of instructions, and timely communication from the client.</p>
          <p>The client should review previews and final files carefully and share feedback within a reasonable time. Delays in feedback, file sharing, or payment may delay final delivery.</p>
          <p>Once the client approves the final delivery or uses or publishes the delivered file, the work may be treated as accepted unless a clear eligible issue is reported immediately.</p>

          <h2 className="text-2xl font-black font-heading text-brandDark mt-10 mb-4">11. Communication and Project Materials</h2>
          <p>The client must provide all project files, instructions, access, references, and brand assets required for the project.</p>
          <p>EVX Studio is not responsible for delays, quality limitations, or missing elements caused by low-quality footage, missing files, corrupted files, late information, or incomplete client materials.</p>
          <p>Any file storage, raw project file sharing, or source file delivery must be agreed separately in writing if required.</p>

          <h2 className="text-2xl font-black font-heading text-brandDark mt-10 mb-4">12. Acceptance of Terms</h2>
          <p>By placing an order, making the advance payment, sharing project files, or asking EVX Studio to begin work, the client confirms that they have read, understood, and accepted these Terms and Conditions.</p>
          <p>These terms may be updated by EVX Studio from time to time. The terms applicable to a project will be the terms shared or agreed at the time of order confirmation unless both parties agree otherwise in writing.</p>

          <div className="bg-amber-500/10 border border-amber-500/30 p-8 rounded-2xl mt-12 shadow-sm">
            <h3 className="text-xl font-bold font-heading text-brandDark mb-4">Client Acknowledgment</h3>
            <p className="font-medium text-slate-800 mb-6">I confirm that I have read, understood, and accepted the EVX Studio Terms and Conditions for video editing services.</p>
            <div className="space-y-6">
              <div className="flex items-end gap-4"><span className="font-bold w-24">Client Name:</span> <div className="border-b-2 border-brandDark flex-grow"></div></div>
              <div className="flex items-end gap-4"><span className="font-bold w-24">Signature:</span> <div className="border-b-2 border-brandDark flex-grow"></div></div>
              <div className="flex items-end gap-4"><span className="font-bold w-24">Date:</span> <div className="border-b-2 border-brandDark flex-grow"></div></div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
