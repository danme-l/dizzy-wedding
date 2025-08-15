import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Container, Typography, Link } from '@mui/material';

const FAQ = () => {
  return (
    <Container>

      <hr />
      <Typography variant="h1" gutterBottom align='center'>
        Frequently Asked Questions
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="body1">What is the dress code?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Formal attire requested. Ladies, that means (Izzy, what does that mean?) Gentlemen, break out the neck wear.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="body1">What is the RSVP deadline?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Please RSVP by February 14.
          </Typography>
        </AccordionDetails>
      </Accordion> 
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography variant="body1">Are children allowed?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Adults only ceremony please. 
          </Typography>
        </AccordionDetails>
      </Accordion> 
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography variant="body1">Is there a registry?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            No, just give us money.
          </Typography>
        </AccordionDetails>
      </Accordion> 
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography variant="body1">Plus Ones</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Please check your invite.
          </Typography>
        </AccordionDetails>
      </Accordion>
            <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography variant="body1">How did you make this website?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is a PERN-stack web app. You can check the <Link href="https://github.com/danme-l/dizzy-wedding">README</Link> over on Github if you are a nerd like us.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default FAQ;