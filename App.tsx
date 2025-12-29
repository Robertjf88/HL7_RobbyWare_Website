import React, { useState, useEffect } from 'react';
import { LoginGate } from './components/LoginGate';
import { Website } from './components/Website';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { Support } from './components/Support';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);
  const [currentView, setCurrentView] = useState<'main' | 'privacy' | 'terms' | 'support'>('main');

  useEffect(() => {
    // Check local storage for persistent login session
    const storedAuth = localStorage.getItem('hl7_workbench_auth');
    if (storedAuth === 'true') {
      setIsAuthenticated(true);
    }
    setLoading(false);
  }, []);

  const handleLoginSuccess = () => {
    localStorage.setItem('hl7_workbench_auth', 'true');
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('hl7_workbench_auth');
    setIsAuthenticated(false);
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950 text-sky-500">
        <svg className="animate-spin h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    );
  }

  // Global overlays for Legal/Support Pages
  if (currentView === 'privacy') {
    return <PrivacyPolicy onBack={() => setCurrentView('main')} />;
  }

  if (currentView === 'terms') {
    return <TermsOfService onBack={() => setCurrentView('main')} />;
  }

  if (currentView === 'support') {
    return <Support onBack={() => setCurrentView('main')} />;
  }

  return (
    <>
      {isAuthenticated ? (
        <Website 
          onLogout={handleLogout} 
          onPrivacyClick={() => setCurrentView('privacy')} 
          onTermsClick={() => setCurrentView('terms')}
          onSupportClick={() => setCurrentView('support')}
        />
      ) : (
        <LoginGate 
          onLoginSuccess={handleLoginSuccess} 
          onPrivacyClick={() => setCurrentView('privacy')}
          onTermsClick={() => setCurrentView('terms')}
          onSupportClick={() => setCurrentView('support')}
        />
      )}
    </>
  );
};

export default App;