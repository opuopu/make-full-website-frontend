import React from 'react';
import chair from '../../images/chair.png'
import bg from '../../images/bg.png'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';

import { Container } from '@mui/material';
const bgs = {
    background:`url(${bg})`
}

const Banner = () => {
    return (
       <Container>
            <Box  sx={{ flexGrow: 1  }}>
        <Grid  container style={{height:'400px',...bgs}} spacing={2}sx={{ alignItems: 'center',justifyContent: 'space-around' }}>
          <Grid xs={8} lg={7}>
          <Typography variant="h4">
               Your new smile starts here
                  </Typography>;
                  <Typography style={{color:'gray'}} variant="p">
               Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis suscipit vel quasi necessitatibus.
                  </Typography>; <br /> 
              <Button className="app-btn" style={{margin:'10px 0'}} variant="contained">get a appotiment</Button>
          </Grid>
          <Grid xs={4} lg={5}>
            <img width='350px' src={chair} alt="" />
          </Grid>
        
         
        </Grid>
      </Box>
       </Container>
    );
};

export default Banner;