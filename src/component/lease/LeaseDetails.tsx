import React from 'react';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Button } from '@mui/material';

// Updated interface to reflect the new details
interface LeaseDetailsProps {
  id: string;
  device_id: string;
  lessor: string;
  contract_id: string;
  start_date: string;
  comment: string;
  lease_start: string;
  lease_end: string;
  onClose: () => void;  
}

function LeaseDetails({ id, device_id, lessor, contract_id, start_date, comment, lease_start, lease_end, onClose }: LeaseDetailsProps) {
  return (
    <div>
      <h2>Lease Details</h2>
      <Button onClick={onClose} variant="outlined" startIcon={<KeyboardReturnIcon />}>
        Return
      </Button>
     
      <p>ID: {id}</p>
      <p>Device ID: {device_id}</p>
      <p>Lessor: {lessor}</p>
      <p>Contract ID: {contract_id}</p>
      <p>Start Date: {start_date}</p>
      <p>Comment: {comment}</p>
      <p>Lease Start: {lease_start}</p>
      <p>Lease End: {lease_end}</p>
    </div>
  );
}

export default LeaseDetails;
