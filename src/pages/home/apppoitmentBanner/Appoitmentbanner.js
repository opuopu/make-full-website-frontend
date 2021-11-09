import React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import doctor from '../../../images/doctor.png'
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';
import Button from '@restart/ui/esm/Button';
import bg from '../../../images/appointment-bg.png'
import './appoitmentBanner.css'


// b g image
const backgroundImg = {
background: `url(${bg})`,
marginTop:'100px',
backgroundBlendMode:'darken',
backgroundColor:'rgba(105, 98, 96  )'
}



const Appoitmentbanner = () => {
    return (
        <div>
           <Container>
           <Box style={backgroundImg}  sx={{ flexGrow: 1, alignItems: 'center', display: 'flex',flexDirection: 'row', }}>
      <Grid container >
       
         <img style={{marginTop:'-120px'}} width='100%' src={doctor} alt="" />
        </Grid>
        <Grid  >
        <Typography className="app-title" variant="h6" component="h6">
 Appoitment
</Typography>
        <Typography sx={{ fontWeight: 'bold', margin:'10px 0'}} style={{color:'white'}} variant="h2" component="h1">
 make an appoitment today
</Typography>
        <Typography style={{color:'white'}} variant="p" component="p">
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est laudantium dolore, esse aut deleniti distinctio quo, pariatur ullam quas.
</Typography>
<Button   className="app-btn" variant="contained" >
  learn more
</Button>
        </Grid>
      
     
    </Box>
           </Container>
        </div>
    );
};

export default Appoitmentbanner;