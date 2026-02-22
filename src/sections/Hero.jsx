import React, { useEffect, useRef, useState, memo, Suspense, lazy } from "react";
import { words } from "../constants";
import Button from "../components/Button";

const HeroExperience = lazy(() => import("../components/HeroModels/HeroExperience"));
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import AnimatedCounter from "../components/AnimatedCounter";
import GradientText from "@/components/ui/GradientText";

const Hero = memo(() => {
  const heroRef = useRef(null);
  const [isHeroInView, setIsHeroInView] = useState(true);

  useEffect(() => {
    const section = heroRef.current;
    if (
      !section ||
      typeof window === "undefined" ||
      !("IntersectionObserver" in window)
    ) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsHeroInView(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useGSAP(
    () => {
      const animation = gsap.fromTo(
        ".hero-text h1",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.3, duration: 1, ease: "power2.inOut" },
      );

      return () => {
        animation.kill();
      };
    },
    { dependencies: [] },
  );

  return (
    <section id="hero" ref={heroRef} className="relative overflow-hidden">
      <div className="absolute top-0 left-0 z-10">
        <img
          src="/images/bg.png"
          alt="background"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
      </div>
      <div className="hero-layout">
        {/* left : hero content */}
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt={word.text}
                          width={48}
                          height={48}
                          loading="lazy"
                          decoding="async"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span className="text-purple-700">{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-transparent  bg-clip-text md:text-xl relative z-10 pointer-events-none self-left">
              <GradientText
                colors={["#5227ff", "#7e22ce", "#FFFFFF"]}
                animationSpeed={9}
                showBorder={false}
                pauseOnHover={true}
                className="font-extrabold"
                yoyo={true}
              >
                Hi, I’m Moiz Jawad, a Full-Stack Developer who builds real-world
                products
              </GradientText>
            </p>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6 z-10 w-full max-w-[240px] md:max-w-none">
              <Button
                text="See My Work"
                className="w-full md:w-64 md:h-16 h-14"
                id="counter"
              />
              <a
                href="/resume/Resume - Moiz-jawad.pdf"
                download="Moiz_Jawad_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full md:w-64 md:h-16 h-14 rounded-lg border-2 border-white-50 text-white-50 hover:bg-white-50 hover:text-black transition-all duration-300 uppercase text-sm md:text-lg font-medium tracking-wide shadow-lg hover:shadow-white-50/20"
              >
                Download Resume
              </a>
            </div>
          </div>
        </header>

        {/* right : 3D model */}
        <figure>
          <div className="hero-3d-layout">
            <Suspense fallback={
              <div className="w-full h-full flex justify-center items-center text-white-50">
                <div className="animate-pulse">Loading 3D Experience...</div>
              </div>
            }>
              <HeroExperience isActive={isHeroInView} />
            </Suspense>
          </div>
        </figure>
      </div>
      <AnimatedCounter />
    </section>
  );
});

Hero.displayName = "Hero";

export default Hero;
