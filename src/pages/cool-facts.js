import * as React from "react";
import Layout from "../components/layout.js";

const CoolFactsPage = () => {
  return (
    <Layout pageTitle="Cool Facts">
      <p>- Antarctica is the largest desert in the world.</p>
      <p>- Bing bong some other mind blowing fact.</p>
      <p>- The Earth is actually flat.</p>
    </Layout>
  );
};

export const Head = () => <title>Cool Facts</title>;

export default CoolFactsPage;
