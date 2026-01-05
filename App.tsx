
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, ChevronDown, ArrowRight, ExternalLink } from 'lucide-react';
import Background from './components/Background';
import Navigation from './components/Navigation';
import Button from './components/Button';
import Modal from './components/Modal';
import Logo from './components/Logo';
import { ServiceData, ProjectData } from './types';

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

// Detailed Projects Data based on PDF guidelines
const projectsData: ProjectData[] = [
  {
    id: 1,
    title: "Carol Wendling",
    category: "Branding Estratégico & Wellness",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1200&auto=format&fit=crop",
    description: "Reposicionamento de marca premium para personal trainer e palestrante. Design focado em performance, saúde e autoridade corporativa.",
    details: {
      intro: "O guia foi desenvolvido para apresentar o ecossistema visual da marca Carol Wendling. Mais do que regras de design, este manual protege o reposicionamento estratégico, assegurando que sua essência de performance e bem-estar seja transmitida com clareza.",
      symbol: "O símbolo foi desenvolvido a partir de um monograma tipográfico unindo as iniciais C e W. O 'C', com traço fluido e aberto, transmite movimento contínuo e evolução. Já o 'W', com linhas mais firmes, reforça direção, controle e performance.",
      typography: "A Poppins foi definida como tipografia principal por sua estrutura geométrica e leitura fluida. Complementada pela Anek Telugu, que traz leveza e dinamismo à comunicação institucional.",
      colors: [
        { name: "Marrom Escuro", hex: "#261B16", description: "Transmite seriedade, autoridade e sofisticação, ideal para o ambiente corporativo." },
        { name: "Caramelo", hex: "#B7672C", description: "Adiciona calor, energia e movimento, criando conexão com o corpo e a ação." },
        { name: "Branco", hex: "#FFFFFF", description: "Garante leveza, clareza e respiro visual, trazendo sensação de organização." }
      ]
    }
  },
  {
    id: 2,
    title: "Titan Logistics",
    category: "Branding Corporativo",
    imageUrl: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1200&auto=format&fit=crop",
    description: "Modernização da identidade visual para um gigante do setor logístico."
  },
  {
    id: 3,
    title: "Nexus Tech",
    category: "Digital Branding",
    imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop",
    description: "Criação de universo visual para startup de IA em estágio Series A."
  },
  {
    id: 4,
    title: "Lumina Jewelry",
    category: "Identidade Visual & E-commerce",
    imageUrl: "https://images.unsplash.com/photo-1588444837495-c6cfaf504670?q=80&w=1200&auto=format&fit=crop",
    description: "Estratégia de marca de luxo com foco em expansão internacional."
  }
];

const App: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState<'application' | 'service' | 'project'>('application');
  const [selectedService, setSelectedService] = useState<ServiceData | null>(null);
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);

  const openApplicationModal = () => {
    setModalMode('application');
    setSelectedService(null);
    setSelectedProject(null);
    setIsModalOpen(true);
  };

  const openServiceModal = (service: typeof servicesData[0]) => {
    setModalMode('service');
    setSelectedService({
      title: service.modalTitle,
      content: service.modalContent
    });
    setSelectedProject(null);
    setIsModalOpen(true);
  };

  const openProjectModal = (project: ProjectData) => {
    setModalMode('project');
    setSelectedProject(project);
    setSelectedService(null);
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
        projectData={selectedProject}
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

        {/* --- SECTION 5: PROJECTS --- */}
        <section id="projects" className="py-24 md:py-32 px-6 bg-black/20">
          <div className="max-w-6xl mx-auto">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-6"
            >
              <div className="max-w-2xl">
                <h2 className="font-bodoni text-4xl md:text-5xl mb-6">Portfolio de <br/><span className="italic">Projetos Estratégicos.</span></h2>
                <p className="font-lato text-white/60 text-lg font-light leading-relaxed">
                  Clique nos projetos para explorar a estratégia de branding e as escolhas criativas por trás de cada marca.
                </p>
              </div>
              <div className="hidden md:block">
                <Button variant="outline" onClick={openApplicationModal} className="!py-3 !px-6">Seu Projeto Aqui</Button>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16"
            >
              {projectsData.map((project) => (
                <motion.div 
                  key={project.id}
                  variants={fadeInUp}
                  className="group cursor-pointer"
                  onClick={() => project.details && openProjectModal(project)}
                >
                  <div className="relative overflow-hidden mb-6 aspect-[16/10] border border-white/5 bg-mauri-black">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 grayscale group-hover:grayscale-0 opacity-60 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-mauri-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-6 left-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      <div className="bg-mauri-red p-3 rounded-full shadow-xl">
                        <ExternalLink size={20} className="text-white" />
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-lato text-xs uppercase tracking-[0.2em] text-mauri-red mb-2 font-bold">{project.category}</span>
                    <h3 className="font-bodoni text-3xl mb-2 group-hover:text-mauri-red transition-colors">{project.title}</h3>
                    <p className="font-lato text-white/50 text-base font-light leading-relaxed max-w-sm">
                      {project.description}
                    </p>
                    {project.details && (
                      <div className="mt-4 flex items-center text-[10px] uppercase tracking-widest text-white/40 group-hover:text-white transition-colors">
                        Explorar Estratégia <ArrowRight size={10} className="ml-2" />
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
            
            <div className="mt-16 text-center md:hidden">
               <Button variant="outline" onClick={openApplicationModal} className="w-full">Agendar Projeto</Button>
            </div>
          </div>
        </section>

        {/* --- SECTION 6: FINAL CTA --- */}
        <section className="py-24 md:py-40 px-6 relative overflow-hidden">
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
                Acreditamos em parcerias profundas com empresas comprometidas com a liderança. Analisamos seu negócio para identificar pontos de alavancagem reais.
              </p>
              <Button onClick={openApplicationModal} className="text-base px-12 py-5 shadow-[0_0_30px_rgba(146,0,39,0.3)] hover:shadow-[0_0_50px_rgba(146,0,39,0.6)]">
                Aplicar para Sessão de Diagnóstico
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
            <button onClick={() => document.getElementById('hero')?.scrollIntoView({behavior: 'smooth'})} className="font-lato text-sm text-white/60 hover:text-white transition-colors">Início</button>
            <button onClick={() => document.getElementById('services')?.scrollIntoView({behavior: 'smooth'})} className="font-lato text-sm text-white/60 hover:text-white transition-colors">Soluções</button>
            <button onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth'})} className="font-lato text-sm text-white/60 hover:text-white transition-colors">Projetos</button>
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
