import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ThingToDoCard({imgLink, name, info}) {
  return (
    <Card sx={{ width: 345, height: 300}}>
      <CardMedia
        sx={{ height: 140 }}
        image={imgLink}
        title={name}
      />
      <CardContent>
        <Typography gutterBottom variant="h3" component="div">
          {name}
        </Typography>
        <Typography variant="body1" sx={{ color: 'text.secondary' }}>
          {info}
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
