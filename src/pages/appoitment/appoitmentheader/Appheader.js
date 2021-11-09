import React from 'react';
import { Container, Grid } from '@mui/material';
import chair from '../../../images/chair.png'
import Calender from '../../shared/Calender';

const Appheader = ({date,setdate}) => {
  
    return (
  <Container>
      <Grid container spacing={2}>
  <Grid item xs={8}>
<Calender date={date} setdate={setdate}></Calender>
  </Grid>
  <Grid item xs={4}>
<img width='450px' src={chair} alt="" />
  </Grid>

  
</Grid>
  </Container>
    );
};

export default Appheader;