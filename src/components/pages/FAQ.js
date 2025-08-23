import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Container, Typography, Link, styled, useTheme} from '@mui/material';

import { useConfig } from "../../ConfigContext"

const StyledAnswerSection = styled(AccordionDetails)(({ theme }) => ({
  color: theme.palette.primary.main,
  mx: 2,
  display: 'flex',
  justifyContent: 'center', // default to center
  textAlign: 'center', // default text alignment
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-start', // left on medium and larger screens
    textAlign: 'left', 
  },
}));

const FAQ = () => {
  const theme = useTheme(); 
  const config = useConfig();
  const faq = config.wedding.faq

  return (
    <Container sx = {{my:3}}> 
      <Typography variant="h1" gutterBottom>
        Frequently Asked Questions
      </Typography>

      {faq.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ArrowDropDownIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            <Typography variant="h3">{item.question}</Typography>
          </AccordionSummary>
          <StyledAnswerSection>
            <Typography variant='body1'>
              {item.answer}
            </Typography>
          </StyledAnswerSection>
        </Accordion>
      ))}
    </Container>
  );
};

export default FAQ;