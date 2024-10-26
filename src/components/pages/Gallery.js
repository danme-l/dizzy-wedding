import React from 'react';
import { Container, Typography } from '@mui/material';
import ImageDisplay from '../utils/ImageDisplay';

const Gallery = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Gallery
      </Typography>
      <ImageDisplay />

      {/* TODO add guest photo submission box? Or go by email/text to avoid size limitations */}
    </Container>
  );
};

export default Gallery;