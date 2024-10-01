import React from 'react';
import { Container, Typography } from '@mui/material';

const Gallery = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Our Gallery
      </Typography>
      <Typography variant="body1">Photos will be added here!</Typography>
      {/* TODO add guest photo submission box? Or go by email/text to avoid size limitations */}
    </Container>
  );
};

export default Gallery;
