import React from "react";
import Project from "./project";
import Blog from "./blog";
import SkillsSection from "./SkillsSection";
import RecommendationSection from "./RecommendationSection";
import Title from "./title";
import About from "./about";

function HomePage() {
  return (
    <div>
      <Title name="Jithin Mathew" leadText="I am a student developer" />
      <RecommendationSection />
      <SkillsSection />
      <Project />
      <About />
      <Blog />
    </div>
  );
}

export default HomePage;
