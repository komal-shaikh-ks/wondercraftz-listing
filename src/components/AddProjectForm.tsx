import { useState } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebaseConfig';
import { TextField, Button, Box } from '@mui/material';

const AddProjectForm: React.FC = () => {
  const [projectName, setProjectName] = useState('');

  const handleAddProject = async () => {
    try {
      await addDoc(collection(db, 'projects'), {
        name: projectName,
        owner: 'Komal',
        created_at: new Date().toISOString()
      });
      setProjectName('');
      alert("Project added successfully");
    } catch (error) {
      console.error("Error adding project: ", error);
    }
  };

  return (
    <Box display="flex" gap={2} mb={3}>
      <TextField
        label="Project Name"
        variant="outlined"
        value={projectName}
        onChange={(e) => setProjectName(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleAddProject}>
        Add Project
      </Button>
    </Box>
  );
};

export default AddProjectForm;
