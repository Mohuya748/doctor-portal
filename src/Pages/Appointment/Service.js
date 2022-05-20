import React from 'react';

const Service = ({ service, setTreatement}) => {
    const { name, slots } = service;
    return (
        <div className="card bg-base-100 shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold text-secondary">{name}</h2>
                <p>
                    {
                        slots.length > 0 ? <span>{slots[0]}</span> : <span className='text-red-500'> No Slot Available</span>
                    }
                </p>
                <p>{slots.length} {slots.length>1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label onClick={() => setTreatement(service)} htmlFor="booking-modal" disabled={slots.length===0} className="btn modal-button btn-secondary text-white uppercase">Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default Service;