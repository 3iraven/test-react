import React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Container } from '@mui/material';

const ThreeColumnComponent: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        {/* First column */}
        <Grid item xs={4}>
          <Paper style={{ width: '100%', height: 'auto', padding: '20px' }}>
            Column 1 Content
          </Paper>
        </Grid>
        {/* Second column */}
        <Grid item xs={4}>
          <Paper style={{ width: '100%', height: 'auto', padding: '20px' }}>
            Column 2 Content
          </Paper>
        </Grid>
        {/* Third column */}
        <Grid item xs={4}>
          <Paper style={{ width: '100%', height: 'auto', padding: '20px' }}>
            Column 3 Content
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ThreeColumnComponent;
