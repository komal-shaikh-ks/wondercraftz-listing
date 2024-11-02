import React, { useState } from 'react';
import ProjectList from './components/ProjectList';
import AddProjectForm from './components/AddProjectForm';
import ProjectDetailsModal from './components/ProjectDetailsModal';

const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleProjectClick = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Wondercraftz Project Management</h1>
      <AddProjectForm />
      <ProjectList onRowClick={handleProjectClick} />
      <ProjectDetailsModal
        open={isModalOpen}
        handleClose={() => setIsModalOpen(false)}
        project={selectedProject}
      />
    </div>
  );
};

export default App;