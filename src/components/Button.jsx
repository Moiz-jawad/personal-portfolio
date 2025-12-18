import React, { memo } from "react";

const Button = memo(({ className, id, text }) => {
  const handleClick = (e) => {
    e.preventDefault();
    const target = document.getElementById("counter");

    if (target && id) {
      const offset = window.innerHeight * 0.15; // Leave a bit of space at the top

      // Calculate how far down the page we need to scroll
      const top =
        target.getBoundingClientRect().top + window.pageYOffset - offset;

      // Scroll smoothly to that position
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <a
      onClick={handleClick}
      className={`${className ?? ""} cta-wrapper`}
      href="#counter"
      aria-label={text}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text}</p>
        <div className="arrow-wrapper">
          <img 
            src="/images/arrow-down.svg" 
            alt="arrow" 
            width={20}
            height={20}
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </a>
  );
});

Button.displayName = "Button";

export default Button;
