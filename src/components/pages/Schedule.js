import React from 'react';
import PropTypes from 'prop-types';
import { Container, Typography, Tabs, Tab, Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from '@mui/material';

const rehearsalSchedule = [
    {time: '7:30', activity:"Get up"},
    {time: '8:00', activity:"Watch videos"},
    {time: '9:30', activity:"Double Check everything"},
    {time: '5:00', activity:"Go over roles and timing"},
    {time: '7:00', activity:"Dinner"},
    {time: '11:00', activity:"Go to sleep"}

];
const weddingSchedule = [
    {time: '7:30', activity:"Get up"},
    {time: '8:00', activity:"Freak Out"},
    {time: '10:30', activity:"Brunch"},
    {time: '1:00', activity:"First Look"},
    {time: '3:30', activity:"Ceremony Begins"},
    {time: '4:00', activity:"Cocktail Hour Begins"},
    {time: '5:30', activity:"Dinner Begins"},
    {time: '8:00', activity:"Father Daughter Dance"},
    {time: '8:02', activity:"Mother Son Dance"},
    {time: '11:00', activity:"Late Night Snack"},
    {time: '1:00', activity:"Clean Up"}
 ];

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

      <Container style={{padding: 0}}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{m:0}}>
          <Tab label="Rehearsal" {...a11yProps(0)} />
          <Tab label="Wedding Day" {...a11yProps(1)} />
        </Tabs>

        {/* Ally Prop 0: Rehearsal */}
        <CustomTabPanel value={value} index={0} 
          style={{
            padding: 0
          }}>
          <TableContainer>
            <Table stickyHeader>
               {/* SECTION table Head */}
               {/*hard code column widths*/}
               <colgroup>
                <col style={{width:'30%'}}/>
                <col style={{width:'70%'}}/>
              </colgroup>
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
                {rehearsalSchedule.map((event, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {event.time}
                    </TableCell>
                    <TableCell>
                      {event.activity}
                    </TableCell>
                  </TableRow> 
                ))}
                </TableBody>
            </Table>
          </TableContainer>
        </CustomTabPanel>

        {/* Ally Prop 1: Wedding Day */}
        <CustomTabPanel value={value} index={1}
            style={{
                padding: 0
            }}>
        <TableContainer>
            <Table stickyHeader sx={{ overflow: 'scroll' }}>
                {/* SECTION table Head */}
                <colgroup>
                <col style={{width:'30%'}}/>
                <col style={{width:'70%'}}/>
              </colgroup>
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
                {weddingSchedule.map((event, index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {event.time}
                    </TableCell>
                    <TableCell>
                      {event.activity}
                    </TableCell>
                  </TableRow> 
                ))}
                </TableBody>
            </Table>
          </TableContainer>
        </CustomTabPanel>
      </Container>

      {/* SECTION Add to Calendar Button  and align it with the rest of the ontainer*/}
      <Container justifyContent='flex-center'>
      <Button
        variant='outlined'
        sx={{
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