import { useRef, memo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Tilt from "react-parallax-tilt";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = memo(() => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(
    () => {
      const cards = [
        rydeRef.current,
        libraryRef.current,
        ycDirectoryRef.current,
      ].filter(Boolean);

      // Set initial state once (better performance)
      gsap.set(cards, {
        y: 60,
        opacity: 0,
        willChange: "transform, opacity",
      });

      const animation = gsap.to(cards, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.15,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
          once: true, // ensures animation runs only once
        },
      });

      return () => {
        animation.kill();
        ScrollTrigger.getAll().forEach((trigger) => {
          if (trigger.vars?.trigger === sectionRef.current) {
            trigger.kill();
          }
        });
      };
    },
    { scope: sectionRef }
  );

  return (
    <section id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <Tilt tiltMaxAngleX={4} tiltMaxAngleY={4} perspective={1000} scale={1.01} transitionSpeed={1000} className="w-full h-full flex flex-col justify-between">
              <div className="image-wrapper">
                <img
                  src="/images/project-1.png"
                  alt="EpicRealme app interface"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="text-content">
                <h2>EpicRealme: The Ultimate Gamer’s Universe App</h2>
                <p className="text-white-50 md:text-xl">
                  An app built with Flutter for a fast, cross‑platform, and
                  user‑friendly experience.
                </p>
              </div>
            </Tilt>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} perspective={1000} scale={1.02} transitionSpeed={1000} className="w-full h-full">
                <div className="image-wrapper bg-[#FFEFDA]">
                  <img
                    src="/images/project-2.png "
                    alt="Library management platform"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h2>PixiFusion - Merge PDFs or enhance your image quality</h2>
              </Tilt>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <Tilt tiltMaxAngleX={8} tiltMaxAngleY={8} perspective={1000} scale={1.02} transitionSpeed={1000} className="w-full h-full">
                <div className="image-wrapper bg-[#FFE7EB]">
                  <img
                    src="/images/project3.png"
                    alt="YC Directory app"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <h2>YC Directory – A Startup Showcase App</h2>
              </Tilt>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AppShowcase.displayName = "AppShowcase";

export default AppShowcase;
