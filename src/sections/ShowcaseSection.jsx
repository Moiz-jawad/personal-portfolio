import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(
    () => {
      const ctx = gsap.context(() => {
        // Cards animation
        const cards = [
          rydeRef.current,
          libraryRef.current,
          ycDirectoryRef.current,
        ];

        cards.forEach((card, index) => {
          if (!card) return;
          gsap.from(card, {
            y: 60,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
            delay: 0.1 * (index + 1),
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none none",
            },
          });
        });
      }, sectionRef);

      return () => ctx.revert();
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
                />
              </div>
              <h2>YC Directory – A Startup Showcase App</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppShowcase;
