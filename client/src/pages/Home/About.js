import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About() {
    const skills = [
        "Java",
        "Javascript",
        "React",
        "Express",
        "MongoDB",
        "Python",
        "Kotlin",
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
                        Hello! I am a software developer and back-end developer from
                        India. I am dedicated to the quest of developing solutions that
                        leverage on best practice technologies to deliver over the top user
                        experience.
                    </p>
                    <p className="text-white">
                        I enjoy video and VR games, and anime. My interest in Java and back-end development
                        started back in 2022 when I came across how VR games are developed. Since then I
                        focused my time on learning java, javascript and playing games.
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