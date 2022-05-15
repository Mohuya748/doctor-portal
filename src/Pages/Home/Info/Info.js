import React from 'react';
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'

const Info = () => {
    return (
        <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4'>
            <div class="card card-side text-white  bg-gradient-to-r from-secondary to-primary shadow-xl px-4">
                <figure>
                    <img src={clock} alt="Movie" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">opening hourse</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                </div>
            </div>
            <div class="card card-side text-white bg-accent shadow-xl px-4">
                <figure>
                    <img src={marker} alt="Movie" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">opening hourse</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                </div>
            </div>
            <div class="card card-side text-white bg-gradient-to-r from-secondary to-primary shadow-xl px-4">
                <figure>
                    <img src={phone} alt="Movie" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">opening hourse</h2>
                    <p>Click the button to watch on Jetflix app.</p>
                </div>
            </div>
        </div>
    );
};

export default Info;