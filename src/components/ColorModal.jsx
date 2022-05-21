import React, { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import styled from "styled-components";

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.58)",
  },
  content: {
    top: "50%",
    left: "50%",
    minHeight: "12rem",
    right: "auto",
    bottom: "auto",
    borderRadius: "0.875rem",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const FieldSet = styled.div`
  margin-bottom: 1rem;
  > p {
    font-weight: 800;
    letter-spacing: -0.016rem;
    margin-bottom: 0.35rem;
  }
  > input {
    width: 8.125rem;
    padding: 0.5rem;
    font-size: 1rem;
    border: 0.063rem solid #cccccc;
    border-radius: 0.25rem;
  }
`;

const PropertyLabel = styled.p`
  font-weight: 800;
  margin-bottom: 0.5rem !important;
`;

const NegativeButton = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 1rem;
  border: none;
  background-color: #6c757d;
  color: #fff;
  font-size: 0.9rem;
  padding: 0.5rem;
  border-radius: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;

const PositiveButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 1rem;
  border: none;
  background-color: #0d6efd;
  color: #fff;
  font-size: 0.9rem;
  padding: 0.5rem;
  border-radius: 0.5rem;

  &:hover {
    cursor: pointer;
  }
`;

Modal.setAppElement("#___gatsby");

const ColorModal = ({
  index = -1,
  color = "#FF0000",
  position = 100,
  isOpen,
  setIsOpen,
  onSave,
}) => {
  const [newColor, setNewColor] = useState(color);
  const [newPosition, setNewPosition] = useState(position);

  const afterOpen = () => {
    setNewColor(color);
    setNewPosition(position);
  };

  const close = () => {
    setIsOpen(false);
  };

  const onColorUpdate = e => {
    setNewColor(e.target.value);
  };

  const onPositionUpdate = e => {
    setNewPosition(e.target.value);
  };

  const save = () => {
    onSave({ index, value: newColor, position: newPosition });
    close();
  };

  return (
    <Modal
      isOpen={isOpen}
      onAfterOpen={afterOpen}
      onRequestClose={close}
      style={modalStyles}
      contentLabel="Modify Color"
    >
      <FieldSet>
        <PropertyLabel>Color</PropertyLabel>
        <input type="text" value={newColor} onChange={onColorUpdate} />
      </FieldSet>
      <FieldSet>
        <PropertyLabel>{`Position (${newPosition})`}</PropertyLabel>
        <input
          type="range"
          min={0}
          max={100}
          value={newPosition}
          onChange={onPositionUpdate}
        />
      </FieldSet>
      <NegativeButton onClick={close}>Cancel</NegativeButton>
      <PositiveButton onClick={save}>Add</PositiveButton>
    </Modal>
  );
};

export default ColorModal;
