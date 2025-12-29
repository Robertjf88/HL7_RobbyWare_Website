import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  Search, 
  BookOpen, 
  CreditCard, 
  Network, 
  ChevronDown, 
  ChevronUp, 
  Mail, 
  Cpu, 
  Wifi, 
  Monitor,
  HelpCircle
} from 'lucide-react';
import { SupportProps } from '../types';

export const Support: React.FC<SupportProps> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: "Is my patient data sent to the cloud?",
      answer: "No. HL7 Workbench processes data locally on your machine. Data is only sent to the cloud (Google Gemini) if you explicitly use the \"Generative AI\" or \"FHIR Converter\" features. You must enable the \"Privacy Shield\" to redact PHI before using AI features."
    },
    {
      question: "Why do I need a Google API Key?",
      answer: "The AI features (Bulk Data Gen, FHIR Conversion) use Google's Gemini Pro models. To keep the software free, we ask users to bring their own API Key. You are billed directly by Google for usage (usually pennies per month)."
    },
    {
      question: "The MLLP Listener won't start.",
      answer: "Check if another application (like a local interface engine or Mirth Connect) is already using port 2575. You can change the port in the \"Connect\" tab settings within the application."
    },
    {
      question: "Does this support HL7 v3 or CDA?",
      answer: "Yes! Use the Multi-Format tab to parse XML-based CDA documents and view DICOM headers."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-sky-500/30 selection:text-sky-100 pb-20">
      
      {/* Header */}
      <nav className="sticky top-0 w-full z-50 glass-panel border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
             <button 
               onClick={onBack}
               className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group cursor-pointer"
             >
               <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
               <span className="font-medium">Back to Home</span>
             </button>
             <div className="flex items-center gap-2">
                <HelpCircle className="w-5 h-5 text-sky-500" />
                <span className="font-semibold text-white">Help Center</span>
             </div>
          </div>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
        
        {/* Hero */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">How can we help you?</h1>
          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">Documentation, troubleshooting, and support for HL7 Workbench.</p>
          
          <div className="max-w-2xl mx-auto relative group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-slate-500 group-focus-within:text-sky-500 transition-colors" />
            </div>
            <input
              type="text"
              className="block w-full pl-12 pr-4 py-4 bg-slate-900 border border-slate-800 rounded-xl leading-5 text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all shadow-lg"
              placeholder="Search for articles (e.g. MLLP, API Keys, Redaction)..."
            />
          </div>
        </div>

        {/* Quick Access Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-20">
          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-sky-500/30 hover:bg-slate-900 transition-all group cursor-pointer">
            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-sky-500/10 transition-colors">
              <BookOpen className="w-6 h-6 text-sky-500" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">User Guide</h3>
            <p className="text-sm text-slate-400">Learn how to use the Analyzer, Scripting Engine, and FHIR Converter.</p>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-violet-500/30 hover:bg-slate-900 transition-all group cursor-pointer">
            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-violet-500/10 transition-colors">
              <CreditCard className="w-6 h-6 text-violet-500" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Gemini API Keys</h3>
            <p className="text-sm text-slate-400">How to set up your Google Cloud billing to enable AI features.</p>
          </div>

          <div className="bg-slate-900/50 p-6 rounded-2xl border border-slate-800 hover:border-orange-500/30 hover:bg-slate-900 transition-all group cursor-pointer">
            <div className="w-12 h-12 bg-slate-800 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500/10 transition-colors">
              <Network className="w-6 h-6 text-orange-500" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Troubleshoot MLLP</h3>
            <p className="text-sm text-slate-400">Fixing firewall issues and port conflicts on localhost:2575.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* FAQ Section */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-white mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`border border-slate-800 rounded-xl overflow-hidden transition-all ${openFaq === index ? 'bg-slate-900/80 ring-1 ring-sky-500/20' : 'bg-slate-900/30 hover:bg-slate-900/50'}`}
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  >
                    <span className={`font-medium ${openFaq === index ? 'text-sky-400' : 'text-slate-200'}`}>
                      {faq.question}
                    </span>
                    {openFaq === index ? (
                      <ChevronUp className="w-5 h-5 text-sky-500" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-slate-500" />
                    )}
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-6 text-slate-400 text-sm leading-relaxed border-t border-slate-800/50 pt-4">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar / Specs */}
          <div className="space-y-8">
            <div className="bg-slate-900/50 border border-slate-800 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-white mb-6">System Requirements</h3>
              <ul className="space-y-4">
                <li className="flex gap-4 items-start">
                  <div className="mt-1 bg-slate-800 p-1.5 rounded-md">
                    <Monitor className="w-4 h-4 text-sky-500" />
                  </div>
                  <div>
                    <strong className="block text-slate-200 text-sm">Operating System</strong>
                    <span className="text-slate-400 text-sm">Windows 10/11 (64-bit)</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="mt-1 bg-slate-800 p-1.5 rounded-md">
                    <Cpu className="w-4 h-4 text-sky-500" />
                  </div>
                  <div>
                    <strong className="block text-slate-200 text-sm">Memory (RAM)</strong>
                    <span className="text-slate-400 text-sm">8GB Minimum<br/>(16GB for bulk processing)</span>
                  </div>
                </li>
                <li className="flex gap-4 items-start">
                  <div className="mt-1 bg-slate-800 p-1.5 rounded-md">
                    <Wifi className="w-4 h-4 text-sky-500" />
                  </div>
                  <div>
                    <strong className="block text-slate-200 text-sm">Network</strong>
                    <span className="text-slate-400 text-sm">Internet required for AI features. MLLP works offline.</span>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-2xl p-6 text-center">
              <h3 className="text-lg font-bold text-white mb-2">Still need help?</h3>
              <p className="text-sm text-slate-400 mb-6">Our team helps integration engineers shipping to production every day.</p>
              <a 
                href="mailto:support@robbyware.com" 
                className="inline-flex items-center justify-center gap-2 w-full bg-slate-800 hover:bg-slate-700 text-white font-medium py-3 rounded-lg transition-colors border border-slate-700"
              >
                <Mail className="w-4 h-4" />
                Contact Support
              </a>
              <p className="text-xs text-slate-500 mt-4">Average response time: 24 hours.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};