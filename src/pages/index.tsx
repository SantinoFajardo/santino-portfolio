import AboutMe from "@/components/aboutme";
import Experience from "@/components/experience";
import Layout from "@/components/layout";
import Stack from "@/components/stacks";
import React from "react";

const Home: React.FC = (): React.ReactElement => {
  return (
    <Layout>
      <div className="h-[100vh] bg-white">
        <AboutMe />
        <Experience />
        <Stack />
      </div>
    </Layout>
  );
};

export default Home;
