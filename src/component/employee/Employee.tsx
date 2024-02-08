
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
 
  
import EmployeeDetails from './EmployeeDetails'; 

import { IEmployeeDetail } from '../interface/IEmployeeDetail'; // Update the path accordingly
import EditEmployee from './EmployeeEdit';
import EmployeeManagement from './EmployeeManagement';

export default function UserTable() {
  
    const [selectedUser, setSelectedUser] = useState<IEmployeeDetail | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [openDialog, setOpenDialog] = useState(false);
    const [userToDelete, setUserToDelete] = useState<string | null>(null);

    const handleEdit = (user: IEmployeeDetail) => {
        setSelectedUser(user);
        setIsEditing(true);
    };

    const handleSave = (editedUser: IEmployeeDetail) => {
        console.log("Edited User", editedUser);
        setIsEditing(false);
        setSelectedUser(null);
    };

    const handleCancel = () => {
        setIsEditing(false);
        setSelectedUser(null);
    };

    const handleDeleteClick = (userId: string) => {
        setUserToDelete(userId);
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
        setUserToDelete(null);
    };

    const handleDeleteConfirm = () => {
        console.log("Deleting user with ID:", userToDelete);
        setOpenDialog(false);
        setUserToDelete(null);
    };

    const columns: GridColDef[] = [
        { field: 'sid', headerName: 'SID', width: 130 },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'employee_status', headerName: 'Status', width: 130 },
        { field: 'comments', headerName: 'Comments', width: 300 },
        { field: 'date_created', headerName: 'Date Created', width: 150 },
        { field: 'date_updated', headerName: 'Date Updated', width: 150 },
        {
          field: 'actions',
          headerName: 'Actions',
          type: 'actions',
          width: 150,
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
              onClick={() => setSelectedUser(params.row)}
              showInMenu
            />,
          ],
        },
    ];

    const rows = [
      {
        id: '1',
        sid: 'S001',
        email: 'user1@example.com',
        employee_status: 'Active',
        comments: 'No issues, performing well.',
        date_created: '2022-01-01T12:00:00Z',
        date_updated: '2022-06-01T12:00:00Z',
      },
      {
        id: '2',
        sid: 'S002',
        email: 'user2@example.com',
        employee_status: 'Inactive',
        comments: 'On leave.',
        date_created: '2022-02-15T12:00:00Z',
        date_updated: '2022-07-01T12:00:00Z',
      },
      {
        id: '3',
        sid: 'S003',
        email: 'user3@example.com',
        employee_status: 'Active',
        comments: 'Recently promoted.',
        date_created: '2022-03-10T12:00:00Z',
        date_updated: '2022-08-01T12:00:00Z',
      }
    ];
    

    return (
        <div style={{ width: '100%' }}>
              <div><EmployeeManagement/></div>
               {isEditing && selectedUser ? (
                <EditEmployee
                    employee={selectedUser} // Corrected prop name from 'user' to 'employee'
                    onSave={handleSave}
                    onCancel={handleCancel}
                />
            ) : selectedUser ? (
                <EmployeeDetails // Assuming this is the correct component
                    {...selectedUser}
                    onClose={() => setSelectedUser(null)}
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
                        Are you sure you want to delete this user? This action cannot be undone.
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
