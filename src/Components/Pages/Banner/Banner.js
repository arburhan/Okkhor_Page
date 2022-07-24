import React from 'react';
import './Banner.CSS';
import Typed from 'react-typed';

const Banner = () => {
    return (
        <div className='py-6 bannerBackground' >
            <div className='text-center px-5 md:px-56'>
                <h1 className='text-3xl md:text-7xl' >Speech to text. Text without
                    <div>
                        <Typed
                            strings={['typing...']}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        />
                    </div>
                </h1>
            </div>
        </div>
    );
};

export default Banner;