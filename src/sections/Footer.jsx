import { memo } from "react";
import { socialImgs } from "../constants";

const Footer = memo(() => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <p>Terms & Conditions</p>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <div key={index} className="icon">
              <a href={socialImg.link}>
                <img
                  src={socialImg.imgPath}
                  alt={`${socialImg.name} social icon`}
                  loading="lazy"
                  decoding="async"
                />
              </a>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end">
            © {new Date().getFullYear()} Moiz Jawad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
});

Footer.displayName = "Footer";

export default Footer;
