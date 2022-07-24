import React from 'react';
import './Banner.CSS';
import Typed from 'react-typed';
import windowsIcon from '../../../Media/Images/icons8-windows-10-48.svg'

const Banner = () => {
    return (
        <div className='py-8 bannerBackground' >
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
                <p className='py-6 md:py-8 text-xl' >If you're tired of typing, or just don't have the time to do it, Okkhor Voice Typing is the solution. With this easy-to-use app, you can speak and get text in real time. You can use Voice To Text app to create text using any language in the world.Dictate long text messages, emails or reports on the go without interrupting your workflow.</p>
                <button className='btn my-2' >
                    <img className='px-2 ' src={windowsIcon} alt="" />  Download Now
                </button>
            </div>
        </div>
    );
};

export default Banner;