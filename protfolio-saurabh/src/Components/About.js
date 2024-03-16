import React from "react";

const About = () => {
    return (
        <div
        name="about"
        className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about">
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              About
            </p>
          </div>
  
          <p className="text-xl mt-5">
          I am a web developer, working in both, backend and frontend programming. Excited for improving my skills and learning new technologies. I'm open to learn and work with any web technology and currently doing freelance gigs.
          </p>
          <br />
          <p className="text-xl">
        I like to code matters from scratch and love the idea of bringing thoughts to life. Connect with me to get your project done. <br /> <br />
        During my tenure as a Software Engineer Intern at TECTURAL TECHNOLOGIES, I honed my skills in crafting user interfaces with modern JavaScript frameworks, HTML5, and CSS3. Collaborating with a dynamic team, I improved user satisfaction by 31% through creative web design and development. Additionally, I played a pivotal role in building RESTful APIs, ensuring seamless data submission and storage in MongoDB.<br /> <br />
        Thank you for taking the time to review my profile, and I am excited to connect with you.
        </p>
      
        </div>
      </div>
    )
}

export default About;