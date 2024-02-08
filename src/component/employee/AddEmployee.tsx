// AddEmployee.jsx
import React, { useState } from 'react';
import { TextField, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import { IEmployeeDetail } from '../interface/IEmployeeDetail'; // Adjust import path as needed

interface AddEmployeeProps {
  open: boolean;
  onClose: () => void;
  onSave: (employee: IEmployeeDetail) => void;
}

const AddEmployee: React.FC<AddEmployeeProps> = ({ open, onClose, onSave }) => {
  const [newEmployee, setNewEmployee] = useState<IEmployeeDetail>({
    id: '', // Assuming ID is generated backend
    sid: '',
    email: '',
    employee_status: '',
    comments: '',
    date_created: '',
    date_updated: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleSave = () => {
    onSave(newEmployee);
    onClose(); // Close the dialog after saving
    // Reset the form if necessary
    setNewEmployee({
      id: '', // Reset the state
      sid: '',
      email: '',
      employee_status: '',
      comments: '',
      date_created: '',
      date_updated: '',
    });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Add New Employee</DialogTitle>
      <DialogContent>
        {/* Add TextField for each property you wish to capture */}
        <TextField label="SID" name="sid" value={newEmployee.sid} onChange={handleChange} fullWidth margin="dense" />
        <TextField label="Email" name="email" value={newEmployee.email} onChange={handleChange} fullWidth margin="dense" />
        {/* Add more fields as needed */}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddEmployee;
