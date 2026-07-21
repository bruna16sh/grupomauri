import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';
import Background from './Background';
import Navigation from './Navigation';
import Modal from './Modal';
import Footer from './Footer';
import { ServiceData, ProjectData } from '../types';

const Layout: React.FC = () => {
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

  const closeModal = () => setIsModalOpen(false);

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
        <Outlet context={{ openApplicationModal }} />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
