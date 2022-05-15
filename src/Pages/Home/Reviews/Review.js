import React from 'react';

const Review = ({ review }) => {
    return (
        <div>
            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">     
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus repudiandae beatae a doloremque odit earum officiis nisi ipsum quae aliquam.</p>
                    <div class="flex">
                        <div class="avatar">
                            <div class="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
                                <img src={review.img} />
                            </div>
                        </div>
                        <div className='items-center justify-center'>
                                <h2 className='font-bold'>{review.name}</h2>
                                <p>{review.country}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;