import React from 'react';
import Banner from '../Banner/Banner';
import Gallary from '../Gallary/Gallary';
import Category from '../Category/Category';
import Testimonial from '../Testimonial/Testimonial';
import Popular from '../Popular/Popular';
import Creative from '../Creative/Creative';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Gallary></Gallary>
            <Category></Category>
            {/* <Testimonial></Testimonial> */}
            {/* <Popular></Popular> */}
            {/* <Creative></Creative> */}
        </div>
    );
};

export default Home;