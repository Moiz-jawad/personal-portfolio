import React from "react";

const ShowcaseSection = () => {
  return (
    <div id="work" className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          {/* left */}
          <div className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/public/images/project1.png" alt="Ryde" />
            </div>
            <div className="text-content">
              <h2>
                On-Demand Rides Made Simple With a Powerfull, User-friendly App
                Called Ryde
              </h2>
              <p className="text-white-50 md:text-xl">
                An app build with React Native, Expo, & TailwindCSS for a fast,
                user-friendly experince.
              </p>
            </div>
          </div>
          {/* right */}
          <div className="project-list-wrapper overflow-hidden">
            <div className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/public/images/project2.png" alt="LIB" />
              </div>
            </div>

            <div className="project">
              <div className="image-wrapper bg-[#ffefdb]">
                <img src="/public/images/project3.png" alt="alto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowcaseSection;
