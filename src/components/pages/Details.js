import React from 'react';
import { Box, Container, Typography, Link } from '@mui/material';
import MapComponent from '../utils/MapComponent';
import FAQ from './FAQ';
import Schedule from './Schedule';

const Section = ({ children, imageSrc, imageAlt, imageFirst = false }) => {
  return (
    <Box
      sx={{
        maxWidth: '80%',
        display: 'flex',
        flexDirection: {
          xs: 'column',
          md: imageFirst ? 'row-reverse' : 'row',
        },
        justifyContent: 'center',
        alignItems: 'center',
        mx: 'auto',
        my: 2,
        gap: 2,
      }}
    >
      <Box sx={{ flex: 1, textAlign: { xs: 'center', md: 'left' } }}>
        {typeof children === 'string' ? (
          <Typography variant="body1">{children}</Typography>
        ) : (
          children
        )}
      </Box>

      <Box
        component="img"
        sx={{
          maxHeight: 500,
          width: { xs: '100%', md: 'auto' },
          borderRadius: 2,
        }}
        alt={imageAlt}
        src={imageSrc}
      />
    </Box>
  );
};

const Details = () => {
  return (
    <Container sx={{ display: 'flex', flexDirection:'column', justifyContent: 'center',alignItems: 'center'}}>
        {/* SECTION Venue */}
        <Typography variant="h1" gutterBottom>
            The Venue
        </Typography>
        <Section
            imageSrc="https://i.postimg.cc/RZFysDmB/toundra-reception.jpg"
            imageAlt="Venue"
            >
                The Wedding will be held at La Toundra, in the Floralies Gardens of Parc Jean Drapeau.
        </Section>

        <MapComponent />

        {/* SECTION Alt Hotel */}
        <Typography variant="h1" gutterBottom sx={{my: 5}}>
            The Hotel
        </Typography>
        <Section
            imageSrc="https://i.postimg.cc/RZD8jLCn/alt-hotel.jpg"
            imageAlt="Venue"
            >
            <Typography variant='body1'>
                The Bride and Groom and the wedding party will 
                be staying at the Alt Hotel in Griffintown. <br />
                They have kindly offered a discount for our guests to use to stay with us.
                Details to come soon!
                {/* Book your rooms <Link>here</Link> and use the code <em>dizzy</em>. */}
            </Typography>
        </Section>

        {/* SECTION Schedule */}
        <Typography variant="h1" gutterBottom sx={{my: 3}}>
            Wedding Day Schedule
        </Typography>
        <Section
            imageSrc="https://i.postimg.cc/28TgxfPG/floralies-gardens.jpg"
            imageAlt="Garden"
            >
            <Typography variant='body1'>
                <Schedule />
            </Typography>
        </Section>
        <FAQ />

    </Container>
  );
};

export default Details;
