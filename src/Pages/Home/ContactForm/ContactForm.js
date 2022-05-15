import React from 'react';
import appointment from '../../../assets/images/appointment.png'
import Button from '../../Shared/Button';

const ContactForm = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }} className='my-20 text-center'>
            <div className=''>
                <h3 className='text-primary text-2xl p-3'>Contact Us</h3>
                <h2 className='text-white text-3xl'>Stay connected with us</h2>
            </div>

            <div className="p-5">
                <input type="email" name="email" placeholder='your email' id="" className='w-1/3 rounded p-2 m-3' />
                <br></br>
                <input type="text" name="subject" placeholder='subject' id="" className='w-1/3 rounded p-2 m-3' />
                <br></br>
                <textarea name="message" cols="51" rows="8" placeholder='your message' className='rounded p-2 m-3'></textarea>
                <br></br>
                <Button>Submit</Button>
            </div>



        </div>
    );
};

export default ContactForm;