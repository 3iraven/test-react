import React, { useState } from 'react';
// Ensure AssetDetail is imported correctly
import { IAssetDetail } from '../interface/IAssetDetail'; // Update this path
import { TextField, Button } from '@mui/material';

interface EditAssetProps {
    asset: IAssetDetail;
    onSave: (asset: IAssetDetail) => void;
    onCancel: () => void;
    onDelete: () => void;
  }

  
  const EditAsset: React.FC<EditAssetProps> = ({ asset, onSave, onCancel }) => {
    const [editedAsset, setEditedAsset] = useState<IAssetDetail>(asset);
  
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = event.target;
      setEditedAsset(prev => ({ ...prev, [name]: value }));
    };
  
    return (
      <div>
        <h2>Edit Asset</h2>
        <TextField
          label="Model"
          name="model"
          variant="outlined"
          value={editedAsset.model}
          onChange={handleChange}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Serial"
          name="serial"
          variant="outlined"
          value={editedAsset.serial}
          onChange={handleChange}
          margin="normal"
          fullWidth
        />
        <TextField
          label="EmployID"
          name="employID"
          variant="outlined"
          value={editedAsset.employID}
          onChange={handleChange}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Check In"
          type="time"
          name="checkIn"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          value={editedAsset.checkIn}
          onChange={handleChange}
          margin="normal"
          fullWidth
        />
        <TextField
          label="Check Out"
          type="time"
          name="checkOut"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          value={editedAsset.checkOut}
          onChange={handleChange}
          margin="normal"
          fullWidth
        />
        <div>
          <Button 
            variant="contained" 
            color="primary" 
            onClick={() => onSave(editedAsset)} 
            style={{ marginRight: '8px' }}
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
  
  export default EditAsset;