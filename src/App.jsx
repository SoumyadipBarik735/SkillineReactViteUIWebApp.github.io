import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Companies from "./components/Companies";
import Software from "./components/Software";
import WhatIsSkilline from "./components/WhatIsSkilline";
import Everything from "./components/Everything";
import Features from "./components/Features";
import ToolsTeachers from "./components/ToolsTeachers";
import Assessments from "./components/Assessments";
import Management from "./components/Management";
import Discussions from "./components/Discussions";
import Integrations from "./components/Integrations";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Companies />
      <Software />
      <WhatIsSkilline />
      <Everything />
      <Features />
      <ToolsTeachers />
      <Assessments />
      <Management />
      <Discussions />
      <Integrations/>
    </div>
  );
};

export default App;
