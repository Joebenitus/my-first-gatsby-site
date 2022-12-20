import * as React from "react";
import Layout from "../components/layout.js";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>I'm making this by following the Gatsby tutorial.</p>
      <StaticImage
        alt="Clifford, a reddish-brown pit bull, posing on a couch and looking stoically at the camera"
        src="../images/pitbull.jpeg"
      />
    </Layout>
  );
};

export const Head = () => <title>Home Page</title>;

export default IndexPage;
