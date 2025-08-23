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
function SmallMenu({ theme, openMenu, setOpenMenu}) {
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

          {/* ITEM 3: about us */}
          <ListItem key='AboutUs' disablePadding>
            <Accordion style={{m: 0, boxShadow: "none", width: "12em"}} square={true} disableGutters={true}
              sx={{'&:before': {
                display: 'none',
              }}}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header">
                <Typography
                  disableElevation
                  color="inherit"
                  sx={{
                    fontStyle: 'italic',
                    textTransform: 'none',
                  }}>
                  About Us
                </Typography>
              </AccordionSummary>

              {/* submenu, iterating over the details and creating links */}
              <AccordionDetails>
                {aboutusMenuArr.map((text, index) => (
                  <Button key={text}
                    component={Link}
                    onClick={handleDrawerClose}
                    fullWidth={true}
                    sx={{
                      justifyContent: 'flex-start',}}
                    to={'/' + text.replace(/\s/g, '').toLowerCase()}>
                    {text}
                  </Button>
                ))}
              </AccordionDetails>
            </Accordion>
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


      </List>
    </Drawer>
  );
}

// for computers and ipads and such
function LargeMenu({ theme}) {
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

      <MenuButtonLarge
        endIcon={<ArrowDropDownIcon />}
        onClick={handleClick2}
      >
        About Us
      </MenuButtonLarge>
      <StyledMenu
        anchorEl={anchorEl2}
        open={open2}
        onClose={handleClose2}
      >
        {aboutusMenuArr.map((text) => (
          <MenuItem
            key={text}
            onClick={handleClose2}
            component={Link}
            to={(text.replace(/\s/g, '').toLowerCase())}
          >
            {text}
          </MenuItem>
        ))}
      </StyledMenu>

      {/* SECTION rsvp button */}
      <MenuButtonLarge
        component={Link}
        to="/rsvp">
        RSVP
      </MenuButtonLarge>
    </Box>
  );
};


const NavBar = () => {
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
            />
          </>
        ) : (
          <LargeMenu theme={theme} />
        )}
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
