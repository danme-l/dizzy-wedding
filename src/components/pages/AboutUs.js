import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import { useConfig } from "../../ConfigContext";

const AboutUs = () => {
  const config = useConfig();
  console.log(config.aboutUs);
  
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
            src={config.aboutUs.groomsmen.photoLink}
            />
      <Typography variant="h5">Bride's Family</Typography>
      <Typography variant="h5">Bridesmaids</Typography>
    </div>
  );
};

export default AboutUs;
