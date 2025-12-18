import React, { Suspense, lazy } from "react";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";

const AppShowcase = lazy(() => import("./sections/ShowcaseSection"));
const LogoSection = lazy(() => import("./sections/LogoSection"));
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const ExperienceSection = lazy(() => import("./sections/ExperienceSection"));

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Suspense fallback={null}>
        <AppShowcase />
        <LogoSection />
        <FeatureCards />
        <ExperienceSection />
      </Suspense>
    </>
  );
};

export default App;
