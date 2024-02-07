import React from 'react';
import { IRow } from './ICheckin'; // Adjust the import path as necessary

interface CheckInProps {
    row: IRow;
  }
  
  const CheckIn: React.FC<CheckInProps> = ({ row }) => {
  return (
    <div>
      <h2>Check-In Information</h2>
      <p>ID: {row.id}</p>
      <p>First Name: {row.firstName}</p>
      <p>Last Name: {row.lastName}</p>
      <p>Age: {row.age}</p>
      {/* Add more fields as needed */}
    </div>
  );
};

export default CheckIn;


// import React, { useState } from 'react';

// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import { TextField, Button } from '@mui/material';
// import { IRow } from './ICheckin'; // Adjust the import path as necessary
// import { Check } from '@mui/icons-material';

// interface CheckInProps {
//     row: IRow;
//     handleClose: () => void; // Function to handle closing the modal
//   }
  

//   const CheckIn: React.FC<CheckInProps> = ({ row, handleClose }) => {
//     const [editRow, setEditRow] = useState({
//       firstName: row.firstName,
//       lastName: row.lastName,
//       age: row.age,
//     });
  
//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//       setEditRow({ ...editRow, [e.target.name]: e.target.value });
//     };
  
//     const handleSave = () => {
//       // Implement saving logic here
//       console.log('Updated Info:', editRow);
//       handleClose(); // Optionally close the modal after saving
//     };
  
//     return (
//       <Box sx={{ p: 2 }}>
//         <Typography variant="h6" component="h2">
//           Check-In Information
//         </Typography>
//         <TextField
//           label="First Name"
//           variant="outlined"
//           name="firstName"
//           value={editRow.firstName}
//           onChange={handleChange}
//           margin="normal"
//           fullWidth
//         />
//         <TextField
//           label="Last Name"
//           variant="outlined"
//           name="lastName"
//           value={editRow.lastName}
//           onChange={handleChange}
//           margin="normal"
//           fullWidth
//         />
//         <TextField
//           label="Age"
//           variant="outlined"
//           name="age"
//           type="number"
//           value={editRow.age || ''}
//           onChange={handleChange}
//           margin="normal"
//           fullWidth
//         />
//         <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
//           <Button onClick={handleSave} variant="contained" color="primary">
//             Save
//           </Button>
//           <Button onClick={handleClose} variant="outlined" color="secondary">
//             Cancel
//           </Button>
//         </Box>
//       </Box>
//     );
//   };
  

//   export default CheckIn 