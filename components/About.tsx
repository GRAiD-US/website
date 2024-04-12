import Image from "next/image";
import React from "react";
import Button from "./Button";

const About = () => {
    return (
        <section className="flexCenter flex-col">
            <Image src="/GRAiD.png" alt="logo" width={100} height={60} />
            <br></br>
            <div className="padding-container max-container w-full pb-2">
                <div className="flex flex-wrap justify-between gap-5 lg:gap-10">
                    <h2 className="bold-40 lg:bold-64 xl:max-w-[390px]">
                        AI Powerd Educational Platform
                    </h2>
                    <p className="regular-16 text-gray-30 xl:max-w-[520px]">
                        As experienced TAs and tutors for our university's Computer Science department, my group and I understand firsthand the challenges of grading projects and providing comprehensive feedback. Spending hours deciphering and debugging walls of code can be not only time-consuming but also mentally taxing. Recognizing the need for a more efficient and accurate grading solution, we developed our platform. GRAID streamlines the grading process, leveraging AI technology to provide precise feedback and suggestions, saving valuable time for both educators and students. With GRAID, we aim to revolutionize the way coding projects are assessed, making the learning experience more effective and rewarding for all involved.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;