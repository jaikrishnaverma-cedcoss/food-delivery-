import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import Button from '@mui/material/Button';


export default function Item(props:any) {
  return (
    <Card sx={{ display: 'flex', maxWidth: 470, borderRadius: '16px',boxShadow: "rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset" }}>
      <CardActionArea sx={{ display: 'flex',justifyContent:"space-between"}} >
    
        <CardContent sx={{ display: 'flex', flexDirection:"column",justifyContent:"flex-start", maxWidth: 470  }}>
          <Typography gutterBottom variant="h5" sx={{textAlign:"left"}} component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" sx={{textAlign:"left"}} color="text.secondary">
          {props.type}
          </Typography>
          <Typography variant="body2" sx={{textAlign:"left"}} color="text.secondary">
          Rs. {props.price}
          </Typography>
          <Button variant="outlined"  color="warning">
           Add to Cart
          </Button>
        </CardContent>
        <CardMedia
          component="img"
          height="140"
          sx={{ width: 151 }}
          image={props.image}
          alt="green iguana"
        />
      </CardActionArea>
    </Card>
  );
}
