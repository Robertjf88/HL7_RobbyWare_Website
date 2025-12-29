import React, { useEffect } from 'react';
import { ArrowLeft, FileText, AlertTriangle } from 'lucide-react';
import { TermsOfServiceProps } from '../types';

export const TermsOfService: React.FC<TermsOfServiceProps> = ({ onBack }) => {
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
                <FileText className="w-5 h-5 text-sky-400" />
                <span className="font-semibold text-white">Terms of Service</span>
             </div>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Terms of Service</h1>
          <p className="text-slate-400">Last Updated: {currentDate}</p>
        </div>

        <div className="space-y-12 text-lg leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-sky-500 text-sm font-mono">1</span>
              Acceptance of Terms
            </h2>
            <p>
              By accessing the website at <span className="text-sky-400">www.robbyware.com</span>, downloading the HL7 Workbench software ("Software"), or using any services provided by RobbyWare ("we," "us," or "our"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our website or Software.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-sky-500 text-sm font-mono">2</span>
              Description of Service
            </h2>
            <p>
              RobbyWare provides developer tools for healthcare integration professionals, including the HL7 Workbench desktop application. The Software allows users to parse, edit, anonymize, and transmit HL7 v2, FHIR, and DICOM data.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-sky-500 text-sm font-mono">3</span>
              License to Use Software
            </h2>
            <p className="mb-4">
              Subject to your compliance with these Terms, RobbyWare grants you a limited, non-exclusive, non-transferable, revocable license to download, install, and use the Software for your professional or personal use.
            </p>
            <p className="mb-2">You agree not to:</p>
            <ul className="list-disc pl-6 space-y-2 text-slate-400">
              <li>Reverse engineer, decompile, or disassemble the Software.</li>
              <li>Sell, rent, lease, or sublicense the Software to third parties without our express written consent.</li>
              <li>Use the Software to create a competing product.</li>
              <li>Use the Software for any illegal purpose or in violation of any local, state, national, or international law.</li>
            </ul>
          </section>

          <section className="bg-red-950/20 border border-red-900/50 p-6 rounded-xl">
            <h2 className="text-2xl font-bold text-red-200 mb-4 flex items-center gap-3">
              <AlertTriangle className="w-6 h-6 text-red-500" />
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-red-900/50 text-red-400 text-sm font-mono">4</span>
              Healthcare Data and HIPAA Compliance
            </h2>
            <div className="space-y-4 text-red-100/80">
              <p>
                <strong>CRITICAL NOTICE:</strong> You acknowledge that you are solely responsible for compliance with the Health Insurance Portability and Accountability Act (HIPAA), GDPR, and other data privacy regulations when using this Software.
              </p>
              <ul className="space-y-3">
                <li className="flex gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 flex-shrink-0"></div>
                   <span><strong>Local Processing:</strong> The Software is designed to process data locally on your machine. However, certain features (such as AI generation and FHIR conversion) require sending data to third-party APIs.</span>
                </li>
                <li className="flex gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 flex-shrink-0"></div>
                   <span><strong>PHI Responsibility:</strong> You agree not to transmit Protected Health Information (PHI) or Personally Identifiable Information (PII) to external AI endpoints unless you have properly anonymized or redacted the data using the "Privacy Shield" features provided, or you have your own Business Associate Agreements (BAA) in place with the AI provider.</span>
                </li>
                <li className="flex gap-3">
                   <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2.5 flex-shrink-0"></div>
                   <span><strong>Tool Limitations:</strong> While the "Privacy Shield" and "Sanitize" features are designed to assist in de-identification, RobbyWare makes no warranty that these features will remove 100% of sensitive identifiers in all cases. Verification of data anonymity is your sole responsibility.</span>
                </li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-sky-500 text-sm font-mono">5</span>
              Artificial Intelligence (AI) Features
            </h2>
            <p className="mb-4">
              The Software integrates with third-party Artificial Intelligence platforms (e.g., Google Gemini) to provide features such as Bulk Data Generation and FHIR Conversion.
            </p>
             <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-900/40 p-5 rounded-lg border border-slate-800">
                  <h4 className="font-semibold text-white mb-2">Accuracy</h4>
                  <p className="text-sm">AI models can hallucinate or produce inaccurate results. You agree to review and verify all AI-generated output (including clinical data, code, and FHIR resources) before using it in any production or clinical environment.</p>
                </div>
                <div className="bg-slate-900/40 p-5 rounded-lg border border-slate-800">
                  <h4 className="font-semibold text-white mb-2">API Keys</h4>
                  <p className="text-sm">To use advanced AI features, you may be required to provide your own API Key. You are responsible for any usage charges, limits, or terms of service imposed by the AI provider (e.g., Google Cloud) associated with your API Key.</p>
                </div>
             </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-sky-500 text-sm font-mono">6</span>
              Medical Disclaimer
            </h2>
            <p className="mb-4 text-slate-300">
              The Software is a developer tool, not a medical device. It is intended for use by IT professionals, integration engineers, and analysts for testing, data migration, and interface development.
            </p>
            <p className="font-semibold text-white">
              The Software must not be used for direct patient diagnosis, treatment, or clinical decision-making. RobbyWare is not responsible for any clinical errors or patient harm resulting from the misuse of data processed by this Software.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-sky-500 text-sm font-mono">7</span>
              Intellectual Property
            </h2>
            <p>
              The Software, website, text, graphics, logos, and code are the property of RobbyWare and are protected by copyright, trademark, and other intellectual property laws.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-sky-500 text-sm font-mono">8</span>
              Limitation of Liability
            </h2>
            <div className="bg-slate-900 p-6 rounded-xl border border-slate-800 text-sm font-mono text-slate-400">
              TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL ROBBYWARE BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, USE, OR GOODWILL, ARISING OUT OF OR IN CONNECTION WITH YOUR USE OF THE SOFTWARE OR WEBSITE.
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-sky-500 text-sm font-mono">9</span>
              Governing Law
            </h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the State of California, without regard to its conflict of law provisions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-800 text-sky-500 text-sm font-mono">10</span>
              Contact Us
            </h2>
            <p className="mb-6">
              If you have any questions about these Terms, please contact us at:
            </p>
            <address className="not-italic text-slate-400 bg-slate-900 p-6 rounded-xl border border-slate-800 inline-block min-w-[300px]">
              <div className="flex items-center gap-2 mb-4 pb-4 border-b border-slate-800">
                <div className="w-8 h-8 bg-slate-800 rounded flex items-center justify-center">
                  <FileText className="w-4 h-4 text-sky-500" />
                </div>
                <strong className="text-white text-lg">RobbyWare Legal</strong>
              </div>
              <span className="block leading-relaxed">
                <a href="mailto:support@robbyware.com" className="text-sky-400 hover:underline">support@robbyware.com</a><br />
                123 Innovation Drive<br />
                San Francisco, CA 94103
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