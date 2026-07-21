
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
  content: string;
}

export interface ProjectColor {
  name: string;
  hex: string;
  description: string;
}

export interface ProjectData {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  details?: {
    intro: string;
    symbol: string;
    typography: string;
    colors: ProjectColor[];
  };
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  mode: 'application' | 'service' | 'project';
  serviceData?: ServiceData | null;
  projectData?: ProjectData | null;
}

export type FrenteId = 'tecnologia-ia' | 'finops-cloud' | 'estrategia-crescimento';

export interface Frente {
  id: FrenteId;
  path: string;
  nome: string;
  tagline: string;
  descricao: string;
  accent: 'red' | 'teal' | 'amber';
  fontDisplay: 'bodoni' | 'dmsans';
}

export interface CaseStudy {
  slug: string;
  frenteId: FrenteId;
  titulo: string;
  segmento: string;
  problema: string;
  solucao: string;
  resultado: string;
  stack?: string;
}
