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
            imageSrc="https://www.parcjeandrapeau.com/files/photos/mariage_salle_reception_toundra_espaces_locatifs_parc_jean_drapeau_montreal_002.jpg"
            imageAlt="Venue"
            >
                The Wedding will be held at La Toundra, in the Florailles Gardens of Parc Jean Drapeau.
        </Section>

        <MapComponent />

        {/* SECTION Alt Hotel */}
        <Typography variant="h1" gutterBottom sx={{my: 3}}>
            The Hotel
        </Typography>
        <Section
            imageSrc="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcimg0.ibsrv.net%2Fcimg%2Fwww.fodors.com%2F2000x2000_60%2F316%2F5a79d61d50bd1-316316.jpg&f=1&nofb=1&ipt=470cc236692cb631c2604340dec8972fc9cc6ddf913136abdb34de1c95760c9b"
            imageAlt="Venue"
            >
            <Typography variant='body1'>
                The Bride and Groom and the wedding party will 
                be staying at the Alt Hotel in Griffintown. <br />
                They have kindly offered a discount for our guests to use to stay with us.
                Book your rooms <Link>here</Link> and use the code <em>dizzy</em>.
            </Typography>
        </Section>

        {/* SECTION Schedule */}
        <Typography variant="h1" gutterBottom sx={{my: 3}}>
            Wedding Day Schedule
        </Typography>
        <Section
            imageSrc="https://www.parcjeandrapeau.com/files/photos/jardins_des_floralies_nature_fleurs_arbustes_arbes_lagunes_juin_2019_003.jpg"
            imageAlt="Garden"
            >
            <Typography variant='body1'>
                <Schedule />
            </Typography>
        </Section>

        {/* https://www.parcjeandrapeau.com/files/photos/jardins_des_floralies_nature_fleurs_arbustes_arbes_lagunes_juin_2019_003.jpg */}

        <FAQ />

    </Container>
  );
};

export default Details;
