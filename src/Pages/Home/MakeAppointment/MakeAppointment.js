import React from 'react';
import doctor from '../../../assets/images/doctor.png'
import Button from '../../Shared/Button';
import appointment from '../../../assets/images/appointment.png'
const MakeAppointment = () => {
    return (
        <section style={{
            background : `url(${appointment})`
        }} className='flex justify-center items-center mt-20'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-120px]' src={doctor} alt="doctor photo" />

            </div>
            <div className='flex-1'>
                <h3 className='text-primary text-2xl font-bold p-3'>Appointment</h3>
                <h2 className='text-white text-3xl font-bold p-3'>Make an appointment Today</h2>
                <p className='text-white text-xl p-3'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                <Button>Get Started</Button>

            </div>
        </section>
    );
};

export default MakeAppointment;