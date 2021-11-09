import React, {  useEffect, useState } from 'react';
import { Container, Grid, Paper } from '@mui/material';
import Typography from '@mui/material/Typography';
import Singleapp from './appoitmentheader/Singleapp';
import Alert from '@mui/material/Alert';


const AvilableAppoitment = ({date}) => {
    const [success,setsuccess] = useState(false)
    const [avilable,setavilable] = useState([])
    console.log(avilable);

    useEffect(()=>{
        fetch('/avilable.json')
        .then(res =>res.json())
        .then(data => setavilable(data))
    },[])

    return (
  
         <Container>
             <h1>this is date {date.toDateString()}</h1>
           {
               success &&   <Alert style={{margin:'20px 0'}} severity="success">This is a success alert — check it out!</Alert>

           }
        
             <Grid container spacing={2}>
   {
       avilable?.map(avilable => <Singleapp setsuccess={setsuccess} date={date} avilable={avilable} key={avilable.id}></Singleapp>)
   }
       
       
      
      </Grid>
         </Container>
       
    );
};

export default AvilableAppoitment;