import * as React from 'react';
import './App.css'
import { useTheme } from '@mui/material/styles';
import { Grid } from '@mui/material';
import { spacing } from '@mui/system';
import Nav from './component/Nav';

import Item from './component/Item';
export default function App() {
  const theme = useTheme();
  const data=[{name:"Plain Dosa",type:"veg",image:"korralu-dosa-recipe.jpg",price:"20"},{name:"Poori",type:"veg",image:"LG3PBW4LR36GTAUPOQIVINRVZA.webp",price:"30"},{name:"Masala Dosa",type:"veg",image:"63841432.jpeg",price:"30"},{name:"Manglora Bajji",type:"veg",image:"download.jpeg",price:"30"},{name:"Andhra Veg Meals",type:"veg",image:"63841432.jpeg",price:"300"},{name:"Andhra Meg Meals",type:"nonVeg",image:"LG3PBW4LR36GTAUPOQIVINRVZA.webp",price:"350"},{name:"Plain Egg",type:"nonVeg",image:"korralu-dosa-recipe.jpg",price:"20"}]

  return (
   <>
   <div className="App">
    <Nav />
   <Grid container spacing={2}  sx={{ mt: 2 }} maxWidth={1000}>
    {
      data.map((x)=><Grid item xs={6} ><Item name={x.name} image={x.image} type={x.type} price={x.price}></Item></Grid>
      )
    }

</Grid>
    </div>
    </>
  );
}
