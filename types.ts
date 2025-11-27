import React from 'react';

export interface SectionProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'outline' | 'text';
  children: React.ReactNode;
}

export interface ServiceData {
  title: string;
  content: string; // Contains the long description with formatting markers
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'application' | 'service';
  serviceData?: ServiceData | null;
}