import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button'; // Import Button from MUI
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CheckIn from './Checkin';
import { IRow } from './ICheckin';

const columns: (handleCheckInClick: (row: IRow) => void) => GridColDef[] = (handleCheckInClick) => [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
  {
    field: 'checkIn',
    headerName: 'Check-In',
    width: 150,
    renderCell: (params) => (
      <Button
        variant="contained"
        color="primary"
        size="small"
        onClick={() => handleCheckInClick(params.row)}
        style={{ marginLeft: 16 }}
      >
        Check-In
      </Button>
    ),
  },
  {
    field: 'checkOut',
    headerName: 'Check-Out',
    width: 150,
    renderCell: (params) => (
      <Button
        variant="contained"
        color="secondary"
        size="small"
        style={{ marginLeft: 16 }}
      >
        Check-Out
      </Button>
    ),
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataGridDemo() {
  const [selectedRow, setSelectedRow] = React.useState<IRow | null>(null);

  const handleCheckInClick = (row: IRow) => {
    setSelectedRow(row);
  };

  return (
    <Box sx={{ height: 400, width: '100%' }}>
      {selectedRow && <CheckIn row={selectedRow} />}
      <DataGrid
        rows={rows}
        columns={columns(handleCheckInClick)}
        checkboxSelection
        disableRowSelectionOnClick
      />
    </Box>
  );
}
