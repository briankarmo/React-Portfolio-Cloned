import React from "react";
import weathertracker from "../assets/portfolio/weathertracker.png";
import ModernApp from "../assets/portfolio/ModernApp.png";
import Woodmere from "../assets/portfolio/Woodmere.png";
import BKTube from "../assets/portfolio/BKTube.png";
import BKcode from "../assets/portfolio/bkinctube.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: weathertracker,
      demo: "https://briankarmo-weathertracker-w-reponsive.netlify.app/",
      description: "Weather tracker app fetching data from OpenWeather map API!",
    },
    {
      id: 2,
      src: ModernApp,
      demo: "https://bk-inc-modern-app.netlify.app/",
      description: "Modern business app Demo!",
    },
    {
      id: 3,
      src: Woodmere,
      demo: "https://briankarmo.com/woodmere-party-store/",
      description: "A local business static site built with Wordpress!",
    },
    {
      id: 4,
      src: BKTube,
      demo: "https://briankarmo-tube.netlify.app/",
      description: "A video sharing app that's fetching data from Rapid API!",
    },
    {
      id: 5,
      src: BKcode,
      demo: "https://bkcodetube.netlify.app/",
      description: "A coders paradise, full of knowledge and soothing music for coding!",
    },
  ];

  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">Portfolio</p>
          <p className="py-6">Check out some of my work below, Click on each image to visit the project homepage!</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, description }) => (
            <div key={id} className="shadow-md shadow-blue-800 rounded-lg">
              <a href={demo} target="_blank" rel="noopener noreferrer">
                <img src={src} alt={description} className="rounded-md duration-200 hover:scale-105" />
              </a>
              <div className="flex items-center justify-center">
                <a href={demo} target="_blank" rel="noopener noreferrer">
                  <button className="w-4/5 px-2 py-2 m-2 duration-200 hover:scale-105">{description}</button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
