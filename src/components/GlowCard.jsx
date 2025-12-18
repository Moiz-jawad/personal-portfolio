import React, { useRef, memo, useCallback } from "react";

const GlowCard = ({ card, children }) => {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="card card-border timeline-card rounded-xl p-10"
    >
      <div className="glow" />
      <div className="flex items-center gap-1 mb-5">
        {Array.from({ length: 5 }, (_, i) => (
          <img
            key={i}
            src="/images/star.png"
            alt="star"
            className="size-5"
            loading="lazy"
          />
        ))}
      </div>
      <div className="mb-5">
        <p className="text-white-50  text-lg ">{card.review}</p>
      </div>
      {children}
    </div>
  );
};

export default memo(GlowCard);
