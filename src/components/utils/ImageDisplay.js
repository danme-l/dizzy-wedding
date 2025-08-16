import * as React from 'react';
import Box from '@mui/material/Box';
import { Typography, useTheme } from '@mui/material';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import useMediaQuery from '@mui/material/useMediaQuery';

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


// const itemData = [
//   {img: 'https://dizzy-wedding-site.s3.amazonaws.com/galleryPhotos/DSC_0090.jpg', title:'Pumpkin Patch'},
//   {img: 'https://dizzy-wedding-site.s3.amazonaws.com/galleryPhotos/DSC_0112.jpg', title:'Pumpkin Patch'},
//   {img: 'https://dizzy-wedding-site.s3.amazonaws.com/galleryPhotos/IMG_4172.jpg', title:'Peggy\'s Cove, Nova Scotia'},
//   {img: 'https://dizzy-wedding-site.s3.amazonaws.com/galleryPhotos/IMG_0009.jpg', title:'Epernay, Champagne, France'},
//   {img: 'https://dizzy-wedding-site.s3.amazonaws.com/galleryPhotos/IMG_0045.jpg', title:'Hour 12 of hiking Volcan Baru, Panama'},
//   {img: 'https://dizzy-wedding-site.s3.amazonaws.com/galleryPhotos/IMG_0357.jpg', title:'Hat Street, Panama City, Panama'},
//   {img: 'https://dizzy-wedding-site.s3.amazonaws.com/galleryPhotos/IMG_4174.jpg', title:'Bay of Fundy, New Brunswick'},
//   {img: 'https://dizzy-wedding-site.s3.amazonaws.com/galleryPhotos/IMG_8657.jpg', title:'Volcan Masaya, Nicaragua'},
//   {img: 'https://dizzy-wedding-site.s3.amazonaws.com/galleryPhotos/IMG_9041.jpg', title:'Ometepe Island, Nicaragua, in front of Volcan Concepcion (yeah we hiked that bitch too)'}
// ];

const itemData = [ 
    {img: 'https://i.postimg.cc/90NP3mj0/DSC-0090.jpg', title:'Pumpkin Patch'}, 
    {img: 'https://i.postimg.cc/ydjXPhQF/DSC-0112.jpg', title:'Pumpkin Patch'}, 
    {img: 'https://i.postimg.cc/ZR4xpscb/IMG-4172.jpg', title:'Peggy\'s Cove, Nova Scotia'}, 
    {img: 'https://i.postimg.cc/Wz4mfDCx/IMG-0009.jpg', title:'Epernay, Champagne, France'}, 
    {img: 'https://i.postimg.cc/mrQScW7p/IMG-0045.jpg', title:'Hour 12 of hiking Volcan Baru, Panama'}, 
    {img: 'https://i.postimg.cc/rwRjkrsk/IMG-0357.jpg', title:'Hat Street, Panama City, Panama'}, 
    {img: 'https://i.postimg.cc/BQVpkgqp/IMG-4174.jpg', title:'Bay of Fundy, New Brunswick'}, 
    {img: 'https://i.postimg.cc/gkJ4g5Pr/IMG-8657.jpg', title:'Volcan Masaya, Nicaragua'}, 
    {img: 'https://i.postimg.cc/jjVXdSnJ/IMG-9041.jpg', title:'Ometepe Island, Nicaragua, in front of Volcan Concepcion'},
    {img: 'https://i.postimg.cc/BbpHRN3W/img-81f.jpg', title:'Cinque Terre, Italy'}, 
    {img: 'https://i.postimg.cc/ZK3C9V2J/img-fe5.jpg', title:'Boston, Massachussets'}, 
    {img: 'https://i.postimg.cc/Jh7n2mnh/img-514.jpg', title:'China Beach, Vancouver Island'}, 
    {img: 'https://i.postimg.cc/dVj36DJX/img-e28.jpg', title:'Ruins of Coba, Mayan Riviera, Mexico'}, 
];