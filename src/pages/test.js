import React from "react";
import Accordion from "../components/Accordion";
import Layout from "../components/Layout";

export default function Test() {
  const items = [
    {
      title: "Color 1",
      content: <p>Hello World</p>,
    },
    {
      title: "Color 2",
      content: <p>Hello World 2</p>,
    },
  ];

  return (
    <Layout>
      <Accordion items={items} />
    </Layout>
  );
}
