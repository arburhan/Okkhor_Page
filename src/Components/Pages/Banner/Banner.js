import React from 'react';
import Typed from 'react-typed';
import windowsIcon from '../../../Media/Images/icons8-windows-10-48.svg';
import './Banner.css';
import okkhorImage from '../../../Media/Images/okkhor.png';


const Banner = () => {
    return (
        <div className='py-8 BannerBG' >
            <div className='flex justify-center my-5 md:my-0' >
                <figure>
                    <img className='w-[50%] md:w-[20%] mx-auto' src={okkhorImage} alt="" />
                </figure>
            </div>
            <div className='text-center px-5 md:px-56'>
                <h1 className='text-3xl md:text-6xl' >Speech to text. Text without
                    <div>
                        <Typed
                            strings={['typing...']}
                            typeSpeed={40}
                            backSpeed={50}
                            loop
                        />
                    </div>
                </h1>
                <p className='py-6 md:py-8 md:mb-8 text-md md:text-xl' >
                    <Typed
                        strings={["You're tired of typing, or just don't have the time to do it, Okkhor Voice Typing is the solution. You can speak and get text in real time. Long text,  messages, emails or reports on the go without interrupting your workflow."]}
                        typeSpeed={40}
                    />
                </p>
                <button className='btn my-2 text-white' >
                    <img className='px-2 ' src={windowsIcon} alt="" />  Download Now
                </button>
            </div>
        </div>
    );
};

export default Banner;