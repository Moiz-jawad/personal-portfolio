import React, { useEffect, useState, memo } from "react";
import { navLinks } from "../constants";
import GooeyNav from "@/components/ui/GooeyNav";

const Navbar = memo(() => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    // Use passive listener for better performance
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
      <div className="inner">
        <a className="logo" href="#hero">
          Moiz | Jawad
        </a>
        <nav className="desktop">
          <GooeyNav
            items={navLinks}
            particleCount={30}
            particleDistances={[90, 10]}
            particleR={400}
            initialActiveIndex={0}
            animationTime={600}
            timeVariance={1300}
            colors={[1, 2, 3, 1, 2, 3, 1, 4]}
          />
        </nav>
        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
