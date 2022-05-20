import React, { useState, useEffect } from 'react';
import { format } from 'date-fns';
import Service from './Service';
import BookingModal from './BookingModal';

const AvailableApointment = ({date}) => {
    const [services,setServices] = useState([]);
    const [treatement , setTreatement] =  useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/service')
        .then(res=>res.json())
        .then(data=>setServices(data))
    },[]);

    return (
        <div>
          <h4 className='text-xl text-secondary text-center'>Available appointmens on {format(date, 'PP')}</h4>
          <div className=' grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4'>
              {
                  services.map(service=><Service service={service} setTreatement={setTreatement} key={service._id}></Service>)
              }
          </div>
          {
              treatement && <BookingModal date={date} treatement={treatement} setTreatment={setTreatement} ></BookingModal>
          }
        </div>
    );
};

export default AvailableApointment;