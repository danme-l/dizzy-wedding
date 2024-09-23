import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function MediaCard({imageUrl, title, desc}) {

  const doSomething = () => {
    console.log("Izzy is pretty!)")
  }

  return (
    <Card sx={{ maxWidth: 345, m: 3 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={imageUrl}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={doSomething}>Hehehehe</Button>
      </CardActions>
    </Card>
  );
}