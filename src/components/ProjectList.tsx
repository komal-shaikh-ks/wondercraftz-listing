import React, { useEffect, useState } from 'react';
import MaterialTable from '@material-table/core';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '../firebaseConfig';

const ProjectList: React.FC<{ onRowClick: (project: any) => void }> = ({ onRowClick }) => {
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const querySnapshot = await getDocs(collection(db, 'projects'));
      setProjects(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchProjects();
  }, []);

  return (
    <MaterialTable
      columns={[
        { title: 'Project Name', field: 'name' },
        { title: 'Owner', field: 'owner' },
        { title: 'Created At', field: 'created_at' },
      ]}
      data={projects}
      title="Projects"
      onRowClick={(event, rowData) => onRowClick(rowData)}
    />
  );
};

export default ProjectList;
