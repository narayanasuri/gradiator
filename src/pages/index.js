import React, { useState } from "react";
import Canvas from "../components/Canvas";
import Layout from "../components/Layout";
import SplitScreen from "../components/SplitScreen";
import Colors from "../components/Colors";
import { defaultGradient } from "../config";
import { GradientContext } from "../context";
import CenteredHeading from "../components/CenteredHeading";
import Helmet from "react-helmet";
import Footer from "../components/Footer";

export default function Home() {
  const [gradient, updateGradient] = useState(defaultGradient);

  return (
    <GradientContext.Provider value={{ gradient, updateGradient }}>
      <Layout>
        <Helmet>
          <meta charSet="utf-8" />
          <meta name="icon" href="/blob.svg" />
          <title>Gradiator - Create beautiful gradients</title>
          <meta
            name="description"
            content="Create stunning gradients and generate CSS code"
          />
          <meta
            name="keywords"
            content="gradiator, gradients, gradient css, generate gradient, create gradient"
          />
          <link rel="canonical" href="http://mysite.com/example" />
        </Helmet>
        <CenteredHeading />
        <SplitScreen>
          <Canvas />
          <Colors />
        </SplitScreen>
        <Footer />
      </Layout>
    </GradientContext.Provider>
  );
}
