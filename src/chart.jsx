import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Box } from '@mui/material';
import { ChartData } from '@mui/x-charts';

// Assuming you have some theme setup in your application
// import { useTheme } from '@mui/material/styles';

const App: React.FC = () => {
  // const theme = useTheme(); // If you're using a custom MUI theme

  const data: ChartData<'line'> = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Vendors',
        data: [12, 19, 3, 5, 2, 3],
        borderColor: 'rgb(255, 99, 132)',
      },
      {
        label: 'Assets',
        data: [1, 2, 1, 3, 5, 4],
        borderColor: 'rgb(53, 162, 235)',
      },
      {
        label: 'Employees',
        data: [6, 3, 2, 2, 3, 5],
        borderColor: 'rgb(75, 192, 192)',
      },
    ],
  };

  return (
    <Box sx={{ height: 400, width: 1 }}>
      <LineChart data={data} />
    </Box>
  );
};

export default App;
