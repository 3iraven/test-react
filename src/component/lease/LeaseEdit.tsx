import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import { ILeaseDetail } from '../interface/ILeaseDetail'; // Define this interface based on your lease details

interface EditLeaseProps {
    lease: ILeaseDetail;
    onSave: (lease: ILeaseDetail) => void;
    onCancel: () => void;
    onDelete: () => void;
}

const EditLease: React.FC<EditLeaseProps> = ({ lease, onSave, onCancel, onDelete }) => {
    const [editedLease, setEditedLease] = useState<ILeaseDetail>(lease);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setEditedLease(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div>
            <h2>Edit Lease</h2>
            {/* Replace or adjust fields as necessary for lease details */}
            <TextField
                label="Device ID"
                name="device_id"
                variant="outlined"
                value={editedLease.device_id}
                onChange={handleChange}
                margin="normal"
                fullWidth
            />
            <TextField
                label="Lessor"
                name="lessor"
                variant="outlined"
                value={editedLease.lessor}
                onChange={handleChange}
                margin="normal"
                fullWidth
            />
            <TextField
                label="Contract ID"
                name="contract_id"
                variant="outlined"
                value={editedLease.contract_id}
                onChange={handleChange}
                margin="normal"
                fullWidth
            />
            <TextField
                label="Start Date"
                name="start_date"
                type="date"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                value={editedLease.start_date}
                onChange={handleChange}
                margin="normal"
                fullWidth
            />
            <TextField
                label="Comment"
                name="comment"
                variant="outlined"
                multiline
                rows={4}
                value={editedLease.comment}
                onChange={handleChange}
                margin="normal"
                fullWidth
            />
            <TextField
                label="Lease Start"
                name="lease_start"
                type="date"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                value={editedLease.lease_start}
                onChange={handleChange}
                margin="normal"
                fullWidth
            />
            <TextField
                label="Lease End"
                name="lease_end"
                type="date"
                variant="outlined"
                InputLabelProps={{ shrink: true }}
                value={editedLease.lease_end}
                onChange={handleChange}
                margin="normal"
                fullWidth
            />
            <div>
                <Button 
                    variant="contained" 
                    color="primary" 
                    onClick={() => onSave(editedLease)} 
                    style={{ marginRight: '8px' }}
                >
                    Save
                </Button>
                <Button 
                    variant="outlined" 
                    color="secondary"
                    onClick={onDelete}
                    style={{ marginRight: '8px' }}
                >
                    Delete
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

export default EditLease;
