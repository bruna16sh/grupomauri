import React from 'react';
import { ModalProps } from '../types';
import { X, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, mode, serviceData }) => {
  const [submitted, setSubmitted] = React.useState(false);

  // Reset state when modal opens/closes
  React.useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate API call
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  // Helper to parse text with newlines, bullets (•), and bolding (**)
  const renderServiceContent = (text: string) => {
    // Split by newlines to handle paragraphs vs lists
    const lines = text.split('\n').filter(line => line.trim() !== '');
    
    return (
      <div className="space-y-4 font-lato text-white/70 leading-relaxed font-light">
        {lines.map((line, index) => {
          const trimmedLine = line.trim();
          
          // Check for bullet point
          if (trimmedLine.startsWith('•')) {
            const content = trimmedLine.substring(1).trim();
            const boldSplit = content.split('**');
            return (
              <div key={index} className="flex gap-3 ml-0 md:ml-2">
                 <span className="text-mauri-red mt-1.5 h-1.5 w-1.5 rounded-full bg-mauri-red shrink-0 block"></span>
                 <p>
                   {boldSplit.map((segment, i) => (
                     <span key={i} className={i % 2 === 1 ? "text-white font-bold" : ""}>
                       {segment}
                     </span>
                   ))}
                 </p>
              </div>
            )
          } 
          
          // Standard Paragraph
          const boldSplit = trimmedLine.split('**');
          return (
            <p key={index} className="mb-2">
              {boldSplit.map((segment, i) => (
                <span key={i} className={i % 2 === 1 ? "text-white font-bold" : ""}>
                  {segment}
                </span>
              ))}
            </p>
          );
        })}
      </div>
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-mauri-black border border-white/10 w-full max-w-lg relative p-8 md:p-12 shadow-2xl max-h-[90vh] overflow-y-auto custom-scrollbar"
            >
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-white/50 hover:text-mauri-red transition-colors"
              >
                <X size={24} />
              </button>

              {/* MODE: SERVICE DETAILS */}
              {mode === 'service' && serviceData && (
                <div>
                   <h3 className="font-bodoni text-2xl md:text-3xl mb-6 text-mauri-white leading-tight">
                    {serviceData.title}
                  </h3>
                  <div className="w-12 h-[1px] bg-mauri-red mb-6"></div>
                  {renderServiceContent(serviceData.content)}
                  <div className="mt-8 pt-8 border-t border-white/10">
                    <button 
                      onClick={onClose}
                      className="text-xs uppercase tracking-widest text-white/50 hover:text-white transition-colors"
                    >
                      Fechar
                    </button>
                  </div>
                </div>
              )}

              {/* MODE: APPLICATION FORM */}
              {mode === 'application' && (
                <>
                  {!submitted ? (
                    <>
                      <h3 className="font-bodoni text-2xl md:text-3xl mb-2 text-mauri-white">
                        Aplicação para Diagnóstico
                      </h3>
                      <p className="font-lato text-white/60 mb-8 text-sm leading-relaxed">
                        Preencha seus dados para aplicar. Nossa equipe analisará seu perfil e entrará em contato se houver fit estratégico.
                      </p>
                      
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label className="block font-lato text-xs uppercase tracking-widest text-white/40 mb-2">Nome Completo</label>
                          <input required type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-mauri-white focus:outline-none focus:border-mauri-red transition-colors" />
                        </div>
                        <div>
                          <label className="block font-lato text-xs uppercase tracking-widest text-white/40 mb-2">E-mail Corporativo</label>
                          <input required type="email" className="w-full bg-transparent border-b border-white/20 py-2 text-mauri-white focus:outline-none focus:border-mauri-red transition-colors" />
                        </div>
                        <div>
                          <label className="block font-lato text-xs uppercase tracking-widest text-white/40 mb-2">Empresa / Cargo</label>
                          <input required type="text" className="w-full bg-transparent border-b border-white/20 py-2 text-mauri-white focus:outline-none focus:border-mauri-red transition-colors" />
                        </div>
                        <div>
                          <label className="block font-lato text-xs uppercase tracking-widest text-white/40 mb-2">Desafio Principal</label>
                          <textarea rows={2} className="w-full bg-transparent border-b border-white/20 py-2 text-mauri-white focus:outline-none focus:border-mauri-red transition-colors resize-none"></textarea>
                        </div>
                        
                        <div className="pt-4">
                          <button 
                            type="submit"
                            className="w-full bg-mauri-red text-white font-lato uppercase tracking-widest text-sm font-bold py-4 hover:bg-red-800 transition-colors"
                          >
                            Enviar Aplicação
                          </button>
                        </div>
                      </form>
                    </>
                  ) : (
                    <div className="text-center py-12">
                      <div className="w-16 h-16 rounded-full border border-mauri-red flex items-center justify-center mx-auto mb-6 text-mauri-red">
                        <Check size={32} />
                      </div>
                      <h3 className="font-bodoni text-2xl mb-4">Aplicação Enviada.</h3>
                      <p className="font-lato text-white/60 mb-8">
                        Seu perfil está sob análise. Entraremos em contato em até 24h úteis.
                      </p>
                      <button onClick={onClose} className="text-xs uppercase tracking-widest border-b border-mauri-red pb-1">
                        Fechar
                      </button>
                    </div>
                  )}
                </>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;