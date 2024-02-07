import React from 'react';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import { Button, Box, Typography } from '@mui/material';

interface VendorDetailsProps {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
  contract: string;
  term: string;
  price: string;
  onClose: () => void;  
}

function VendorDetails({
  firstName,
  lastName,
  email,
  phone,
  company,
  address,
  city,
  state,
  zipcode,
  contract,
  term,
  price,
  onClose
}: VendorDetailsProps) {
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>Vendor Details</Typography>
      <Button onClick={onClose} variant="outlined" startIcon={<KeyboardReturnIcon />} sx={{ mb: 2 }}>
        Return
      </Button>
      <Typography variant="body1"><strong>First Name:</strong> {firstName || 'Not provided'}</Typography>
      <Typography variant="body1"><strong>Last Name:</strong> {lastName || 'Not provided'}</Typography>
      <Typography variant="body1"><strong>Email:</strong> {email || 'Not provided'}</Typography>
      <Typography variant="body1"><strong>Phone:</strong> {phone || 'Not provided'}</Typography>
      <Typography variant="body1"><strong>Company:</strong> {company || 'Not provided'}</Typography>
      <Typography variant="body1"><strong>Address:</strong> {address || 'Not provided'}</Typography>
      <Typography variant="body1"><strong>City:</strong> {city || 'Not provided'}</Typography>
      <Typography variant="body1"><strong>State:</strong> {state || 'Not provided'}</Typography>
      <Typography variant="body1"><strong>Zipcode:</strong> {zipcode || 'Not provided'}</Typography>
      <Typography variant="body1"><strong>Contract:</strong> {contract || 'Not provided'}</Typography>
      <Typography variant="body1"><strong>Term:</strong> {term || 'Not provided'}</Typography>
      <Typography variant="body1"><strong>Price:</strong> {price || 'Not provided'}</Typography>
    </Box>
  );
}

export default VendorDetails;
