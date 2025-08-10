import { Container, TableContainer, Table, TableRow, TableCell, TableBody } from '@mui/material';


const weddingSchedule = [
    {time: '4:30', activity:"Ceremony"},
    {time: '5:00', activity:"Cocktail Hour"},
    {time: '6:30', activity:"Dinner"},
    {time: '9:30', activity:"Dance Party"},
    {time: 'Midnight', activity:"Late Night Snack"},
 ];

const Schedule = () => {

  return (
    <Container>
        <TableContainer>
            <Table stickyHeader sx={{ overflow: 'scroll' }}>
                {/* SECTION table Head */}
                <colgroup>
                <col style={{width:'30%'}}/>
                <col style={{width:'70%'}}/>
              </colgroup>
              
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

    </Container>
  );
};

export default Schedule;