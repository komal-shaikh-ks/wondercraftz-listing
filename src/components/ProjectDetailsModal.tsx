import React from 'react';
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';

const ProjectDetailsModal: React.FC<{
  open: boolean;
  handleClose: () => void;
  project: any;
}> = ({ open, handleClose, project }) => {
  return (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle>Project Details</DialogTitle>
      <DialogContent>
        {project ? (
          <>
            <Typography variant="body1"><strong>Project Name:</strong> {project.name}</Typography>
            <Typography variant="body1"><strong>Owner:</strong> {project.owner}</Typography>
            <Typography variant="body1"><strong>Created At:</strong> {project.created_at}</Typography>
          </>
        ) : (
          <Typography>No project selected</Typography>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsModal;