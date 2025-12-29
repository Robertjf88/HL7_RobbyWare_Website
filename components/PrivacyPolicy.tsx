import React, { useEffect } from 'react';
import { ArrowLeft, Shield } from 'lucide-react';
import { PrivacyPolicyProps } from '../types';

export const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ onBack }) => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-sky-500/30 selection:text-sky-100 pb-20">
      
      {/* Header */}
      <nav className="sticky top-0 w-full z-50 glass-panel border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
             <button 
               onClick={onBack}
               className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group cursor-pointer"
             >
               <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
               <span className="font-medium">Back to Home</span>
             </button>
             <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-emerald-400" />
                <span className="font-semibold text-white">Privacy Policy</span>
             </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-slate-400">Last Updated: {currentDate}</p>
        </div>

        <div className="space-y-12 text-lg leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-sky-500 text-sm font-mono">1</span>
              Introduction
            </h2>
            <p>
              Welcome to <strong>HL7 Workbench</strong> ("we," "our," or "us"), a product of <strong>RobbyWare</strong>. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about this privacy notice or our practices with regards to your personal information, please contact us at <a href="mailto:support@robbyware.com" className="text-sky-400 hover:underline">support@robbyware.com</a>.
            </p>
            <p className="mt-4">
              This Privacy Policy applies to all information collected through our website and desktop application (HL7 Workbench) and any related services, sales, marketing, or events.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-sky-500 text-sm font-mono">2</span>
              Information We Collect
            </h2>
            <p className="mb-4">
              We collect personal information that you voluntarily provide to us when you register on the website, express an interest in obtaining information about us or our products and services, participate in activities on the website, or otherwise contact us.
            </p>
            <ul className="space-y-4 text-slate-400 bg-slate-900/40 p-6 rounded-xl border border-slate-800">
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2.5 flex-shrink-0"></div>
                <span><strong>Personal Information Provided by You:</strong> Name, email address, mailing address, phone number, usernames, passwords, and similar contact data.</span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2.5 flex-shrink-0"></div>
                <span><strong>Payment Data:</strong> We collect data necessary to process your payment if you make purchases, such as your payment instrument number, and the security code associated with your payment instrument. All payment data is stored by our payment processor (e.g., Stripe).</span>
              </li>
              <li className="flex gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-sky-500 mt-2.5 flex-shrink-0"></div>
                <span><strong>Log and Usage Data:</strong> Log data is service-related, diagnostic, usage, and performance information our servers automatically collect when you access or use our website. This may include your IP address, device information, browser type, and settings.</span>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-sky-500 text-sm font-mono">3</span>
              How We Use Your Information
            </h2>
            <p className="mb-4">
              We use personal information collected via our website for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
            </p>
            <ul className="grid md:grid-cols-2 gap-4">
               {[
                 "To facilitate account creation and logon processes.",
                 "To send you marketing and promotional communications.",
                 "To fulfill and manage your orders.",
                 "To improve our website functionality and user experience.",
                 "To respond to user inquiries/offer support.",
                 "To enforce our terms, conditions, and policies."
               ].map((item, i) => (
                 <li key={i} className="bg-slate-900/50 p-4 rounded-lg border border-slate-800 text-sm flex items-center gap-3">
                   <div className="w-1 h-4 bg-sky-500/50 rounded-full"></div>
                   {item}
                 </li>
               ))}
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-sky-500 text-sm font-mono">4</span>
              Cookies and Tracking Technologies
            </h2>
             <p className="mb-4">
              We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information.
            </p>
            <div className="bg-slate-900/50 p-6 rounded-xl border border-slate-800">
                <h4 className="font-semibold text-white mb-2">Google Analytics</h4>
                <p className="text-sm">We use Google Analytics to analyze user traffic on our site. Google Analytics uses cookies to collect information such as your IP address and the pages you visit. You can choose to have your computer warn you each time a cookie is being sent, or you can choose to turn off all cookies via your browser settings.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-sky-500 text-sm font-mono">5</span>
              How We Share Your Information
            </h2>
            <p className="mb-4">
              We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information unless we provide users with advance notice. We may verify and share your data:
            </p>
            <ul className="space-y-4">
                <li className="p-4 rounded-lg border border-slate-800 bg-slate-900/30">
                    <strong className="text-white block mb-1">Compliance with Laws</strong>
                    <span className="text-sm">We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.</span>
                </li>
                <li className="p-4 rounded-lg border border-slate-800 bg-slate-900/30">
                    <strong className="text-white block mb-1">Business Transfers</strong>
                    <span className="text-sm">We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</span>
                </li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
               <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-sky-500 text-sm font-mono">6</span>
               Contact Us
            </h2>
            <p>
              If you have questions or comments about this policy, you may contact us by email at <a href="mailto:support@robbyware.com" className="text-sky-400 hover:underline">support@robbyware.com</a> or by post to:
            </p>
            <address className="mt-6 not-italic text-slate-400 bg-slate-900 p-6 rounded-xl border border-slate-800 inline-block min-w-[300px]">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-800">
                <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center">
                  <Shield className="w-4 h-4 text-sky-500" />
                </div>
                <strong className="text-white text-lg">RobbyWare</strong>
              </div>
              <span className="block leading-relaxed">
                123 Innovation Drive<br />
                San Francisco, CA 94103<br />
                United States
              </span>
            </address>
          </section>

        </div>
        
        <div className="mt-20 pt-10 border-t border-slate-800 text-center text-slate-500 text-sm">
           &copy; {new Date().getFullYear()} RobbyWare. All rights reserved.
        </div>
      </div>
    </div>
  );
};