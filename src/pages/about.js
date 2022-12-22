import * as React from "react";
import Layout from "../components/layout.js";
import Seo from "../components/seo.js";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me">
      <p>I am a super rad programmer learning how to use Gatsby!</p>
    </Layout>
  );
};

export const Head = () => <Seo title="About Me" />;

export default AboutPage;
