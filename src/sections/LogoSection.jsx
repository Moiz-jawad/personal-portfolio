import React, { memo } from "react";
import { logoIconsList } from "../constants";

const LogoIcon = memo(function LogoIcon({ icon }) {
  return (
    <div className="flex-none flex-center marquee-item">
      <img
        width="80"
        height="80"
        src={icon.imgPath}
        alt={icon.name}
        loading="lazy"
      />
    </div>
  );
});

const LogoSection = () => {

  return (
    <div className="md:my-20 my-10 relative">
      <div className="gradient-edge"></div>
      <div className="gradient-edge"></div>

      <div className="marquee h-52">
        <div className="marquee-box md:gap-12 gap-5">
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.name} icon={icon} />
          ))}
          {logoIconsList.map((icon) => (
            <LogoIcon key={icon.name} icon={icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
