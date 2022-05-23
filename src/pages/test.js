import React, { useState } from "react";
import Layout from "../components/Layout";
import { BlockPicker } from "react-color";

export default function Test() {
  const [color, setColor] = useState("#3b5998");

  const onColorChange = ({ hex }) => {
    setColor(hex);
  };

  return (
    <Layout>
      <BlockPicker color={color} onChangeComplete={onColorChange} />
    </Layout>
  );
}
