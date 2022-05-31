import { AlertFillIcon } from "@primer/octicons-react";
import clone from "clone";
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GradientContext } from "../context";
import ColorModal from "./ColorModal";

const Wrapper = styled.div`
  > p {
    font-weight: 800;
    letter-spacing: -0.016rem;
  }
`;

const FlexBox = styled.div`
  display: flex;
  align-items: center;
`;

const ColorBox = styled.div`
  width: 3rem;
  height: 3rem;
  margin: 0.5rem 0.75rem 0 0;
  border-radius: 0.875rem;
  border: 0.188rem solid whitesmoke;

  &:hover {
    cursor: pointer;
  }
`;

const AddButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  margin: 0.5rem 0.75rem 0 0;
  border-radius: 50%;
  background-color: whitesmoke;

  &:hover {
    cursor: pointer;
  }
`;

const WarningMessage = styled.p`
  color: #f27168;
  font-weight: 400 !important;
  font-size: 0.85rem;
  padding: 0.75rem 0.25rem;
`;

export default function ColorsList() {
  const { gradient, updateGradient } = useContext(GradientContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentEditingColor, setCurrentEditingColor] = useState({});
  const [warning, setWarning] = useState(null);

  const openModal = () => {
    setIsModalOpen(true);
  };

  useEffect(() => {
    const positions = gradient.colors.map(color => color.position);

    if (new Set(positions).size !== positions.length) {
      setWarning("Position overlap");
    } else {
      setWarning(null);
    }
  }, [gradient]);

  useEffect(() => {
    if (!isModalOpen) {
      setCurrentEditingColor({});
    }
  }, [isModalOpen]);

  const saveColor = ({ index, value, position }) => {
    const copy = clone(gradient);

    if (index > -1) {
      copy.colors[index] = { value, position };
    } else {
      copy.colors.push({ value, position });
    }

    copy.colors.sort((a, b) => a.position - b.position);

    setCurrentEditingColor({});

    updateGradient(copy);
  };

  const editColor = index => {
    const color = gradient.colors[index];
    const temp = {
      index,
      color: color.value,
      position: color.position,
      canBeDeleted: gradient.colors.length > 2,
    };

    setCurrentEditingColor(temp);
    openModal();
  };

  const deleteColor = index => {
    const copy = clone(gradient);

    copy.colors.splice(index, 1);

    setCurrentEditingColor({});

    updateGradient(copy);
  };

  return (
    <Wrapper>
      <p>Colors</p>

      <FlexBox>
        {gradient.colors.map((color, index) => (
          <ColorBox
            key={index}
            style={{ backgroundColor: color.value }}
            onClick={() => editColor(index)}
          />
        ))}
        {gradient.colors.length <= 5 && (
          <AddButton onClick={openModal}>+</AddButton>
        )}
      </FlexBox>

      {warning && (
        <WarningMessage>
          <AlertFillIcon /> {warning}
        </WarningMessage>
      )}

      <ColorModal
        {...currentEditingColor}
        isOpen={isModalOpen}
        setIsOpen={setIsModalOpen}
        onSave={saveColor}
        onDelete={deleteColor}
      />
    </Wrapper>
  );
}
