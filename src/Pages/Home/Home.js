import React from 'react';
import Footer from '../Shared/Footer/Footer';
import Banner from './Banner/Banner';
import ContactForm from './ContactForm/ContactForm';
import DentalCare from './DentalCare/DentalCare';
import Info from './Info/Info';
import MakeAppointment from './MakeAppointment/MakeAppointment';
import Reviews from './Reviews/Reviews';
import Services from './Services/Sevices';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <DentalCare></DentalCare>
            <MakeAppointment></MakeAppointment>
            <Reviews></Reviews>
            <ContactForm></ContactForm>
            <Footer></Footer>
         

        </div>
    );
};

export default Home;