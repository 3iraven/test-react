
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



import { ILeaseDetail } from '../interface/ILeaseDetail'; 
import EditLease from './LeaseEdit'; 
import LeaseDetails from './LeaseDetails';

export default function LeaseTable() {
    const [selectedLease, setSelectedLease] = useState<ILeaseDetail | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [leaseToDelete, setLeaseToDelete] = useState<string | null>(null);


    const handleEdit = (lease: ILeaseDetail) => {
        setSelectedLease(lease);
        setIsEditing(true);
    };

    const handleSave = (editedLease: ILeaseDetail) => {
        console.log("Edited Lease", editedLease);
        setIsEditing(false);
        setSelectedLease(null);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setSelectedLease(null);
    };

    const handleDeleteClick = (leaseId: string) => {
        setLeaseToDelete(leaseId);
        setOpenDialog(true);
    };
    const handleDelete = () => {
      console.log('Deleting lease...');
      // Implement deletion logic here
      setSelectedLease(null);
  };
    const handleCloseDialog = () => {
        setOpenDialog(false);
        setLeaseToDelete(null);
    };

    const handleDeleteConfirm = () => {
        console.log("Deleting lease with ID:", leaseToDelete);
        setOpenDialog(false);
        setLeaseToDelete(null);
    };



    const columns: GridColDef[] = [
      { field: 'id', headerName: 'ID', width: 90}, 
      { field: 'device_id', headerName: 'Device ID', width: 120 },
      { field: 'lessor', headerName: 'Lessor', width: 150 },
      { field: 'contract_id', headerName: 'Contract ID', width: 150 },
      {
        field: 'start_date',
        headerName: 'Start Date',
        width: 110,
        type: 'date',
        valueGetter: ({ value }) => value ? new Date(value) : null,
      },
      {
        field: 'lease_start',
        headerName: 'Lease Start',
        width: 110,
        type: 'date',
        valueGetter: ({ value }) => value ? new Date(value) : null,
      },
      {
        field: 'lease_end',
        headerName: 'Lease End',
        width: 110,
        type: 'date',
        valueGetter: ({ value }) => value ? new Date(value) : null,
      },
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
            onClick={() => setSelectedLease(params.row)}
            showInMenu
          />,
        ],
      },
    ];
    
    const rows: ILeaseDetail[] = [
      {
        id: '1',
        device_id: 'Device001',
        lessor: 'Company A',
        contract_id: 'Contract001',
        start_date: '2023-01-01',
        comment: 'First lease comment',
        lease_start: '2023-01-01',
        lease_end: '2024-01-01',
      },
      {
        id: '2',
        device_id: 'Device002',
        lessor: 'Company B',
        contract_id: 'Contract002',
        start_date: '2023-02-01',
        comment: 'Second lease comment',
        lease_start: '2023-02-01',
        lease_end: '2024-02-01',
      },
      {
        id: '3',
        device_id: 'Device003',
        lessor: 'Company C',
        contract_id: 'Contract003',
        start_date: '2023-03-01',
        comment: 'Third lease comment',
        lease_start: '2023-03-01',
        lease_end: '2024-03-01',
      }
    ];
    
    
    return (
        <div style={{ width: '100%' }}>
                        {isEditing && selectedLease ? (
                <EditLease
                    lease={selectedLease}
                    onSave={handleSave}
                    onCancel={handleCancel}
                    onDelete={handleDelete} // Provide onDelete prop
                />
            ) : selectedLease ? (
                <LeaseDetails
                    {...selectedLease}
                    onClose={() => setSelectedLease(null)}
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

            <Dialog
                open={openDialog}
                onClose={handleCloseDialog}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Are you sure you want to delete this lease? This action cannot be undone.
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