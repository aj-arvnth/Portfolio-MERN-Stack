import React from 'react'

function Footer() {
    return (
        <div className='py-10 h-[120px]'>
            <div className='h-[1px] w-full bg-gray-700'></div>
            <div className='flex items-center justify-center flex-col mt-5'>
                <h1 className="text-white">
                    Designed & Developed by
                </h1>
                <h className="text-tertiary">
                    <span>Pramod Krishnaa</span>
                </h>
            </div>
        </div>
    )
}

export default Footer
