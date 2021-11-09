import React from 'react';
import isWeekend from 'date-fns/isWeekend';
import TextField from '@mui/material/TextField';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import StaticDatePicker from '@mui/lab/StaticDatePicker';
import DateFnsUtils from '@date-io/date-fns';

const Calender = ({date,setdate}) => {
   
    return (
        <LocalizationProvider dateAdapter={AdapterDateFns}>
     <StaticDatePicker
    displayStaticWrapperAs="desktop"
 
    value={date}
    onChange={(newValue) => {
      setdate(newValue);
    }}
    renderInput={(params) => <TextField {...params} />}
  />
    </LocalizationProvider>
    );
};

export default Calender;