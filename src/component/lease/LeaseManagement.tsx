import { Button } from "@mui/material";
import { useState } from "react";
import { ILeaseDetail } from "../interface/ILeaseDetail"; // Make sure this path and interface are correctly defined for lease details
import AddLease from "./AddLease"; // Assume you have a similar component for adding leases

import AddSharpIcon from '@mui/icons-material/AddSharp';

const LeaseManagement = () => {
    const [isAddOpen, setIsAddOpen] = useState(false);
  
    const handleOpenAddDialog = () => setIsAddOpen(true);
    const handleCloseAddDialog = () => setIsAddOpen(false);
  
    const handleSaveLease = (lease: ILeaseDetail) => {
      console.log('Saving lease:', lease);
      // Here you would add code to save the lease to your state or backend
    };
  
    return (
      <div>
        <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '20px' }}>
          <Button 
            variant="contained" // Changed to "contained" for more emphasis, adjust as needed
            color="primary" 
            onClick={handleOpenAddDialog}
            startIcon={<AddSharpIcon />}
          >
            Add New Lease
          </Button>
        </div>
  
        <AddLease open={isAddOpen} onClose={handleCloseAddDialog} onSave={handleSaveLease} />
        {/* The rest of your lease management UI */}
      </div>
    );
};
  
export default LeaseManagement;
