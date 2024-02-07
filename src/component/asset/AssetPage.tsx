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
import AssetDetails from './AssetDetails';
import EditAsset from './EditAsset'; 

interface AssetDetail {
  assetId: string;
  model: string;
  serial: string;
  employID: string;
  checkIn: string;
  checkOut: string;
}

export default function DataTable() {
    const [selectedAsset, setSelectedAsset] = useState<AssetDetail | null>(null);
    const [isEditing, setIsEditing] = useState(false);
    const [openDialog, setOpenDialog] = useState(false); // State to control dialog visibility
    const [assetToDelete, setAssetToDelete] = useState<string | null>(null); // Track asset ID to delete

  // Function to trigger the edit mode
  const handleEdit = (asset: AssetDetail) => {
    setSelectedAsset(asset);
    setIsEditing(true); // Enter editing mode
  };

  // Function to save the edited asset
  const handleSave = (editedAsset: AssetDetail) => {
    // Logic to update the asset in your data goes here
    console.log("Edited Asset", editedAsset);
    setIsEditing(false);
    setSelectedAsset(null); // Exit editing mode
  };

  // Function to cancel the edit
  const handleCancel = () => {
    setIsEditing(false);
    setSelectedAsset(null); // Exit editing mode
  };


  // Function to open confirmation dialog
  const handleDeleteClick = (assetId: string) => {
    setAssetToDelete(assetId);
    setOpenDialog(true);
  };

  // Function to close confirmation dialog
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setAssetToDelete(null);
  };
  // Define handleClose here
  const handleClose = () => {
    setSelectedAsset(null); // This will effectively close the AssetDetails view
  };
  // Function to confirm deletion
  const handleDeleteConfirm = () => {
    console.log("Deleting asset with ID:", assetToDelete);
    // Logic to delete the asset from your data source
    // For now, just close the dialog  to prevent the table from being crazy
    setOpenDialog(false);
    setAssetToDelete(null);
  };
  const columns: GridColDef[] = [
    { field: 'model', headerName: 'Model', width: 130 },
    { field: 'serial', headerName: 'Serial', width: 130 },
    { field: 'employID', headerName: 'EmployID', width: 130 },
    { field: 'checkIn', headerName: 'CheckIn', width: 130 },
    { field: 'checkOut', headerName: 'Checkout', width: 130 },
    {
      field: 'actions',
      headerName: 'Actions',
      type: 'actions',
      width: 100,
      getActions: (params) => [
        <GridActionsCellItem
          icon={<BorderColorIcon />}
          label="Edit"
          onClick={() => handleEdit(params.row)} // Trigger edit mode
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
          onClick={() => setSelectedAsset({
            assetId: params.id.toString(),
            model: params.row.model,
            serial: params.row.serial,
            employID: params.row.employID,
            checkIn: params.row.checkIn,
            checkOut: params.row.checkOut,
          })}
          showInMenu
        />,
      ],
    },
  ];

  const rows = [
    { id: 1, model: 'Model1', serial: 'Serial1', employID: 'EID1', checkIn: '09:00', checkOut: '17:00' },
    { id: 2, model: 'Model2', serial: 'Serial2', employID: 'EID2', checkIn: '08:00', checkOut: '18:00' },
    { id: 3, model: 'Model3', serial: 'Serial3', employID: 'EID3', checkIn: '07:00', checkOut: '19:00' },

  ];

  return (
    <div style={{ width: '100%' }}>


<div style={{ width: '100%' }}>
      {isEditing && selectedAsset ? (
        <EditAsset
                      asset={selectedAsset}
                      onSave={handleSave}
                      onCancel={handleCancel} onDelete={function (): void {
                          throw new Error('Function not implemented.');
                      } }        />
      ) : selectedAsset ? (
        <AssetDetails
        assetId={selectedAsset.assetId}
        model={selectedAsset.model}
        serial={selectedAsset.serial}
        employID={selectedAsset.employID}
        checkIn={selectedAsset.checkIn}
        checkOut={selectedAsset.checkOut}
        onClose={handleClose} // Pass handleClose here
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
                   }}/>

        <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Confirm Delete"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure you want to delete this asset? This action cannot be undone.
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
      )}
    </div>
    </div>
  );
}

