import React from 'react';
import { Container, Typography } from '@mui/material';

const Details = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Wedding Details
      </Typography>
      <Typography variant="body1">Date: January 10, 2026</Typography>
      <Typography variant="body1">Location: Montreal</Typography>
      <Typography variant="body1">Time: Noon</Typography>
    </Container>
  );
};

export default Details;
