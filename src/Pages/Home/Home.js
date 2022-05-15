import React from 'react';
import Banner from './Banner/Banner';
import DentalCare from './DentalCare/DentalCare';
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Reviews from './Reviews/Reviews';
import Services from './Services/Sevices';


const Home = () => {
    return (
        <div className='px-12'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Reviews></Reviews>
        </div>
    );
};

export default Home;