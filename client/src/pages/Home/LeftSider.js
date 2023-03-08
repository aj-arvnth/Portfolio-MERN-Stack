import React from 'react'

function LeftSider() {
    return (
        <div className='fixed left-0 bottom-0 px-10 sm:static'>
            <div className='flex flex-col items-center'>
                <div className='flex flex-col gap-7 sm:flex-row'>
                    <a href='https://www.instagram.com/_p.ra.mod_/' target="_blank" rel='noreferrer'><i class="ri-instagram-line text-gray-400 text-lg"></i></a>
                    <a href='https://www.linkedin.com/in/pramod-krishnaa' target="_blank" rel='noreferrer'><i class="ri-linkedin-box-line text-gray-400 text-lg"></i></a>
                    <a href='https://www.github.com/pramod-krishnaa' target="_blank" rel='noreferrer'><i class="ri-github-line text-gray-400 text-lg"></i></a>
                </div>
                <div className='w-[1px] h-32 bg-[#125f63] sm:hidden'></div>
            </div>
        </div>
    );
}

export default LeftSider