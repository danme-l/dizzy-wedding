import { Box, Container, Typography, Link } from '@mui/material';
import MapComponent from '../utils/MapComponent';
import FAQ from './FAQ';
import Schedule from './Schedule';

import { useConfig } from "../../ConfigContext"

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
  // configs
  const config = useConfig();

  return (
    <Container sx={{ display: 'flex', flexDirection:'column', justifyContent: 'center',alignItems: 'center'}}>
        {/* SECTION Venue */}
        <Typography variant="h1" gutterBottom>
            The Venue
        </Typography>
        <Section
            imageSrc={config.wedding.venue.photoLinks[1]}
            imageAlt="Venue"
            >
              {config.wedding.venue.description}
        </Section>

        <MapComponent />

        {/* SECTION Alt Hotel */}
        <Typography variant="h1" gutterBottom sx={{my: 5}}>
            The Hotel
        </Typography>
        <Section
            imageSrc={config.wedding.hotel.photoLinks[0]}
            imageAlt="Hotel"
            >
            <Typography variant='body1'>
                {config.wedding.hotel.description}
            </Typography>
        </Section>

        {/* SECTION Schedule */}
        <Typography variant="h1" gutterBottom sx={{my: 3}}>
            Wedding Day Schedule
        </Typography>
        <Section
            imageSrc={config.wedding.venue.photoLinks[2]}
            imageAlt="Garden"
            >
            <Schedule />
        </Section>
        <FAQ />
    </Container>
  );
};

export default Details;
