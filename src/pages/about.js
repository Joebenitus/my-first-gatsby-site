import * as React from "react";
import Layout from "../components/layout.js";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>I am a super rad programmer learning how to use Gatsby!</p>
    </Layout>
  );
};

export const Head = () => <title>About Me</title>;

export default AboutPage;
