import React, { useState } from "react";
import Canvas from "../components/Canvas";
import Layout from "../components/Layout";
import SplitScreen from "../components/SplitScreen";
import Colors from "../components/Colors";
import { defaultGradient } from "../config";
import { GradientContext } from "../context";
import Header from "../components/Header";
import CenteredHeading from "../components/CenteredHeading";

export default function Home() {
  const [gradient, updateGradient] = useState(defaultGradient);

  return (
    <GradientContext.Provider value={{ gradient, updateGradient }}>
      <Layout>
        <Header />
        <CenteredHeading />
        <SplitScreen>
          <Canvas />
          <Colors />
        </SplitScreen>
      </Layout>
    </GradientContext.Provider>
  );
}
