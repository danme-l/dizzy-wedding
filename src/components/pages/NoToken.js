import React from 'react';
import { Container, Typography } from '@mui/material';

const NoToken = () => {
  return (
    <Container sx={{my: 2}}>
      <Typography variant="h3" gutterBottom>
        Uh Oh!
      </Typography>
      <Typography variant="body1">
        You've landed on the website for Dan and Izzy's wedding.
      </Typography>
      <Typography variant="body1">
        If you're here, you've probably been invited. Check your emails for the right link.
      </Typography>
    </Container>
  );
};

export default NoToken;
