import React from 'react'

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function DealsOfTodayItem({deal }) {
     return (
          <Card sx={{ maxWidth: 345 }}>
               <CardMedia
                    component="img"
                    height="140"
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Lion_waiting_in_Namibia.jpg/800px-Lion_waiting_in_Namibia.jpg"
                    alt="green iguana"
               />
               <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                         Lizard
                         {deal}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                         Lizards are a widespread group of squamate reptiles, with over 6,000
                         species, ranging across all continents except Antarctica
                    </Typography>
               </CardContent>
               <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
               </CardActions>
          </Card>
     )
}

export default DealsOfTodayItem