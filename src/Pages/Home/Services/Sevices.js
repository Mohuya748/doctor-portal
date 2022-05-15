import React from 'react';
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Sevices = () => {
    const services = [
        {
            _id : 1,
            name :"Fluoride Treatment",
            description :"loda fgaarg",
            img : fluoride
        },
        {
            _id : 2,
            name :"Cavity Filling",
            description :"loda fgaarg",
            img : cavity
        },
        {
            _id : 3,
            name :"Teeth Whitening",
            description :"loda fgaarg",
            img : whitening
        }
    ]

    return (
        <div className='m-28'>
            <div className='text-center'>
                <h3 className='uppercase text-primary font-bold text-xl'>Our Services</h3>
                <h2 className='text-4xl'>Services we provide</h2>
            </div>
            <div className=' grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    services.map(service=><Service key={service._id} service={service}></Service>)
                }

            </div>
        </div>
    );
};

export default Sevices;