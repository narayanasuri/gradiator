import React, { useContext, useMemo } from "react";
import styled from "styled-components";
import { GradientContext } from "../context";

const normalStyle = `
  @media screen and (min-width: 320px) and (max-width: 768px) {
    width: 100%;
    height: 28vh;
    border-radius: 0.875rem;
    box-shadow: inset rgba(0, 0, 0, 0.11) 0 0 0 0.063rem;
  }

  @media screen and (min-width: 768px) {
    margin: 1rem 0.5rem 1rem 4rem;
    width: 100%;
    height: 20rem;
    border-radius: 0.875rem;
    box-shadow: inset rgba(0, 0, 0, 0.11) 0 0 0 0.063rem;
  }
`;

const createStyle = ({ rotation, type, colors }) => {
  const angle = type === "Radial" ? "circle" : rotation + "deg";

  return `background: ${type}-gradient(
    ${angle},
  ${colors.map(color => `${color.value} ${color.position}%`)}
);
background: -moz-${type}-gradient(
  ${angle},
  ${colors.map(color => `${color.value} ${color.position}%`)}
);
background: -webkit-${type}-gradient(
  ${angle},
  ${colors.map(color => `${color.value} ${color.position}%`)}
);`;
};

const Canvas = () => {
  const { gradient } = useContext(GradientContext);

  const styles = useMemo(() => {
    const gradientCss = createStyle(gradient);
    return `
    ${normalStyle}
    ${gradientCss}
    `;
  }, [gradient]);

  const CanvasWrapper = styled.div`
    ${styles}
  `;

  return <CanvasWrapper></CanvasWrapper>;
};

export default Canvas;
