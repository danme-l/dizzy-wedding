import { Box, Container, Typography, Link, Divider} from '@mui/material';
import { useEffect } from 'react';
import useFetchGuestList from '../hooks/useFetchGuestList';
import EnhancedTable from '../utils/GuestListTable';

//configs 
import { useConfig } from "../../ConfigContext"

const VIP = () => {
    const { list, fetchGuestList, loading, error } = useFetchGuestList();

    useEffect(() => {
        fetchGuestList();
    }, [fetchGuestList]);

    // calculations
    const totalGuests = list.length;
    const totalPlusOnes = list.filter((g) => g.plus_one === true).length;
    const attendingYes = list.filter((g) => g.attending === true).length;
    const attendingNo = list.filter((g) => g.attending === false).length;
    const attendingPending = list.filter((g) => g.attending == null).length;
    const havingLamb = list.filter((g) => g.food_choice === 'lamb').length;
    const havingChicken = list.filter((g) => g.food_choice === 'chicken').length;
    const havingVeg = list.filter((g) => g.food_choice === 'vegetarian').length;

    // configs
    const config = useConfig();

    return (
        <Container 
        sx={{ display: 'flex', flexDirection:'column', justifyContent: 'center',alignItems: 'center'}}
        >
            <Typography variant='h1'>
                Info for Very Important Persons
            </Typography>
            <Divider />
            {/* Stats blurb */}
            <Box sx={{ mb: 2 }}>
                <Typography variant="h3">Guest List Summary</Typography>
                <Typography variant="body1">
                There are {totalGuests} invitees, of whom {totalPlusOnes} are allowed to bring plus ones.
                </Typography>
                <Typography variant="body1">
                So far {attendingYes} have confirmed, {attendingNo} won't be able to make it, and we are still waiting on {attendingPending}.
                </Typography>
                <Typography variant="body1">
                Of those, {havingLamb} are having lamb, {havingChicken} are having chicken, and {havingVeg} are having the veggie option.
                </Typography>
            </Box>
            <EnhancedTable data={list} />;
        </Container>
    );
    };

    export default VIP;
