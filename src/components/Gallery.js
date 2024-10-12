import React from 'react';
import { Container, Typography } from '@mui/material';
import MasonryImageList from './ImageDisplay';

const Gallery = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Gallery
      </Typography>
      <MasonryImageList />

      {/* TODO add guest photo submission box? Or go by email/text to avoid size limitations */}
    </Container>
  );
};

export default Gallery;