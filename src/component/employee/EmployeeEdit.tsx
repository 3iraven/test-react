import React, { useState, useEffect } from 'react';
import { TextField, Button } from '@mui/material';


interface IEmployeeDetail{
    id: string;
    sid: string;
    email: string;
    employee_status: string;
    comments: string;
    date_created: string;
    date_updated: string;
  }

interface EditEmployeeProps {
  employee: IEmployeeDetail;
  onSave: (employee: IEmployeeDetail) => void;
  onCancel: () => void;
}

const EditEmployee: React.FC<EditEmployeeProps> = ({ employee, onSave, onCancel }) => {
  const [editedEmployee, setEditedEmployee] = useState<IEmployeeDetail>(employee);
  const [isSaveEnabled, setIsSaveEnabled] = useState<boolean>(false);

  useEffect(() => {
    // Basic validation: check if email and employee_status are not empty
    const isDataValid = editedEmployee.email.trim() !== '' && editedEmployee.employee_status.trim() !== '';
    setIsSaveEnabled(isDataValid);
  }, [editedEmployee]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setEditedEmployee(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      {/* ID Field */}
      <TextField
        label="ID"
        name="id"
        variant="outlined"
        value={editedEmployee.id}
        onChange={handleChange}
        margin="normal"
        fullWidth
        disabled
      />
      {/* Other Fields */}
      <TextField
        label="Email"
        name="email"
        variant="outlined"
        value={editedEmployee.email}
        onChange={handleChange}
        margin="normal"
        fullWidth
        required
      />
      <TextField
        label="Employee Status"
        name="employee_status"
        variant="outlined"
        value={editedEmployee.employee_status}
        onChange={handleChange}
        margin="normal"
        fullWidth
        required
      />
      {/* Additional Fields */}
      <div>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onSave(editedEmployee)}
          style={{ marginRight: '8px' }}
          disabled={!isSaveEnabled} // Disable save button if data is invalid
        >
          Save
        </Button>
        <Button
          variant="outlined"
          onClick={onCancel}
        >
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default EditEmployee;
