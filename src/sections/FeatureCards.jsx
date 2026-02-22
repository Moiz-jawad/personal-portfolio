import React, { memo } from "react";
import Tilt from "react-parallax-tilt";
import { abilities } from "../constants";

const FeatureCards = () => {
  return (
    <div className="w-full padding-x-lg">
      <div className="mx-auto grid-3-cols">
        {abilities.map(({ imgPath, title, desc }) => (
          <Tilt
            key={title}
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.02}
            transitionSpeed={1000}
            glareEnable={true}
            glareMaxOpacity={0.15}
            glareColor="lightblue"
            glarePosition="all"
            className="card-border rounded-xl p-8 flex flex-col gap-4"
          >
            <div className="size-14 flex items-center justify-center rounded-full">
              <img 
                src={imgPath} 
                alt={title} 
                width={56}
                height={56}
                loading="lazy"
                decoding="async"
              />
            </div>
            <h3 className="text-white text-2xl font-semibold mt-2">{title} </h3>
            <p className="text-white-50 text-lg">{desc}</p>
          </Tilt>
        ))}
      </div>
    </div>
  );
};

export default memo(FeatureCards);
