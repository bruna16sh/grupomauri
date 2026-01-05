
import React from 'react';
import { ModalProps } from '../types';
import { X, Check, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, mode, serviceData, projectData }) => {
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTimeout(() => {
      setSubmitted(true);
    }, 800);
  };

  const renderServiceContent = (text: string) => {
    const lines = text.split('\n').filter(line => line.trim() !== '');
    return (
      <div className="space-y-4 font-lato text-white/70 leading-relaxed font-light">
        {lines.map((line, index) => {
          const trimmedLine = line.trim();
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
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-mauri-black border border-white/10 w-full max-w-4xl relative shadow-2xl max-h-[90vh] overflow-y-auto custom-scrollbar flex flex-col"
            >
              <button 
                onClick={onClose}
                className="absolute top-6 right-6 text-white/50 hover:text-mauri-red transition-colors z-10 p-2 bg-black/20 rounded-full"
              >
                <X size={24} />
              </button>

              {/* MODE: PROJECT DETAILS (BRANDING STRATEGY) */}
              {mode === 'project' && projectData && (
                <div className="p-8 md:p-16">
                  <header className="mb-12">
                    <span className="text-mauri-red font-lato text-xs uppercase tracking-[0.3em] font-bold mb-4 block">Case Study</span>
                    <h3 className="font-bodoni text-4xl md:text-6xl mb-6 text-mauri-white leading-tight">
                      {projectData.title}
                    </h3>
                    <p className="font-lato text-xl text-white/60 font-light leading-relaxed max-w-2xl">
                      {projectData.details?.intro}
                    </p>
                  </header>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                    {/* Visual & Symbol */}
                    <section>
                      <h4 className="font-bodoni text-2xl mb-6 flex items-center gap-3">
                        <span className="w-8 h-[1px] bg-mauri-red"></span>
                        O Símbolo
                      </h4>
                      <p className="font-lato text-white/70 leading-relaxed font-light mb-8">
                        {projectData.details?.symbol}
                      </p>
                      <div className="bg-white/5 border border-white/10 p-12 aspect-square flex items-center justify-center group relative overflow-hidden">
                         <div className="text-center">
                            <span className="font-bodoni text-8xl text-mauri-white opacity-20 group-hover:opacity-100 transition-opacity duration-700">CW</span>
                            <p className="mt-4 text-[10px] uppercase tracking-widest text-white/30">Monograma Estratégico</p>
                         </div>
                      </div>
                    </section>

                    {/* Typography & Colors */}
                    <div className="space-y-16">
                      <section>
                        <h4 className="font-bodoni text-2xl mb-6 flex items-center gap-3">
                          <span className="w-8 h-[1px] bg-mauri-red"></span>
                          Tipografia
                        </h4>
                        <div className="space-y-6">
                          <div className="p-6 bg-white/[0.03] border border-white/5">
                            <p className="text-4xl font-bold mb-2">Poppins</p>
                            <p className="text-xs text-white/40 uppercase tracking-widest">Principal / Contemporânea</p>
                          </div>
                          <p className="font-lato text-sm text-white/60 leading-relaxed italic">
                            {projectData.details?.typography}
                          </p>
                        </div>
                      </section>

                      <section>
                        <h4 className="font-bodoni text-2xl mb-6 flex items-center gap-3">
                          <span className="w-8 h-[1px] bg-mauri-red"></span>
                          Paleta Cromática
                        </h4>
                        <div className="space-y-4">
                          {projectData.details?.colors.map((color, i) => (
                            <div key={i} className="flex items-start gap-4 group">
                              <div 
                                className="w-12 h-12 shrink-0 border border-white/10"
                                style={{ backgroundColor: color.hex }}
                              ></div>
                              <div>
                                <div className="flex items-center gap-2 mb-1">
                                  <span className="font-bold text-sm text-white">{color.name}</span>
                                  <span className="text-[10px] text-white/40 font-mono">{color.hex}</span>
                                </div>
                                <p className="text-xs text-white/50 leading-relaxed">
                                  {color.description}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </section>
                    </div>
                  </div>

                  <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center">
                    <p className="font-lato text-sm text-white/30 italic">© {new Date().getFullYear()} Grupo Mauri Strategy Design</p>
                    <button 
                      onClick={onClose}
                      className="group flex items-center gap-3 text-xs uppercase tracking-widest text-mauri-red hover:text-white transition-colors"
                    >
                      Voltar ao Portfolio
                      <X size={14} className="group-hover:rotate-90 transition-transform" />
                    </button>
                  </div>
                </div>
              )}

              {/* MODE: SERVICE DETAILS */}
              {mode === 'service' && serviceData && (
                <div className="p-8 md:p-12">
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
                <div className="p-8 md:p-12">
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
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Modal;
