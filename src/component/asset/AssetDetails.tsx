
import React from 'react';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Button } from '@mui/material';
interface AssetDetailsProps {
  assetId: string;
  model: string;
  serial: string;
  employID: string;
  checkIn: string;
  checkOut: string;
  onClose: () => void;  
}

function AssetDetails({ assetId, model, serial, employID, checkIn, checkOut, onClose }: AssetDetailsProps) {
  return (
    <div>
      <h2>Asset Details</h2>
      <Button onClick={onClose} variant="outlined"> <KeyboardReturnIcon/></Button>
     
      <p>Asset ID: {assetId}</p>
      <p>Model: {model}</p>
      <p>Serial: {serial}</p>
      <p>EmployID: {employID}</p>
      <p>Check In: {checkIn}</p>
      <p>Check Out: {checkOut}</p>
    </div>
  );
}

export default AssetDetails;
