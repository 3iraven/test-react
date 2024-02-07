import React, { useState } from 'react';
import { DataGrid, GridColDef, GridActionsCellItem } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import InfoIcon from '@mui/icons-material/Info';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import VendorDetails from './VendorDetail'; 
import EditVendor from './EditVendor'; 
import { IVendor } from '../interface/IVendor';

export default function VendorPage() {
    const [selectedVendor, setSelectedVendor] = useState<IVendor | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [vendorToDelete, setVendorToDelete] = useState<string | null>(null);

    const handleEdit = (vendor: IVendor) => {
        setSelectedVendor(vendor);
        setIsEditing(true);
    };

    const handleSave = (editedVendor: IVendor) => {
        console.log("Edited Vendor", editedVendor);
        setIsEditing(false);
        setSelectedVendor(null);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setSelectedVendor(null);
    };

    const handleDeleteClick = (vendorId: string) => {
        setVendorToDelete(vendorId);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setVendorToDelete(null);
    };

    const handleDeleteConfirm = () => {
        console.log("Deleting vendor with ID:", vendorToDelete);
        setOpenDialog(false);
        setVendorToDelete(null);
    };

    const columns: GridColDef[] = [
        { field: 'firstName', headerName: 'First Name', width: 130 },
        { field: 'lastName', headerName: 'Last Name', width: 130 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'phone', headerName: 'Phone', width: 130 },
        { field: 'company', headerName: 'Company', width: 160 },


        {
          field: 'actions',
          headerName: 'Actions',
          type: 'actions',
          width: 100,
          getActions: (params) => [
            <GridActionsCellItem
              icon={<BorderColorIcon />}
              label="Edit"
              onClick={() => handleEdit(params.row)}
              showInMenu
            />,
            <GridActionsCellItem
              icon={<DeleteIcon />}
              label="Delete"
              onClick={() => handleDeleteClick(params.id.toString())}
              showInMenu
            />,
            <GridActionsCellItem
              icon={<InfoIcon />}
              label="Info"
              onClick={() => setSelectedVendor(params.row)} // Assuming a function to set selectedVendor for viewing details
              showInMenu
            />,
          ],
        },
      ];
      

      const rows: readonly any[] = [
        {
          id: 1,
          firstName: 'John',
          lastName: 'Doe',
          email: 'john.doe@example.com',
          phone: '123-456-7890',
          company: 'Acme Corporation',
          address: '123 Main St',
          city: 'Anytown',
          state: 'CA',
          zipcode: '90001',
          contract: '123456',
          term: '1 Year',
          price: '$10,000'
        },
        {
          id: 2,
          firstName: 'Jane',
          lastName: 'Smith',
          email: 'jane.smith@example.com',
          phone: '098-765-4321',
          company: 'Globex Corporation',
          address: '456 Elm St',
          city: 'Othertown',
          state: 'NY',
          zipcode: '10001',
          contract: '654321',
          term: '2 Years',
          price: '$20,000'
        },
        {
          id: 3,
          firstName: 'Alice',
          lastName: 'Johnson',
          email: 'alice.johnson@example.com',
          phone: '555-123-4567',
          company: 'Initech',
          address: '789 Pine St',
          city: 'Sometown',
          state: 'TX',
          zipcode: '75001',
          contract: '987654',
          term: '3 Years',
          price: '$30,000'
        }
      ];
      

      return (
        <div style={{ width: '100%' }}>
            {isEditing && selectedVendor ? (
                <EditVendor
                      vendor={selectedVendor}
                      onSave={handleSave}
                      onCancel={handleCancel} onDelete={function (): void {
                          throw new Error('Function not implemented.');
                      } }                    // onDelete needs proper implementation if you plan to use it
                />
            ) : selectedVendor ? (
                <VendorDetails
                    {...selectedVendor}
                    onClose={() => setSelectedVendor(null)}
                />
            ) : (
                <div style={{ height: 400, marginTop: '20px' }}>
                    <DataGrid
                        rows={rows}
                        columns={columns}
                        initialState={{
                            pagination: {
                                paginationModel: { page: 0, pageSize: 5 },
                            },
                        }}
                    />
                </div>
            )}
    
            {/* Delete confirmation dialog */}
            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this vendor? This action cannot be undone.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseDialog}>Cancel</Button>
                    <Button onClick={handleDeleteConfirm} color="primary" autoFocus>
                        Confirm
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}
