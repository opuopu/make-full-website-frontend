import React from 'react';
import Headers from '../shared/header/Header';
import Appheader from './appoitmentheader/Appheader';
import AvilableAppoitment from './AvilableAppoitment';


const Apphome = () => {
    const [date, setdate] = React.useState(new Date());
    return (
        <div>
     <Headers ></Headers>
  <Appheader date={date} setdate={setdate}></Appheader>
  <AvilableAppoitment date={date} ></AvilableAppoitment>
            
        </div>
    );
};

export default Apphome;