import React from "react";
import food from "../assets/protfolioimg/food.png";
import Youtube from "../assets/protfolioimg/Youtube.png";
import beerfinder from "../assets/protfolioimg/beerfinder.png";
import cardselctor from "../assets/protfolioimg/cardselctor.png";
import audioplayer from "../assets/protfolioimg/audioplayer.png";
import demo from "../assets/protfolioimg/demo.gif";

const Protfolio = () => {
       
    const protfolios = [
        {
            id :1,
            src : food,
            repo : 'https://github.com/SaurabhDayma/Food-Ordering-Application'
        },
        {
            id : 2,
            src : Youtube,
            repo : 'https://github.com/SaurabhDayma/Namaste-react?tab=readme-ov-file'
        },
        {
            id : 3,
            src : beerfinder,
            repo : 'https://github.com/SaurabhDayma/Brewery-Finder-App'
        },
        { 
            id : 4,
            src :cardselctor,
            repo : 'https://github.com/SaurabhDayma/Coding-Assessment-L2---Frontend-Intern-Position-Marmeto-'
        },
        {
            id : 5,
            src :audioplayer,
            repo : 'https://github.com/SaurabhDayma/audio-pill-player-'
        },
        {
          id : 6,
          src : demo,
          repo : "#"
        },
    ];
    return(
        <div
        name="portfolio"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen portfolio"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Portfolio
            </p>
            <p className="py-6">Check out some of my projects right here</p>
          </div>
  
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {protfolios.map(({ id, src,repo }) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt="projects"
                  className="rounded-md duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
               
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" onClick={ () => window.open(repo, '_blank')}>
                    GitHub
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
}

export default Protfolio;