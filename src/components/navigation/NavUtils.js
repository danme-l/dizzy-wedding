import {Box, Typography, AppBar, Toolbar, Button, Menu, MenuItem, Drawer, List, ListItemText } from '@mui/material';
import {IconButton} from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { Menu as MenuIcon} from '@mui/icons-material';

export const StyledMenu = styled((props) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
      ))(({ theme }) => ({
        '& .MuiPaper-root': {
          borderRadius: 6,
          marginTop: theme.spacing(.5),
          borderTop: '0.2em solid',
          borderTopColor: theme.palette.error.main,
          minWidth: 180,
          boxShadow:
            'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
          '& .MuiMenu-list': {
            padding: '4px 0',
          },
          '& .MuiMenuItem-root': {
            '& .MuiSvgIcon-root': {
              fontSize: 18,
              color: theme.palette.text.secondary,
              marginRight: theme.spacing(1.5),
            },
            '&:active': {
              backgroundColor: alpha(
                theme.palette.primary.main,
                theme.palette.action.selectedOpacity,
              ),
            },
          },
          ...theme.applyStyles('dark', {
            color: theme.palette.grey[300],
          }),
      },
  }));
  
export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));
  
export const MenuButtonLarge = styled((props) => (
  <Button
    color='inherit'
        sx={{
          fontSize: "1.5em",
          fontStyle: 'italic',
          textTransform: 'none',
        }}
        {...props}/>
    ))(({ theme }) => ({
      "&:hover": {
        borderBottom: 'solid',
        borderBottomColor: theme.palette.info.main,
      }
}));

export function SmallMenuIcon(openMenu, setOpenMenu){
  //const [openMenu, setState] = React.useState(false);
  const handleDrawerClose = () => {
    setOpenMenu(false);
  };
  const handleDrawerOpen = () => {
    setOpenMenu(true);
  };
  
  return (
    <IconButton
      aria-label="open drawer"
      onClick={handleDrawerOpen}
      edge="start"
      sx={[
        {
          mr: 0,
        },
        //state && { display: 'none' },
      ]}>
      <MenuIcon />
    </IconButton>
  );
};
  