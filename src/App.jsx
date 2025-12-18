import React, { Suspense, lazy } from "react";
import Navbar from "./sections/Navbar";
import Hero from "./sections/Hero";
import Footer from "./sections/Footer";
import ErrorBoundary from "./components/ErrorBoundary";

const TechStack = lazy(() => import("./sections/TechStack"));
const AppShowcase = lazy(() => import("./sections/ShowcaseSection"));
const LogoSection = lazy(() => import("./sections/LogoSection"));
const FeatureCards = lazy(() => import("./sections/FeatureCards"));
const ExperienceSection = lazy(() => import("./sections/ExperienceSection"));
const Contact = lazy(() => import("./sections/Contact"));

const App = () => {
  return (
    <ErrorBoundary>
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
