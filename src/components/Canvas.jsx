import React, { useContext, useMemo } from "react";
import styled from "styled-components";
import { GradientContext } from "../context";

const normalStyle = `
  margin: 1rem 0.5rem 1rem 4rem;
  width: 100%;
  height: 20rem;
  border-radius: 0.875rem;
  box-shadow: inset rgba(0, 0, 0, 0.11) 0 0 0 0.063rem;
`;

const createStyle = ({ rotation, type, colors }) => {
  return `
    margin: 1rem 0.5rem 1rem 4rem;
    width: 100%;
    height: 20rem;
    border-radius: 0.875rem;
    box-shadow: inset rgba(0, 0, 0, 0.11) 0 0 0 0.063rem;
    background: ${type.toLowerCase()}-gradient(
      ${rotation}deg,
      ${colors.map(color => `${color.value} ${color.position}%`)}
    );
    background: -moz-${type.toLowerCase()}-gradient(
      ${rotation}deg,
      ${colors.map(color => `${color.value} ${color.position}%`)}
    );
    background: -webkit-${type.toLowerCase()}-gradient(
      ${rotation}deg,
      ${colors.map(color => `${color.value} ${color.position}%`)}
    );
  `;
};

const Canvas = () => {
  const { gradient } = useContext(GradientContext);

  const styles = useMemo(() => {
    if (!gradient) {
      return normalStyle;
    }

    return createStyle(gradient);
  }, [gradient]);

  const CanvasWrapper = styled.div`
    ${styles}
  `;

  return <CanvasWrapper></CanvasWrapper>;
};

export default Canvas;
