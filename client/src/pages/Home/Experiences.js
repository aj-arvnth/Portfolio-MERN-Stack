import React from 'react'
import SectionTitle from '../../components/SectionTitle'
import { experiences } from '../../resources/experiences'

function Experiences() {
    const [selectedItemIndex, setselectedItemIndex] = React.useState(0);
    return (
        <div>
            <SectionTitle title="Experiences" />

            <div className='flex py-10 gap-20 sm:flex-col'>
                <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/8 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {experiences.map((experience, index) => (
                        <div onClick={() => {
                            setselectedItemIndex(index);
                        }} className='cursor-pointer'>
                            <h1 className={`text-xl px-7 ${selectedItemIndex === index ? 'text-[#F97316] border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3' : 'text-white'}`}>{experience.period}</h1>
                        </div>
                    ))}
                </div>

                <div className='flex flex-col gap-5 w-[98%]'>
                    <h1 className='text-[#F97316] text-xl'>{experiences[selectedItemIndex].title}</h1>
                    <h1 className='text-tertiary text-xl'>{experiences[selectedItemIndex].company}</h1>
                    <p className='text-white text-lg justify-center items-center text-justify '>{experiences[selectedItemIndex].description}</p>
                </div>

                <div className='h-[40vh] -my-10 -mx-6'>
                <lottie-player src="https://assets9.lottiefiles.com/private_files/lf30_kfa0ohef.json"  background="transparent"  speed="1" loop autoplay></lottie-player>
                </div>
            </div>
        </div>
    )
}

export default Experiences