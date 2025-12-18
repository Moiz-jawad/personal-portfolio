import { useRef, memo } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

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
            <div className="image-wrapper">
              <img
                src="/images/project1.png"
                alt="Ryde app interface"
                loading="lazy"
                decoding="async"
              />
            </div>
            <div className="text-content">
              <h2>
                On-Demand Rides Made Simple with a Powerful, User-Friendly App
                called Ryde
              </h2>
              <p className="text-white-50 md:text-xl">
                An app built with React Native, Expo, and Tailwind CSS for a
                fast, user-friendly experience.
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="image-wrapper bg-[#FFEFDB]">
                <img
                  src="/images/project2.png"
                  alt="Library management platform"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h2>The Library Management Platform</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="image-wrapper bg-[#FFE7EB]">
                <img
                  src="/images/project3.png"
                  alt="YC Directory app"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <h2>YC Directory – A Startup Showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

AppShowcase.displayName = "AppShowcase";

export default AppShowcase;
