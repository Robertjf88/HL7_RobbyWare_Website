import React from 'react';
import { 
  Download, 
  Activity, 
  Network, 
  Bot, 
  LogOut,
  Search,
  ShieldCheck,
  Sparkles,
  Terminal,
  Layers,
  Book,
  Archive
} from 'lucide-react';
import { WebsiteProps } from '../types';

export const Website: React.FC<WebsiteProps> = ({ onLogout, onPrivacyClick, onTermsClick, onSupportClick }) => {
  
  const handleDownload = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // Create a temporary link to trigger the download of your real executable
    const link = document.createElement("a");
    // Ensure the file is in the 'public' folder of your source code
    link.href = "./HL7Workbench-Setup.exe"; 
    link.download = "HL7Workbench-Setup.exe";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const features = [
    {
      title: "Instant Visual Parser",
      desc: "Stop counting pipes. Paste raw HL7 v2 messages and instantly get a human-readable breakdown of every segment, field, and component with definitions.",
      icon: <Search className="w-6 h-6 text-sky-400" />
    },
    {
      title: "Local Privacy Shield",
      desc: "Secure by design. Automatically detect and redact or anonymize Patient Health Information (PHI) entirely within your browser before sharing data.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-400" />
    },
    {
      title: "Built-in MLLP Engine",
      desc: "Simulate a real interface engine. Includes a TCP/IP Listener (Server) to receive messages on port 2575 and a Client to send test messages to your EMR.",
      icon: <Network className="w-6 h-6 text-orange-400" />
    },
    {
      title: "Generative AI Tools",
      desc: "Integrated with Google Gemini. Generate realistic bulk test data from clinical scenarios or convert legacy HL7 v2 messages into modern FHIR JSON.",
      icon: <Sparkles className="w-6 h-6 text-ai" />,
      accent: true
    },
    {
      title: "Scripting Sandbox",
      desc: "Need to modify data programmatically? Write JavaScript snippets to transform messages, swap fields, or fix formatting issues on the fly.",
      icon: <Terminal className="w-6 h-6 text-pink-400" />
    },
    {
      title: "Multi-Format Support",
      desc: "Not just for HL7 v2. View and validate binary DICOM image headers (.dcm) and HL7 v3 CDA Clinical Documents (XML) in dedicated viewers.",
      icon: <Layers className="w-6 h-6 text-yellow-400" />
    },
    {
      title: "Smart Dictionary",
      desc: "Don't know what \"PID-18\" is? The built-in dictionary provides definitions for segments and fields, plus context for clinical terms (e.g., \"Sepsis\", \"Trough Level\").",
      icon: <Book className="w-6 h-6 text-blue-400" />
    },
    {
      title: "Custom Profiles",
      desc: "Define custom Z-segments, save your specific validation rules, and export workspace profiles to share configurations with your team.",
      icon: <Archive className="w-6 h-6 text-indigo-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-300 font-sans selection:bg-sky-500/30 selection:text-sky-100">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-panel border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-3">
              {/* Logo Wrapper with SVG Code */}
              <div className="w-10 h-10 flex items-center justify-center relative overflow-hidden rounded-full border border-sky-500/30">
                 <svg viewBox="0 0 200 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="bgGradSm" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#e0f2fe" />
                        <stop offset="100%" stopColor="#bae6fd" />
                      </linearGradient>
                    </defs>
                    <rect width="200" height="200" fill="url(#bgGradSm)" />
                    {/* Paperclip */}
                    <g transform="translate(60, 45) scale(0.8)">
                       <path d="M40 20 V100 A30 30 0 0 0 100 100 V30 A20 20 0 0 0 60 30 V90" 
                             fill="none" stroke="#94a3b8" strokeWidth="22" strokeLinecap="round" />
                       <circle cx="60" cy="50" r="8" fill="#0f172a" />
                       <circle cx="85" cy="50" r="8" fill="#0f172a" />
                    </g>
                    {/* Gear */}
                    <circle cx="40" cy="160" r="30" fill="#0ea5e9" />
                    <text x="40" y="172" fontSize="24" fontWeight="bold" fill="white" textAnchor="middle">R</text>
                 </svg>
              </div>
              <span className="font-bold text-lg text-white tracking-tight">HL7 Workbench</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex gap-6 text-sm font-medium text-slate-400">
                <a href="#features" onClick={(e) => scrollToSection(e, 'features')} className="hover:text-white transition-colors">Features</a>
                <a href="#mllp" onClick={(e) => scrollToSection(e, 'mllp')} className="hover:text-white transition-colors">Connectivity</a>
                <a href="#ai" onClick={(e) => scrollToSection(e, 'ai')} className="hover:text-ai transition-colors">AI Engine</a>
              </div>
              <div className="flex items-center gap-4">
                <button 
                  onClick={handleDownload}
                  className="hidden sm:flex bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all border border-slate-700 items-center gap-2 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>v2.4.0</span>
                </button>
                <button onClick={onLogout} className="text-slate-500 hover:text-white transition-colors p-2" title="Logout">
                  <LogOut className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">
        {/* Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-sky-500/20 blur-[120px] opacity-20 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900/80 border border-slate-700 text-sky-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>
            New: Gemini 2.0 Integration
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight mb-6">
            Master Your <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-400">Healthcare Data</span>
          </h1>
          
          <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The professional developer tool for integration engineers. Parse, anonymize, and transmit HL7, FHIR, and DICOM data directly from your local machine.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button 
              onClick={handleDownload}
              className="w-full sm:w-auto px-8 py-4 bg-sky-600 hover:bg-sky-500 text-white rounded-xl font-semibold shadow-lg shadow-sky-900/20 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 cursor-pointer"
            >
              <Download className="w-5 h-5" />
              Download Installer
            </button>
            <button 
              onClick={(e) => scrollToSection(e, 'features')}
              className="w-full sm:w-auto px-8 py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 rounded-xl font-semibold border border-slate-700 flex items-center justify-center gap-3 transition-all cursor-pointer"
            >
              View Features
            </button>
          </div>

          <div className="mt-12 text-slate-500 text-sm">
            Compatible with Windows 10/11 • macOS • Linux
          </div>
        </div>
      </div>

      {/* Feature Grid */}
      <section id="features" className="py-24 bg-slate-950 relative scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">Engineered for Integration</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Everything you need to debug complex interface issues without leaving your desk.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className={`group p-6 rounded-2xl border transition-all duration-300 hover:shadow-2xl ${feature.accent ? 'bg-slate-900/60 border-violet-500/30 hover:border-violet-500/60' : 'bg-slate-900/40 border-slate-800 hover:border-sky-500/30'}`}
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-colors ${feature.accent ? 'bg-violet-500/10 group-hover:bg-violet-500/20' : 'bg-slate-800 group-hover:bg-slate-700'}`}>
                  {feature.icon}
                </div>
                <h3 className={`text-xl font-bold mb-2 ${feature.accent ? 'text-white group-hover:text-ai-glow' : 'text-white'}`}>
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive: MLLP */}
      <section id="mllp" className="py-24 border-t border-slate-900 bg-slate-950/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 text-orange-400 mb-4 font-mono text-sm">
                <Network className="w-5 h-5" />
                <span>LOCALHOST:2575</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">Built-in MLLP Listener</h2>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  Stop struggling with Telnet or netcat. HL7 Workbench includes a robust <span className="text-slate-200 font-medium">TCP/IP MLLP listener</span> that adheres strictly to the HL7 framing protocol.
                </p>
                <ul className="space-y-4 mt-4">
                  {[
                    "Simulate an EHR or Interface Engine instantly",
                    "Auto-ACK generation (AA, AE, AR)",
                    "View raw hex bytes for encoding debugging",
                    "Send messages to remote endpoints with one click"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-orange-500 mt-2.5"></div>
                      <span className="text-slate-300 text-base">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="lg:w-1/2 w-full">
              <div className="rounded-xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-900">
                <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                  </div>
                  <span className="ml-2 text-xs font-mono text-slate-400">MLLP Listener - Port 2575 (Running)</span>
                </div>
                <div className="p-6 font-mono text-sm space-y-2">
                  <div className="text-emerald-400">Connection accepted from 127.0.0.1:54322</div>
                  <div className="text-slate-500 border-l-2 border-slate-700 pl-3">
                    <span className="text-blue-400">MSH</span>|^~\&|EPIC|HOSP|Mirth|HOSP|20231010||ADT^A01|...
                  </div>
                  <div className="text-slate-500 border-l-2 border-slate-700 pl-3">
                    <span className="text-blue-400">PID</span>|1||12345^^^MRN||DOE^JOHN||19800101|M...
                  </div>
                  <div className="text-orange-400 mt-2">Sending ACK (AA)...</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deep Dive: AI */}
      <section id="ai" className="py-24 border-t border-slate-900 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-violet-900/10 via-slate-950 to-slate-950 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-16">
            <div className="lg:w-1/2 w-full">
               <div className="relative rounded-xl bg-slate-900/80 border border-violet-500/30 p-6 shadow-2xl backdrop-blur-sm">
                 <div className="absolute -top-4 -right-4 bg-violet-600 text-white text-xs font-bold px-3 py-1 rounded-full animate-bounce">
                   Gemini Powered
                 </div>
                 <div className="space-y-4">
                   <div className="flex gap-3">
                     <div className="w-8 h-8 rounded-full bg-slate-700 flex-shrink-0"></div>
                     <div className="bg-slate-800 p-3 rounded-lg rounded-tl-none text-sm text-slate-300 border border-slate-700 w-full">
                       Generate 50 ADT^A01 messages for pediatric patients with broken bones.
                     </div>
                   </div>
                   <div className="flex gap-3 flex-row-reverse">
                     <div className="w-8 h-8 rounded-full bg-violet-600 flex items-center justify-center flex-shrink-0">
                       <Bot className="w-4 h-4 text-white" />
                     </div>
                     <div className="bg-violet-500/10 p-3 rounded-lg rounded-tr-none text-sm text-violet-200 border border-violet-500/20 w-full">
                       Generating data stream... <br/>
                       <span className="font-mono text-xs opacity-75 mt-2 block">
                         MSH|^~\&|GENAI|...<br/>
                         PID|1||...<br/>
                         PV1|1|...
                       </span>
                     </div>
                   </div>
                 </div>
               </div>
            </div>
            <div className="lg:w-1/2">
              <div className="flex items-center gap-3 text-violet-400 mb-4 font-mono text-sm">
                <Bot className="w-5 h-5" />
                <span>INTELLIGENT TRANSFORMATION</span>
              </div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Generative AI for <br/>
                <span className="text-violet-400">Legacy Data</span>
              </h2>
              <div className="space-y-6 text-slate-400 text-lg leading-relaxed">
                <p>
                  Leveraging <span className="text-white font-medium">Google Gemini</span>, HL7 Workbench understands healthcare context.
                </p>
                <div className="grid grid-cols-1 gap-4 mt-6">
                  <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 hover:border-violet-500/50 transition-colors">
                    <h4 className="text-white font-semibold mb-1">Bulk Data Generation</h4>
                    <p className="text-sm">Create realistic, clinically accurate test data in seconds. No more copy-pasting existing messages.</p>
                  </div>
                  <div className="p-4 rounded-lg bg-slate-900 border border-slate-800 hover:border-violet-500/50 transition-colors">
                    <h4 className="text-white font-semibold mb-1">Legacy to FHIR</h4>
                    <p className="text-sm">Smartly convert V2 pipe-delimited messages into modern FHIR JSON resources, preserving clinical intent.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Bar */}
      <div className="sticky bottom-0 z-40 bg-slate-900/90 backdrop-blur-lg border-t border-slate-800 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <div className="hidden sm:block">
            <h3 className="text-white font-semibold">Ready to get started?</h3>
            <p className="text-xs text-slate-500">Free 14-day trial included.</p>
          </div>
          <button 
            onClick={handleDownload}
            className="w-full sm:w-auto bg-sky-600 hover:bg-sky-500 text-white px-6 py-3 rounded-lg font-bold shadow-lg shadow-sky-900/20 flex items-center justify-center gap-2 transition-transform active:scale-95 cursor-pointer"
          >
            <Download className="w-5 h-5" />
            Download for Windows
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-950 py-12 border-t border-slate-900 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-slate-800 rounded flex items-center justify-center">
              <Activity className="w-4 h-4 text-sky-500" />
            </div>
            <span className="text-slate-300 font-semibold">RobbyWare</span>
          </div>
          <div className="text-slate-600 text-sm">
            &copy; {new Date().getFullYear()} RobbyWare. All rights reserved.
          </div>
          <div className="flex gap-6 text-slate-500 text-sm">
            <button onClick={onPrivacyClick} className="hover:text-sky-500 transition-colors">Privacy Policy</button>
            <button onClick={onTermsClick} className="hover:text-sky-500 transition-colors">Terms of Service</button>
            <button onClick={onSupportClick} className="hover:text-sky-500 transition-colors">Support</button>
          </div>
        </div>
      </footer>
    </div>
  );
};