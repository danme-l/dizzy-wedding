import {Box, Typography, AppBar, Toolbar, Button, MenuItem, Drawer, List, ListItemText } from '@mui/material';
import {IconButton, ListItem, ListItemButton, Divider, useTheme} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import {ChevronRight, Menu as MenuIcon} from '@mui/icons-material';
import { Link } from 'react-router-dom'; 
import useMediaQuery from '@mui/material/useMediaQuery';
import React from 'react';
import { StyledMenu, DrawerHeader, MenuButtonLarge } from './NavUtils';
import { useConfig } from "../../ConfigContext"


const mainMenuArr = ["Home", "Details", "About Us", "RSVP"];
const aboutusMenuArr = ["Gallery", "About Us"];

function SmallMenuIcon({ openMenu, setOpenMenu }) {
    const handleDrawerOpen = () => {
        setOpenMenu(true);
    };

    return (
        <IconButton
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 0 }}
        >
            <MenuIcon />
        </IconButton>
    );
}
  
// for mobile
function SmallMenu({ theme, openMenu, setOpenMenu, isVip}) {
  const handleDrawerClose = () => setOpenMenu(false);

  return (
    <Drawer
      anchor="right"
      open={openMenu}
      onClose={handleDrawerClose}
    >
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronRight />
        </IconButton>
      </DrawerHeader>
      <Divider />

      <List disablePadding>

        {/* ITEM 1: Home */}
          <ListItem key='Home' disablePadding>
            <ListItemButton
              onClick={handleDrawerClose}
              component={Link}
              to="/"
              sx={{
                fontSize: '1.5rem',
                fontStyle: 'italic',
                textTransform: 'none',
              }}>
              <ListItemText primary={'Home'} />
              
            </ListItemButton>
          </ListItem>
          <Divider/>

          {/* ITEM 2: details */}
          <ListItem key='Details' disablePadding sx={{width: "100%"}}>
          <ListItemButton
              onClick={handleDrawerClose}
              component={Link}
              to="/details"
              sx={{
                fontSize: '1.5rem',
                fontStyle: 'italic',
                textTransform: 'none',
              }}>
              <ListItemText primary={'Details'} /> 
            </ListItemButton>
          </ListItem>
          <Divider/>


          {/* ITEM 3: Gallery */}
          <ListItem key='Gallery' disablePadding>
            <ListItemButton 
              component={Link}
              onClick={handleDrawerClose}
              to="/gallery"
              sx={{
                fontStyle: 'italic',
                textTransform: 'none',
              }}>
              <ListItemText primary={'Gallery'} />
            </ListItemButton>
          </ListItem>
          <Divider/>

          {/* ITEM 4: rsvp */}
          <ListItem key='RSVP' disablePadding>
            <ListItemButton 
              component={Link}
              onClick={handleDrawerClose}
              to="/rsvp"
              sx={{
                fontStyle: 'italic',
                textTransform: 'none',
              }}>
              <ListItemText primary={'RSVP'} />
            </ListItemButton>
          </ListItem>
          <Divider/>


          {/* ITEM 5: vip section */}
          {isVip && 
          <ListItem key='VIP' disablePadding>
            <ListItemButton 
              component={Link}
              onClick={handleDrawerClose}
              to="/vip"
              sx={{
                fontStyle: 'italic',
                textTransform: 'none',
              }}>
              <ListItemText primary={'VIP'} />
            </ListItemButton>
          </ListItem>
          }

      </List>
    </Drawer>
  );
}

// for computers and ipads and such
function LargeMenu({ theme, isVip}) {
  const [anchorEl2, setAnchorEl2] = React.useState(null);
  const open2 = Boolean(anchorEl2);
  const handleClick2 = (e) => setAnchorEl2(e.currentTarget);
  const handleClose2 = () => setAnchorEl2(null);

  return (
    <Box>
      <MenuButtonLarge component={Link} to={('')}>
        Home
      </MenuButtonLarge>

      {/* SECTION details button, including dropdown */}
      <MenuButtonLarge
        component={Link}
        to="/details">
        Details
      </MenuButtonLarge>

      {/* SECTION gallery button */}
      <MenuButtonLarge
        component={Link}
        to="/gallery">
        Gallery
      </MenuButtonLarge>

      {/* SECTION rsvp button */}
      <MenuButtonLarge
        component={Link}
        to="/rsvp">
        RSVP
      </MenuButtonLarge>

      {/* SECTION vip button */}
      {isVip && 
      <MenuButtonLarge
        component={Link}
        to="/vip">
        VIP
      </MenuButtonLarge>
        }
    </Box>
  );
};


const NavBar = ({isVip}) => {
  const theme = useTheme();
  const [openMenu, setOpenMenu] = React.useState(false);

  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  // get config
  const config = useConfig();

  return (
    <AppBar
      position="sticky"
      color="black"
      sx={{ boxShadow: 'none', opacity: '100%', bgcolor: theme.palette.background.default }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', m: '1em 0' }}>
        <Typography variant="h1" sx={{ fontWeight: 'bold' }}>
          {config.groom.name[0]} & {config.bride.name[0]}
        </Typography>

        {isMobile ? (
          <>
            {/* hamburger menu button */}
            <IconButton
              aria-label="open drawer"
              onClick={() => setOpenMenu(true)}
              edge="start"
              sx={{ mr: 0 }}
            >
              <MenuIcon />
            </IconButton>

            {/* drawer sliding menu */}
            <SmallMenu
              theme={theme}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
              isVip={isVip}
            />
          </>
        ) : (
          <LargeMenu theme={theme} isVip={isVip}/>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
