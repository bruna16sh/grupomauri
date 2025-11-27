import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ChevronDown, ArrowRight } from 'lucide-react';
import Background from './components/Background';
import Navigation from './components/Navigation';
import Button from './components/Button';
import Modal from './components/Modal';
import Logo from './components/Logo';
import { ServiceData } from './types';

// Animations
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

// Data for Services
const servicesData = [
  {
    id: 1,
    titleShort: "Branding Estratégico",
    descShort: "A Fundação. Diagnóstico, Plataforma de Marca e Direcionamento Estratégico.",
    modalTitle: "Construção e Gestão de Plataforma de Marca",
    modalContent: `**Para quem é?**
Para empresas que buscam clareza estratégica, diferenciação competitiva e consistência em todos os pontos de contato. Ideal para negócios em crescimento, em processo de reposicionamento ou que sentem que sua marca não reflete mais seu verdadeiro valor.

**O que entregamos?**
Um ecossistema de marca completo. Partimos de um diagnóstico profundo para construir uma plataforma estratégica que serve como base para a criação de uma identidade única, o desenho de experiências memoráveis e a execução de uma comunicação impactante.

**Nosso Processo de Branding é dividido em 4 Módulos Integrados:**

• **Módulo 1: ESTRATÉGIA – A Definição do Norte** Nesta fase, mergulhamos no negócio para estabelecer as fundações. O objetivo é responder: "Para onde vamos e como chegaremos lá?". Inclui o Diagnóstico 360º (cenário, concorrência, stakeholders) e a construção da Plataforma de Branding (Propósito, Posicionamento, Proposta de Valor, Atributos e Valores).

• **Módulo 2: CRIAÇÃO – A Materialização da Identidade** Com a estratégia definida, damos forma e voz à marca para criar um universo proprietário e reconhecível. Inclui Naming (se necessário), o desenvolvimento do Universo Visual (logo, cores, tipografia) e do Universo Verbal (Tom de Voz, Territórios de Palavras).

• **Módulo 3: EXPERIÊNCIA – A Marca em Ação** Uma marca se prova na prática. Aqui, desenhamos como a proposta de valor será entregue de forma memorável. Inclui o Mapeamento da Jornada do Cliente, o Desenho de "Brand Moments" e a criação de um Service Blueprint para garantir uma entrega consistente.

• **Módulo 4: COMUNICAÇÃO – A Marca Conta sua História** Com a identidade e a experiência desenhadas, definimos como contar a história da marca ao mundo. Inclui a criação da Narrativa Central, o Plano de Conexões (estratégia de canais) e a Definição de KPIs para mensurar os resultados de negócio.

**Resultado Final:**
Ao final dos quatro módulos, sua empresa não terá apenas um "rebranding". Terá um sistema de marca vivo e integrado, pronto para construir um negócio que lidera.`
  },
  {
    id: 2,
    titleShort: "Marketing de Performance",
    descShort: "A Ativação. Estratégia de canais, conteúdo e performance para gerar resultados.",
    modalTitle: "Marketing de Performance: Transformando Estratégia em Vendas.",
    modalContent: `Executamos um marketing que é a expressão da sua estratégia.

• **Planejamento de Canais:** Selecionamos os canais com maior ROI para o seu modelo de negócio.
• **Construção de Autoridade:** Produzimos conteúdo estratégico (LinkedIn, Blog) que posiciona sua empresa como líder.
• **Aquisição de Clientes:** Gerenciamos campanhas de Tráfego Pago (Google, Meta, LinkedIn) e SEO focadas em atrair clientes qualificados.`
  },
  {
    id: 3,
    titleShort: "Tecnologia e Inovação",
    descShort: "A Aceleração. Ativos digitais e software para escalar a operação.",
    modalTitle: "Tecnologia e Inovação: Escalando sua Estratégia.",
    modalContent: `Usamos a tecnologia como uma ferramenta para acelerar seu crescimento.

• **Desenvolvimento de Ativos Digitais:** Construímos websites, portais e sistemas que são a materialização da sua experiência de marca.
• **Software Sob Medida:** Criamos soluções personalizadas para otimizar processos e resolver desafios operacionais únicos.
• **Consultoria de Diagnóstico:** Analisamos sua infraestrutura tecnológica e recomendamos inovações para aumentar a eficiência.`
  }
];

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'application' | 'service'>('application');
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);

  const openApplicationModal = () => {
    setModalMode('application');
    setSelectedService(null);
    setIsModalOpen(true);
  };

  const openServiceModal = (service: typeof servicesData[0]) => {
    setModalMode('service');
    setSelectedService({
      title: service.modalTitle,
      content: service.modalContent
    });
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen text-mauri-white selection:bg-mauri-red selection:text-white">
      <Background />
      <Navigation onOpenModal={openApplicationModal} />
      <Modal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        mode={modalMode} 
        serviceData={selectedService}
      />

      <main>
        {/* --- SECTION 1: HERO --- */}
        <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.h1 
                variants={fadeInUp}
                className="font-bodoni text-5xl md:text-7xl lg:text-8xl leading-tight mb-8"
              >
                Estratégia que <br/>
                <span className="italic text-white/90">Gera Valor.</span>
              </motion.h1>
              
              <motion.div variants={fadeInUp} className="h-[1px] w-24 bg-mauri-red mx-auto mb-8"></motion.div>

              <motion.p 
                variants={fadeInUp}
                className="font-lato font-light text-lg md:text-2xl text-white/80 max-w-2xl mx-auto mb-12 leading-relaxed"
              >
                Integramos Branding, Marketing e Tecnologia para construir sistemas de crescimento para o seu negócio.
              </motion.p>

              <motion.div variants={fadeInUp}>
                <Button onClick={scrollToServices}>Conheça Nossas Soluções</Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/30 animate-bounce"
          >
            <ChevronDown size={32} />
          </motion.div>
        </section>

        {/* --- SECTION 2: THE PROBLEM --- */}
        <section id="problem" className="py-24 md:py-32 px-6">
          <div className="max-w-3xl mx-auto text-center md:text-left">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
            >
              <h2 className="font-bodoni text-3xl md:text-5xl mb-8 leading-tight">
                O esforço aumenta, <br />
                <span className="text-white/50">mas o resultado estagna.</span>
              </h2>
              <p className="font-lato text-white/70 text-lg md:text-xl leading-relaxed font-light">
                Muitas empresas chegam a um platô onde o aumento do esforço não se traduz em crescimento proporcional. O marketing parece um custo, as equipes operam em silos e a diferenciação frente à concorrência se torna cada vez mais difícil. Isso não é um sintoma de falta de competência. <span className="text-white border-b border-mauri-red">É um sintoma de um sistema desconectado</span>, onde a ação (Marketing e Tecnologia) opera sem uma direção estratégica clara (Branding).
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- SECTION 3: THE SOLUTION --- */}
        <section id="solution" className="py-24 md:py-32 px-6 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="font-bodoni text-4xl md:text-6xl mb-6">
                Nós integramos a <br/>
                <span className="text-mauri-red">direção à ação.</span>
              </h2>
            </motion.div>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <p className="font-lato text-white/80 text-lg leading-relaxed font-light mb-6">
                Nossa metodologia parte de um princípio simples: <strong>estratégia precede a execução.</strong>
              </p>
              <p className="font-lato text-white/80 text-lg leading-relaxed font-light mb-6">
                No pilar de <strong>Branding Estratégico</strong>, construímos a fundação e o mapa do seu negócio. 
              </p>
              <p className="font-lato text-white/80 text-lg leading-relaxed font-light">
                Com essa clareza, ativamos os pilares de <strong>Marketing</strong> e <strong>Tecnologia</strong>, garantindo que cada investimento, campanha e linha de código trabalhe em prol do mesmo objetivo: gerar valor e liderança de mercado.
              </p>
            </motion.div>
          </div>
        </section>

        {/* --- SECTION 4: SERVICES --- */}
        <section id="services" className="py-24 md:py-32 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-20 text-center"
            >
              <h2 className="font-bodoni text-4xl md:text-5xl mb-4">
                Soluções Integradas para Negócios que Lideram.
              </h2>
              <div className="w-16 h-[2px] bg-mauri-red mx-auto mt-6"></div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
              {servicesData.map((service, index) => (
                <motion.button 
                  key={service.id}
                  onClick={() => openServiceModal(service)}
                  variants={fadeInUp} 
                  className="group hover:bg-white/5 p-10 border border-transparent hover:border-white/10 transition-all duration-500 text-left relative overflow-hidden"
                >
                  <div className="text-mauri-red font-bodoni text-6xl opacity-20 mb-8 group-hover:opacity-100 transition-opacity">
                    0{index + 1}
                  </div>
                  <h3 className="font-bodoni text-2xl mb-4 text-white group-hover:text-mauri-red transition-colors flex items-center justify-between">
                    {service.titleShort}
                  </h3>
                  <p className="font-lato text-white/70 font-light leading-relaxed mb-6">
                    {service.descShort}
                  </p>
                  
                  <div className="flex items-center text-xs uppercase tracking-widest text-mauri-red opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                    <span className="mr-2">Ver Detalhes</span>
                    <ArrowRight size={14} />
                  </div>
                </motion.button>
              ))}
            </motion.div>
          </div>
        </section>

        {/* --- SECTION 5: FINAL CTA (EXCLUSIVE) --- */}
        <section className="py-24 md:py-40 px-6 relative overflow-hidden">
          {/* Decorative background element */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-mauri-red/5 rounded-full blur-[100px] pointer-events-none"></div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
            >
              <h2 className="font-bodoni text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
                Nosso diagnóstico é o primeiro passo para a transformação. <br/>
                <span className="text-mauri-red italic">E ele não é para todos.</span>
              </h2>
              <p className="font-lato text-xl md:text-2xl text-white/80 font-light mb-12 max-w-3xl mx-auto leading-relaxed">
                Acreditamos em parcerias profundas com empresas que estão genuinamente comprometidas com o crescimento e a liderança. Nossa Sessão de Diagnóstico Estratégico é uma imersão de alto valor onde analisamos seu negócio para identificar os principais pontos de alavancagem. Para garantir a qualidade e o foco, as sessões são limitadas.
              </p>
              <Button onClick={openApplicationModal} className="text-base px-12 py-5 shadow-[0_0_30px_rgba(146,0,39,0.3)] hover:shadow-[0_0_50px_rgba(146,0,39,0.6)]">
                Aplicar para uma Sessão de Diagnóstico
              </Button>
            </motion.div>
          </div>
        </section>
      </main>

      {/* --- FOOTER --- */}
      <footer className="py-12 px-6 border-t border-white/10 bg-black/40">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          
          <div className="flex flex-col items-center md:items-start">
            <div className="w-40 mb-4 opacity-80">
              <Logo className="w-full h-auto" />
            </div>
            <p className="font-lato text-xs text-white/40 uppercase tracking-widest">
              © {new Date().getFullYear()} Grupo Mauri. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex space-x-8">
             {/* Note: In a real routing app, these would be Links or use the scrollTo function */}
            <button onClick={() => document.getElementById('hero')?.scrollIntoView({behavior: 'smooth'})} className="font-lato text-sm text-white/60 hover:text-white transition-colors">Início</button>
            <button onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})} className="font-lato text-sm text-white/60 hover:text-white transition-colors">Soluções</button>
            <button onClick={openApplicationModal} className="font-lato text-sm text-white/60 hover:text-white transition-colors">Contato</button>
          </div>

          <div>
            <a href="#" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-mauri-red hover:border-mauri-red transition-all duration-300 text-white/60 hover:text-white">
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;