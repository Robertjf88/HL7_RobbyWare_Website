import React from 'react';

export interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  accentColor?: string;
}

export interface LoginProps {
  onLoginSuccess: () => void;
  onPrivacyClick: () => void;
  onTermsClick: () => void;
  onSupportClick: () => void;
}

export interface WebsiteProps {
  onLogout: () => void;
  onPrivacyClick: () => void;
  onTermsClick: () => void;
  onSupportClick: () => void;
}

export interface PrivacyPolicyProps {
  onBack: () => void;
}

export interface TermsOfServiceProps {
  onBack: () => void;
}

export interface SupportProps {
  onBack: () => void;
}