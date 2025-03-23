import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../resources/projects";
import { github } from "../../images/github"

function Projects() {
    const [selectedItemIndex, setselectedItemIndex] = React.useState(0);
    return (
        <div>
            <SectionTitle title="Projects" />

            <div className='flex py-10 gap-20 sm:flex-col'>
                <div className='flex flex-col gap-10 border-l-2 border-[#135e4c82] w-1/8 sm:flex-row sm:overflow-x-scroll sm:w-full'>
                    {projects.map((project, index) => (
                        <div onClick={() => {
                            setselectedItemIndex(index);
                        }} className='cursor-pointer'>
                            <h1 className={`text-xl px-12 ${selectedItemIndex === index ? 'text-[#F97316] border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3' : 'text-white'}`}>{project.title}</h1>
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-center gap-10 sm:flex-col">
                    {/* <img src={projects[selectedItemIndex].image} alt="" className="h-40 w-52"></img> */}
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-[#F97316] text-2xl'>{projects[selectedItemIndex].title}</h1>
                        <p className='text-tertiary text-sg'>Technology: {projects[selectedItemIndex].technologies}</p>
                        <p className='text-white text-lg'>{projects[selectedItemIndex].description}</p>
                        <a href={projects[selectedItemIndex].link}>
                            <span className="text-tertiary text-sm">Click Here: </span><img src={github} alt=""className="h-[32px] w-[32px] inline mx-2"></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects