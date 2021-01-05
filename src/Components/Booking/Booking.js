import { info } from 'node-sass';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import SliderInfo from '../../FakeData/SliderInfo';

const Booking = () => {
    const BookingInfo = SliderInfo;
    const {bookingId} = useParams();
    const [infoD , setInfoD] = useState([]);
  
    useEffect(() => {
        const info = BookingInfo.find(infoD => infoD.id === parseInt(bookingId))
        setInfoD(info);
    },[]);
    return (
        <div className="bg-gradient">
           <div className="container">
               <div className="row">
                   <div className="col-12 col-md-6 mx-auto">
                      {/* <h3>{infoD.name}</h3>
                      <p>{info.description}</p> */}
                   </div>
                   <div className="col-12 col-md-6 mx-auto">

                   </div>
               </div>
           </div>
        </div>
    );
};

export default Booking;