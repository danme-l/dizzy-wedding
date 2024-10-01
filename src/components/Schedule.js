import React from 'react';
import PropTypes from 'prop-types';
import { Container, Typography, Tabs, Tab, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <Container
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && <Container>{children}</Container>}
      </Container>
  );
}
  
  CustomTabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};
  
function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
  };
}

const Schedule = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Schedule
      </Typography>

      <Container>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Rehearsal" {...a11yProps(0)} />
          <Tab label="Wedding Day" {...a11yProps(1)} />
        </Tabs>

        {/* Ally Prop 0: Rehearsal */}
        <CustomTabPanel value={value} index={0}>
          <TableContainer>
            <Table stickyHeader>
               {/* SECTION table Head */}
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Time
                        </TableCell>
                        <TableCell>
                            Event
                        </TableCell>
                    </TableRow>
                </TableHead>
                {/* SECTION table body */}
                <TableBody>
                  <TableRow>
                    <TableCell>
                      7:30
                    </TableCell>
                    <TableCell>
                      Dinner
                    </TableCell>
                  </TableRow> 
                </TableBody>
            </Table>
          </TableContainer>
        </CustomTabPanel>

        {/* Ally Prop 1: Wedding Day */}
        <CustomTabPanel value={value} index={1}>
        <TableContainer>
            <Table stickyHeader>
                {/* SECTION table Head */}
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Time
                        </TableCell>
                        <TableCell>
                            Event
                        </TableCell>
                    </TableRow>
                </TableHead>
                {/* SECTION table body */}
                <TableBody>
                  <TableRow>
                    <TableCell>
                      7:30
                    </TableCell>
                    <TableCell>
                      Arrive At Venue
                    </TableCell>
                  </TableRow> 
                </TableBody>
            </Table>
          </TableContainer>
        </CustomTabPanel>
      </Container>

      {/* SECTION Add to Calendar Button */}
      <Container>
      <Button
        variant='outlined'
        sx={{
          color: 'black',
          fontSize: '1rem',
          fontStyle: 'italic',
          textTransform: 'none',
          margin: '2rem -2rem'
        }}
      >
        Add to Calendar
      </Button>
      </Container>
    </Container>
  );
};

export default Schedule;