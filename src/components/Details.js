import React from 'react';
import { Container, Typography } from '@mui/material';

const Details = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Wedding Details
      </Typography>
      <Typography variant="body1">Date: November 1, 2024</Typography>
      <Typography variant="body1">Location: Ottawa</Typography>
      <Typography variant="body1">Time: Noon</Typography>
    </Container>
  );
};

export default Details;
