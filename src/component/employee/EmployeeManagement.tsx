import { Button } from "@mui/material";
import { useState } from "react";
import { IEmployeeDetail } from "../interface/IEmployeeDetail";
import AddEmployee from "./AddEmployee";



 import AddSharpIcon from '@mui/icons-material/AddSharp';

const EmployeeManagement = () => {
    const [isAddOpen, setIsAddOpen] = useState(false);
  
    const handleOpenAddDialog = () => setIsAddOpen(true);
    const handleCloseAddDialog = () => setIsAddOpen(false);
  
    const handleSaveEmployee = (employee: IEmployeeDetail) => {
      console.log('Saving employee:', employee);
      // Here you would add code to save the employee to your state or backend
    };
  
    return (
      <div>
   <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
  <Button 
    variant="outlined" 
    color="primary" 
    onClick={handleOpenAddDialog}
    startIcon={<AddSharpIcon />}
  >
    Add   </Button>
</div>

  
        <AddEmployee open={isAddOpen} onClose={handleCloseAddDialog} onSave={handleSaveEmployee} />
        {/* The rest of your employee management UI */}
      </div>
    );
  };
  
  export default EmployeeManagement;
  
