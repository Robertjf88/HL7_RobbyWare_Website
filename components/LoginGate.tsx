import React, { useState } from 'react';
import { Lock, ArrowRight, ShieldCheck, Terminal } from 'lucide-react';
import { LoginProps } from '../types';

export const LoginGate: React.FC<LoginProps> = ({ onLoginSuccess, onPrivacyClick, onTermsClick, onSupportClick }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    // Simulate network delay for effect
    setTimeout(() => {
      if (username === 'robby' && password === 'tools') {
        onLoginSuccess();
      } else {
        setError('Access Denied: Invalid credentials.');
        setIsSubmitting(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-sky-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-ai/10 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      </div>

      <div className="z-10 w-full max-w-md p-8 glass-panel rounded-2xl shadow-2xl border-t border-slate-700 animate-float">
        <div className="flex flex-col items-center mb-8">
          <div className="w-32 h-32 relative mb-6 hover:scale-105 transition-transform duration-300">
             {/* Robby SVG Logo */}
             <svg viewBox="0 0 200 200" className="w-full h-full drop-shadow-2xl" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#e0f2fe" />
                    <stop offset="100%" stopColor="#bae6fd" />
                  </linearGradient>
                </defs>
                {/* Background Circle */}
                <circle cx="100" cy="100" r="95" fill="url(#bgGrad)" stroke="#38bdf8" strokeWidth="4" />
                
                {/* Text Curve Path */}
                <path id="textCurve" d="M 40,100 A 60,60 0 0 1 160,100" fill="none" />
                <text fontSize="18" fontWeight="bold" fill="#0ea5e9" textAnchor="middle">
                   <textPath href="#textCurve" startOffset="50%">OFFICIAL</textPath>
                </text>

                {/* Paperclip Character */}
                <g transform="translate(65, 45) scale(0.7)">
                   {/* Clip Body */}
                   <path d="M40 20 V100 A30 30 0 0 0 100 100 V30 A20 20 0 0 0 60 30 V90" 
                         fill="none" stroke="#94a3b8" strokeWidth="18" strokeLinecap="round" />
                   {/* Eyes */}
                   <ellipse cx="60" cy="50" rx="6" ry="8" fill="#0f172a" />
                   <ellipse cx="85" cy="50" rx="6" ry="8" fill="#0f172a" />
                   <circle cx="62" cy="48" r="2" fill="white" />
                   <circle cx="87" cy="48" r="2" fill="white" />
                   {/* Smile */}
                   <path d="M65 70 Q 72 78 80 70" fill="none" stroke="#0f172a" strokeWidth="4" strokeLinecap="round" />
                </g>

                {/* Gear Icon Badge */}
                <g transform="translate(30, 80)">
                  <circle cx="25" cy="25" r="25" fill="#0ea5e9" className="animate-spin-slow" style={{animationDuration: '10s'}} />
                  <path d="M25 10 V15 M25 35 V40 M10 25 H15 M35 25 H40 M14 14 L18 18 M32 32 L36 36 M14 36 L18 32 M32 18 L36 14" 
                        stroke="white" strokeWidth="5" strokeLinecap="round" />
                  <text x="25" y="32" fontSize="16" fontWeight="900" fill="white" textAnchor="middle">R</text>
                </g>
                
                {/* Bottom Text */}
                <text x="100" y="170" fontSize="14" fontWeight="800" fill="#0369a1" textAnchor="middle" fontFamily="sans-serif">ROBBYWARE</text>
             </svg>
          </div>
          <h1 className="text-2xl font-bold text-white tracking-tight">HL7 Workbench</h1>
          <p className="text-slate-400 text-sm mt-2 flex items-center gap-2">
            <Lock className="w-3 h-3" /> Secure Access Portal
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 pl-1">
              Operator ID
            </label>
            <div className="relative">
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 pl-10 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all"
                placeholder="Enter username"
                autoFocus
              />
              <Terminal className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
            </div>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2 pl-1">
              Passkey
            </label>
            <div className="relative">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 pl-10 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-500 transition-all"
                placeholder="Enter password"
              />
              <ShieldCheck className="absolute left-3 top-3.5 w-4 h-4 text-slate-500" />
            </div>
          </div>

          {error && (
            <div className="p-3 bg-red-950/30 border border-red-900/50 rounded-lg flex items-center gap-2 text-red-400 text-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-gradient-to-r from-sky-600 to-sky-500 hover:from-sky-500 hover:to-sky-400 text-white font-semibold py-3.5 rounded-lg shadow-lg shadow-sky-500/20 flex items-center justify-center gap-2 transition-all transform active:scale-[0.98] ${isSubmitting ? 'opacity-70 cursor-wait' : ''}`}
          >
            {isSubmitting ? 'Authenticating...' : 'Initialize Session'}
            {!isSubmitting && <ArrowRight className="w-4 h-4" />}
          </button>
        </form>

        <div className="mt-8 text-center space-y-2 flex flex-col items-center">
          <p className="text-xs text-slate-600">
            RobbyWare Secure Systems &copy; {new Date().getFullYear()}
          </p>
          <div className="flex gap-4">
             <button onClick={onPrivacyClick} className="text-xs text-slate-600 hover:text-sky-500 transition-colors">
              Privacy Policy
            </button>
            <button onClick={onTermsClick} className="text-xs text-slate-600 hover:text-sky-500 transition-colors">
              Terms of Service
            </button>
             <button onClick={onSupportClick} className="text-xs text-slate-600 hover:text-sky-500 transition-colors">
              Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};