import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Container, Typography } from '@mui/material';

const FAQ = () => {
  return (
    <Container>
      <Typography variant="h4" gutterBottom align='center'>
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
            Halloween style costume party.
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
            The deadline is X day of X month of never.  You have X days left [insert countdown].
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
            Sorry Abby and Justin, you can't bring your kid. 
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default FAQ;