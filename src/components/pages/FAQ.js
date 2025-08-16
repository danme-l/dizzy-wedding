import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

// import styled from '@mui/material/s';
import { Container, Typography, Link, styled, useTheme} from '@mui/material';

const StyledAnswerSection = styled(AccordionDetails)(({ theme }) => ({
  color: theme.palette.primary.main,
  mx: 2,
  display: 'flex',
  justifyContent: 'center', // Default to center
  textAlign: 'center', // Default text alignment
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-start', // Align left on medium and larger screens
    textAlign: 'left', // Left text alignment
  },
}));

const FAQ = () => {
  const theme = useTheme(); 

  return (
    <Container>
      <hr />
      <Typography variant="h1" gutterBottom>
        Frequently Asked Questions
      </Typography>

      {/* Dress */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography variant="h3">What is the dress code?</Typography>
        </AccordionSummary>
        <StyledAnswerSection>
          <Typography variant='body1'>
            Formal attire requested. Ladies, that means (Izzy, what does that mean?) Gentlemen, break out the neck wear.
          </Typography>
        </StyledAnswerSection>
      </Accordion>

      {/* RSVP Deadling */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography variant="h3">What is the RSVP deadline?</Typography>
        </AccordionSummary>
        <StyledAnswerSection>
          <Typography>
            Please RSVP by February 14.
          </Typography>
        </StyledAnswerSection>
      </Accordion> 

      {/* Children */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography variant="h3">Are kids invited?</Typography>
        </AccordionSummary>
        <StyledAnswerSection>
          <Typography>
            We love your little ones, however we've decided to make this an adults only event.
          </Typography>
        </StyledAnswerSection>
      </Accordion> 

      {/* Arrival Time */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography variant="h3">What time should I arrive?</Typography>
        </AccordionSummary>
        <StyledAnswerSection>
          <Typography>
            We recommend arriving around thirty minutes before the ceremony begins.<br /> Please arrive no later than ten minutes before the ceremony.

          </Typography>
        </StyledAnswerSection>
      </Accordion> 

      {/* Getting to the venue */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography variant="h3">What's the best way to get to the venue?</Typography>
        </AccordionSummary>
        <StyledAnswerSection>
          <Typography>
            We recommend taking an uber - the hotel is less than ten minutes away.<br/>
            La Toundra offers tons of parking if you are coming by car.
          </Typography>
        </StyledAnswerSection>
      </Accordion> 

      {/* Registry */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography variant="h3">Is there a registry?</Typography>
        </AccordionSummary>
        <StyledAnswerSection>
          <Typography>
            Nope. 
          </Typography>
        </StyledAnswerSection>
      </Accordion> 

      {/* Open Bar */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel5-content"
          id="panel5-header"
        >
          <Typography variant="h3">Is there an Open Bar?</Typography>
        </AccordionSummary>
        <StyledAnswerSection>
          <Typography>
            Yes.
          </Typography>
        </StyledAnswerSection>
      </Accordion> 

      {/* Plus Ones */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography variant="h3">Can I bring a plus one?</Typography>
        </AccordionSummary>
        <StyledAnswerSection>
          <Typography variant='body1'>
            While we wish we could invite everyone, we are only able to accomodate guests formally invited on your wedding invitation. <br />
            If your invitation includes a plus one, they'll be listed on the RSVP page.
          </Typography>
        </StyledAnswerSection>
      </Accordion>
      
      {/* Site Info */}
      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel4-content"
          id="panel4-header"
        >
          <Typography variant="h3">How did you make this website?</Typography>
        </AccordionSummary>
        <StyledAnswerSection>
          <Typography>
            This is a PERN-stack web app. You can check the <Link href="https://github.com/danme-l/dizzy-wedding">README</Link> over on Github if you are a nerd like us.
          </Typography>
        </StyledAnswerSection>
      </Accordion>
    </Container>
  );
};

export default FAQ;