import React from 'react';
import { Container, Typography } from '@mui/material';

const AboutUs = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="h5">Groom's Family</Typography>
      <Typography variant="h5">Groomsmen</Typography>
      <Typography variant="h5">Bride's Family</Typography>
      <Typography variant="h5">Bridesmaids</Typography>
    </Container>
  );
};

export default AboutUs;
