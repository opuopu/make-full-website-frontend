import React from 'react';
import Useauth from '../../../hooks/useauth'
import { useEffect, useState } from "react";
import Tables from './Table';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Myappoitment = ({date}) => {
const {user} = Useauth()

const [appoitments,setappoitments] = useState()

console.log(appoitments);

useEffect(()=>{
fetch(`https://fast-caverns-10880.herokuapp.com/query?email=${user?.email}&&date=${date.toDateString() }`)
.then(res =>res.json())
.then(data => setappoitments(data))

},[date])

    return (
        <div>
            <h1>this is appoitment</h1>
            <TableContainer component={Paper}>
      <Table sx={{ minWidth: 400 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>service</TableCell>
            <TableCell align="right">time</TableCell>
            <TableCell align="right">patient name</TableCell>
           
          </TableRow>
        </TableHead>
        <TableBody>
          {appoitments?.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.service}
              </TableCell>
          
              <TableCell align="right">{row?.date}</TableCell>
              <TableCell align="right">{row?.name}</TableCell>
            
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
           
        </div>
    );
};

export default Myappoitment;