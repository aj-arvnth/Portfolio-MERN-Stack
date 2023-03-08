import React from 'react'
import Typewriter  from 'typewriter-effect';

function Intro() {
    const handleClick = (event, link) => {
        window.open(link, '_self', 'noopener, noreferrer');
    }
    return (
        <div className='flex flex-row '>
            <div className='h-[80vh]  flex flex-col items-start justify-center gap-8 py-10'>
                <span className='text-white text-xl'>Hi, I am </span>
                <div className='text-7xl sm:text-3xl text-secondary font-semibold'>
                    <Typewriter options={{strings:['Pramod Krishnaa','D P K'],autoStart:true,loop:true}}/>                    
                </div>
                <span className='text-6xl sm:text-2xl text-white font-semibold'>Software Developer</span>
                <p className='text-white w-2/3'>
                    I love to develop software during free time!.
                    I also do back-end development.
                    Gaming and anime for life.
                </p>
                <button className='border-2 border-tertiary text-tertiary px-10 py-3 rounded' onClick={event => handleClick(event, '/#About')
                }>Get Started</button>
            </div>
            <div className="h-[60vh] w-1/16 items-end justify-end sm:w-full flex">
                <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_96bovdur.json" background="transparent" speed="1" loop autoplay ></lottie-player>
            </div>
        </div>

    )
}

export default Intro