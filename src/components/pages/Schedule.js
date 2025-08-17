import { Container, TableContainer, Table, TableRow, TableCell, TableBody } from '@mui/material';
import { useConfig } from "../../ConfigContext"


const Schedule = () => {
  const config = useConfig();
  const weddingSchedule = config.wedding.schedule

  return (
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
  );
};

export default Schedule;