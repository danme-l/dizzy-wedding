import React from 'react';
import { Container, Box, Typography } from '@mui/material';

const AboutUs = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>
        About Us
      </Typography>
      <Typography variant="h5">Groom's Family</Typography>
      <Typography variant="h5">Groomsmen</Typography>
          <Box
            component="img"
            // sx={{
            //   width: '84%',
            //   m: 0
            // }}
            alt="Dan and Izzy"
            src="https://i.postimg.cc/kgsM8ZcP/groomsmen.png"
            />
      <Typography variant="h5">Bride's Family</Typography>
      <Typography variant="h5">Bridesmaids</Typography>
    </div>
  );
};

export default AboutUs;
