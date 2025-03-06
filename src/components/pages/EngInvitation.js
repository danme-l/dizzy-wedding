import React from 'react';
import { Container, Typography } from '@mui/material';
import { Box, Grid, TextField, Button} from '@mui/material';


//adding JS to flip the card upon click TODO: find a way to make this function universal
const handletwist = () => {
    document.getElementById('card').classList.toggle('is-flipped');
  };


const EngInv = ({name}) => {
  return (
    <Container>
      {/*Engagement card with link to RSVP */}
      <div id="card" onClick={handletwist}>
      <Container justifyContent={true}>
      <Grid container spacing={1} 
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems:'center'
          }}
        >
        <Grid item xs={12} md={6}>
          <Box sx={{
            p: 1,
            gap: 1
          }}>
            <Typography variant='invitation1'>
              Welcome, {name}! <br/>
            </Typography>
            <Typography variant="invitation2"> 
              Please join us to celebrate the engagement of Isabel Hadziomerovic & Daniel Meleras
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} >
          <Box
            component="img"
            sx={{
              width: '84%',
              m: 0
            }}
            alt="Dan and Izzy"
            // src="static/images/DSC_3975.jpg"
            src="https://dizzy-wedding-site.s3.amazonaws.com/galleryPhotos/IMG_0357.jpg"
            />
        </Grid>
      </Grid>
    </Container>
    <hr/>
    <Container align='center'>
      <Typography variant="h4" gutterBottom>
        Details
      </Typography>
      <Typography variant="body1">May 31, 2025</Typography>
      <Typography variant="body1">352 Acacia ave, Ottawa</Typography>
      <Typography variant="body1">Time: 3 PM</Typography>
      <Typography variant="body1">Dress Code: Business Casual</Typography>
    </Container>
    <hr/>
    <Container align='center'>
    </Container>
    </div>
    </Container>
  );
};

export default EngInv;