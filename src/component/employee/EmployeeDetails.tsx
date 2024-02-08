import React from 'react';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Button } from '@mui/material';

interface UserDetailsProps {
  id: string;
  sid: string;
  email: string;
  employee_status: string;
  comments: string;
  date_created: string;
  date_updated: string;
  onClose: () => void;  
}

function EmployeeDetails({
  id,
  sid,
  email,
  employee_status,
  comments,
  date_created,
  date_updated,
  onClose
}: UserDetailsProps) {
  return (
    <div>
      <h2>Employee Details</h2>
      <Button onClick={onClose} variant="outlined" startIcon={<KeyboardReturnIcon />}>
        Return
      </Button>
     
      <p>ID: {id}</p>
      <p>SID: {sid}</p>
      <p>Email: {email}</p>
      <p>Employee Status: {employee_status}</p>
      <p>Comments: {comments}</p>
      <p>Date Created: {date_created}</p>
      <p>Date Updated: {date_updated}</p>
    </div>
  );
}

export default EmployeeDetails;
