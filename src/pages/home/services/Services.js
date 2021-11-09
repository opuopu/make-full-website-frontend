import React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Container } from '@mui/material';
import fluimg from '../../../images/fluoride.png'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';

import CardMedia from '@mui/material/CardMedia';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }))

const Services = () => {
    return (
        <div>
          
            <Container>
            <Typography  sx={{ textAlign: 'center',color: 'primary.main',m: 2 }} gutterBottom variant="h6" component="div">
         our services
        </Typography>
            <Typography  sx={{ textAlign: 'center',fontWeight: 'bold',m: 2 }} gutterBottom variant="h4" component="div">
        services with provide
        </Typography>
            <Box sx={{ width: '100%' }}>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid item lg={4} sm={12} xs={4}>
          <Item  sx={{ maxWidth: 345,boxShadow: 0  }}>
      
      <CardMedia
        component="img"
        alt="green iguana"
       style={{width:'30%',margin:'0 auto'}}
        image={fluimg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         fluimg
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
     
  
          </Item>
        </Grid>
        <Grid sm={12} lg={4} item xs={4}>
        <Item  sx={{ maxWidth: 345 ,boxShadow: 0 }}>
      
      <CardMedia
        component="img"
        alt="green iguana"
       style={{width:'30%',margin:'0 auto'}}
        image={fluimg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         fluimg
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
     
  
          </Item>
        </Grid>
        <Grid sm={12} lg={4} item xs={4}>
        <Item  sx={{ maxWidth: 345, border:0 ,boxShadow: 0  }}>
      
      <CardMedia
        component="img"
        alt="green iguana"
       style={{width:'30%',margin:'0 auto'}}
        image={fluimg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         fluimg
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
     
  
          </Item>
        </Grid>
       
      </Grid>
    </Box>
            </Container>
        </div>
    );
};

export default Services;