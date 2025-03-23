import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
    const skills = [
        "Angular",
        "Javascript",
        "React",
        "MongoDB",
        "Python",
        "Java",
        "MySQL",
        "Git",
    ]
    return (
        <section id="About">
            <SectionTitle title="About" />

            <div className="flex w-full sm:flex-col">
                <div className="h-[70vh] w-1/2 sm:w-full">
                    <lottie-player src="https://assets9.lottiefiles.com/packages/lf20_q7bzwb0o.json" background="transparent" speed="1" loop autoplay></lottie-player>
                </div>
                <div className="flex flex-col gap-5 w-1/2 my-24 text-xl sm:w-full sm:my-5">
                    <p className="text-white">
                    Hello! I am a software developer from India with a strong focus on frontend development. While I specialize in crafting seamless and interactive user interfaces, I also have experience in backend development. I am dedicated to building solutions that leverage best-practice technologies to deliver exceptional user experiences.
                    </p>
                    <p className="text-white">
                    I have a strong expertise in frontend development, with a keen interest in creating seamless and user-friendly interfaces. I completed a full-stack development course at Jspiders Academy, where I gained proficiency in SQL, Web Technologies, and Core Java, covering all OOP concepts. Beyond tech, I enjoy playing badminton and listening to music
                    </p>
                </div>
            </div>

            <div className="py-5">
                <h1 className="text-tertiary text-xl"> Here are few technologies I've been working with recently:</h1>
                <div className="flex flex-wrap gap-10 mt-5">
                    {skills.map((skill, index) => (
                        <div className="border border-tertiary px-5 py-3 rounded">
                            <h1 className="text-tertiary">{skill}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default About