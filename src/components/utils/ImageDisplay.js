import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, useTheme } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useConfig } from '../../ConfigContext';

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
    ))(({ theme }) => ({
      [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: theme.palette.primary.light,
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
      },
}));

// docs where I lifted this from: https://mui.com/material-ui/react-image-list/
export default function ImageDisplay() {
  const config = useConfig();
  const itemData = config.gallery
  
  const theme = useTheme();
  const colNum = useMediaQuery(theme.breakpoints.down('md')) ? 2 : 3

  return (
    <Box>
      <ImageList variant="masonry" cols={colNum} gap={8}>
        {itemData.map((item) => (
          <HtmlTooltip
            title={
              <React.Fragment>
                <Typography variant='body1'>{item.title}</Typography>
              </React.Fragment>
            }
            placement='left'
          >
            <ImageListItem key={item.img}>
              <img
                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=248&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
                />
            </ImageListItem>
          </HtmlTooltip>
        ))}
      </ImageList>
    </Box>
  );
}
