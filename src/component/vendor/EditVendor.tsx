import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
// Update the import path according to your project structure
import { IVendor } from '../interface/IVendor';

interface EditVendorProps {
  vendor: IVendor;
  onSave: (vendor: IVendor) => void;
  onCancel: () => void;
  onDelete: () => void; // Assuming you want to keep the onDelete here for future use
}

const EditVendor: React.FC<EditVendorProps> = ({ vendor, onSave, onCancel, onDelete }) => {
  const [editedVendor, setEditedVendor] = useState<IVendor>(vendor);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditedVendor(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2>Edit Vendor</h2>
      {/* Update the fields based on the Vendor interface */}
      <TextField label="First Name" name="firstName" variant="outlined" value={editedVendor.firstName} onChange={handleChange} margin="normal" fullWidth />
      <TextField label="Last Name" name="lastName" variant="outlined" value={editedVendor.lastName} onChange={handleChange} margin="normal" fullWidth />
      <TextField label="Email" name="email" variant="outlined" value={editedVendor.email} onChange={handleChange} margin="normal" fullWidth />
      <TextField label="Phone" name="phone" variant="outlined" value={editedVendor.phone} onChange={handleChange} margin="normal" fullWidth />
      <TextField label="Company" name="company" variant="outlined" value={editedVendor.company} onChange={handleChange} margin="normal" fullWidth />
      <TextField label="Address" name="address" variant="outlined" value={editedVendor.address} onChange={handleChange} margin="normal" fullWidth />
      <TextField label="City" name="city" variant="outlined" value={editedVendor.city} onChange={handleChange} margin="normal" fullWidth />
      <TextField label="State" name="state" variant="outlined" value={editedVendor.state} onChange={handleChange} margin="normal" fullWidth />
      <TextField label="Zipcode" name="zipcode" variant="outlined" value={editedVendor.zipcode} onChange={handleChange} margin="normal" fullWidth />
      <TextField label="Contract" name="contract" variant="outlined" value={editedVendor.contract} onChange={handleChange} margin="normal" fullWidth />
      <TextField label="Term" name="term" variant="outlined" value={editedVendor.term} onChange={handleChange} margin="normal" fullWidth />
      <TextField label="Price" name="price" variant="outlined" value={editedVendor.price} onChange={handleChange} margin="normal" fullWidth />
      
      <div>
        <Button variant="contained" color="primary" onClick={() => onSave(editedVendor)} style={{ marginRight: '8px' }}>Save</Button>
        <Button variant="outlined" onClick={onCancel}>Cancel</Button>
        {/* Assuming onDelete will be implemented later */}
      </div>
    </div>
  );
};

export default EditVendor;
