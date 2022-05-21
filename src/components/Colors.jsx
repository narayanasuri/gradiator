import React, { useCallback, useContext, useMemo } from "react";
import styled from "styled-components";
import Accordion from "./Accordion";
import Controls from "./Controls";
import Select from "react-select";
import { rotationOptions, typeOptions } from "../config";
import clone from "clone";
import { GradientContext } from "../context";
import SplitScreen from "./SplitScreen";

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
  height: 20rem;
  overflow-y: auto;
  margin: 1rem 4rem 1rem 0.5rem;
  border-radius: 0.875rem;
  box-shadow: inset rgba(0, 0, 0, 0.11) 0 0 0 0.063rem;

  > * {
    margin: 1rem;
  }
`;

export default function Colors() {
  const { gradient, updateGradient } = useContext(GradientContext);

  const defaultRotationOption = useMemo(
    () => ({ value: gradient.rotation, label: gradient.rotation }),
    [gradient]
  );

  const defaultTypeOption = useMemo(
    () => ({ value: gradient.type, label: gradient.type }),
    [gradient]
  );

  const updateColor = useCallback(
    (index, newColor) => {
      const newGradient = clone(gradient);
      newGradient.colors[index] = newColor;

      updateGradient(newGradient);
    },
    [gradient, updateGradient]
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

  const accordionItems = useMemo(() => {
    if (!gradient) {
      return [];
    }

    const { colors } = gradient;

    return colors.map((color, index) => {
      return {
        title: color.value,
        content: <Controls index={index} {...color} update={updateColor} />,
      };
    });
  }, [gradient, updateColor]);

  return (
    <ColorsWrapper>
      <FlexBox>
        <DropdownContainer>
          <p>Rotation</p>
          <StyledSelect
            name="Rotation"
            defaultValue={defaultRotationOption}
            options={rotationOptions}
            onChange={updateRotation}
          />
        </DropdownContainer>

        <DropdownContainer>
          <p>Type</p>
          <StyledSelect
            name="Type"
            defaultValue={defaultTypeOption}
            options={typeOptions}
            onChange={updateType}
          />
        </DropdownContainer>
      </FlexBox>

      <Accordion items={accordionItems} />
    </ColorsWrapper>
  );
}
