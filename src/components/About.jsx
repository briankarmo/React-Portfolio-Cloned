import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-fit bg-gradient-to-b pt-20 pb-10 from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-fit">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        My journey as a JavaScript developer began with a passion for web development and design. Eventually, this led to my love for coding and problem-solving. I have gained extensive experience in JavaScript development through my diverse range of projects, specializing in frameworks like React.js and back-end tools like Node.js for developing server-side applications. I have utilized libraries and styling tools to create dynamic, interactive, and responsive component-based applications. Additionally, I have gained hands-on experience in version control with GitHub, which allows me to manage my codebase effectively. I have also implemented APIs, which enable seamless integration with external data sources and services, to make my applications even more interactive.
        </p>

        <br />

        <p className="text-xl">
          
        "As an enthusiastic learner, I am always driven to enhance and broaden my expertise in JavaScript development. My focus encompasses various aspects of front-end software engineering! which includes frameworks, object-oriented programming, and DOM manipulation. My passion, and dedication, for staying on the cutting edge of technology, and my unwavering dedication towards constant improvement sets me apart as an exceptional problem solver!""
        </p>
      </div>
    </div>
  );
};

export default About;