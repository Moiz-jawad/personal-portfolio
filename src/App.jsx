import React, { Suspense, lazy } from "react";
import { Loader } from "@react-three/drei";
import { motion, useScroll, useSpring } from "framer-motion";
import { Toaster } from "sonner";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import ErrorBoundary from "./components/ErrorBoundary";
import CustomCursor from "./components/CustomCursor";

const TechStack = lazy(() => import("./sections/TechStack"));
const AppShowcase = lazy(() => import("./sections/ShowcaseSection"));
const LogoSection = lazy(() => import("./sections/LogoSection"));
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const ExperienceSection = lazy(() => import("./sections/ExperienceSection"));
const Contact = lazy(() => import("./sections/Contact"));

const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <ErrorBoundary>
      <CustomCursor />
      <Toaster position="top-right" theme="dark" richColors style={{ zIndex: 999999 }} />
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 z-[9999] origin-left"
        style={{ scaleX }}
      />
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <ErrorBoundary>
          <AppShowcase />
        </ErrorBoundary>
        <ErrorBoundary>
          <LogoSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <FeatureCards />
        </ErrorBoundary>
        <ErrorBoundary>
          <ExperienceSection />
        </ErrorBoundary>
        <ErrorBoundary>
          <TechStack />
        </ErrorBoundary>
        <ErrorBoundary>
          <Contact />
        </ErrorBoundary>
      </Suspense>
      <Footer />
    </ErrorBoundary>
  );
};

export default App;
