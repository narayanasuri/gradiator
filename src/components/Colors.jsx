import React, { useCallback, useContext, useMemo } from "react";
import styled from "styled-components";
import Select from "react-select";
import { rotationOptions, typeOptions } from "../config";
import clone from "clone";
import { GradientContext } from "../context";
import ColorsList from "./ColorsList";
import Animation from "./Animation";
import { CopyIcon } from "@primer/octicons-react";

const FlexBox = styled.div`
  display: flex;
`;

const DropdownContainer = styled.div`
  margin-right: 1rem;
  > p {
    font-weight: 800;
    letter-spacing: -0.016rem;
    margin-bottom: 0.35rem;
  }
`;

const StyledSelect = styled(Select)`
  width: 8rem;
`;

const ColorsWrapper = styled.div`
  @media screen and (min-width: 320px) and (max-width: 768px) {
    margin-top: 1rem;
    border-radius: 0.875rem;
    box-shadow: inset rgba(0, 0, 0, 0.11) 0 0 0 0.063rem;
    padding: 1rem;
    > *:not(:last-child) {
      margin-bottom: 1rem;
    }
  }

  @media screen and (min-width: 768px) {
    height: 20rem;
    overflow-y: auto;
    margin: 1rem 4rem 1rem 0.5rem;
    border-radius: 0.875rem;
    box-shadow: inset rgba(0, 0, 0, 0.11) 0 0 0 0.063rem;

    > * {
      margin: 1rem;
    }
  }
`;

const CopyCssButton = styled.button`
  border: none;
  background-color: #1b1c1d;
  color: #fff;
  font-size: 0.9rem;
  padding: 0.5rem;
  border: 0.063rem solid transparent;
  border-radius: 0.5rem;

  &:hover {
    background-color: #27292a;
    cursor: pointer;
  }

  &:active {
    background-color: #343637;
  }

  &:focus {
    background-color: #2f3032;
  }
`;

const createStyle = ({ rotation, type, colors }) => {
  const angle = type === "Radial" ? "circle" : rotation + "deg";

  return `background: ${type.toLowerCase()}-gradient(
  ${angle},
  ${colors.map(color => `${color.value} ${color.position}%`)}
);
background: -moz-${type.toLowerCase()}-gradient(
  ${angle},
  ${colors.map(color => `${color.value} ${color.position}%`)}
);
background: -webkit-${type.toLowerCase()}-gradient(
  ${angle},
  ${colors.map(color => `${color.value} ${color.position}%`)}
);`;
};

export default function Colors() {
  const { gradient, updateGradient } = useContext(GradientContext);
  const css = useMemo(() => createStyle(gradient), [gradient]);

  const defaultRotationOption = useMemo(
    () => ({ value: gradient.rotation, label: gradient.rotation }),
    [gradient]
  );

  const defaultTypeOption = useMemo(
    () => ({ value: gradient.type, label: gradient.type }),
    [gradient]
  );

  const updateRotation = useCallback(
    event => {
      const newRotation = event.value;
      const newGradient = clone(gradient);
      newGradient.rotation = newRotation;

      updateGradient(newGradient);
    },
    [gradient, updateGradient]
  );

  const updateType = useCallback(
    event => {
      const newType = event.value;
      const newGradient = clone(gradient);
      newGradient.type = newType;

      updateGradient(newGradient);
    },
    [gradient, updateGradient]
  );

  const onCopyCss = useCallback(() => {
    const copyText = document.querySelector("#copyButton").innerHTML;

    document.querySelector("#copyButton").innerHTML = "Copied!";

    setTimeout(() => {
      document.querySelector("#copyButton").innerHTML = copyText;
    }, 800);

    navigator.clipboard.writeText(css);
  }, [css]);

  return (
    <ColorsWrapper>
      <FlexBox>
        <DropdownContainer>
          <p>Rotation</p>
          <StyledSelect
            name="Rotation"
            isSearchable={false}
            defaultValue={defaultRotationOption}
            options={rotationOptions}
            onChange={updateRotation}
          />
        </DropdownContainer>

        <DropdownContainer>
          <p>Type</p>
          <StyledSelect
            name="Type"
            isSearchable={false}
            defaultValue={defaultTypeOption}
            options={typeOptions}
            onChange={updateType}
          />
        </DropdownContainer>
      </FlexBox>

      <ColorsList />

      <Animation />

      <CopyCssButton id="copyButton" onClick={onCopyCss}>
        <CopyIcon size={16} /> Copy CSS
      </CopyCssButton>
    </ColorsWrapper>
  );
}
