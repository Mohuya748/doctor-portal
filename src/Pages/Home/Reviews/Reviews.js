import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import prople1 from '../../../assets/images/people1.png'
import prople2 from '../../../assets/images/people2.png'
import prople3 from '../../../assets/images/people3.png'
import Review from './Review';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: "Mark Winn",
            comment: '',
            img: prople1,
            country: "Florida, USA"
        },
        {
            _id: 2,
            name: "Winn Flow",
            comment: " ",
            img: prople2,
            country: "Montreal, Canada"
        },
        {
            _id: 3,
            name: "Nick Jonas",
            comment: " ",
            img: prople3,
            country: "California, USA"
        }
    ]
    return (
        <div>
            <div className='flex justify-between my-20'>
                <div>
                    <h2 className='text-primary text-2xl font-bold'>Testimonial</h2>
                    <h3 className=' text-4xl '>What our patient say</h3>

                </div>
                <div>
                    <img className='lg:w-48 sm:w-20' src={quote} alt="" />
                </div>
            </div>
            <div className='grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-4'>
                {
                    reviews.map(review => <Review key={review._id} review={review}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;