import { CheckIcon, TrashIcon, XIcon } from "@primer/octicons-react";
import React, { useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import styled from "styled-components";
import { HexColorPicker, HexColorInput } from "react-colorful";

const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.58)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    borderRadius: "0.875rem",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

const FlexBox = styled.div`
  display: flex;
`;

const FieldSet = styled.div`
  margin-bottom: 1rem;
  > p {
    font-weight: 800;
    letter-spacing: -0.016rem;
    margin-bottom: 0.35rem;
  }
  > input {
    width: 100%;
  }
`;

const PropertyLabel = styled.p`
  font-weight: 800;
  margin-bottom: 0.5rem !important;
`;

const PickerContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  > input {
    margin-top: 0.5rem;
    padding: 0.5rem;
    border-radius: 0.25rem;
    box-shadow: none;
    border: 0.063rem solid lightgray;
  }
`;

const NegativeButton = styled.button`
  border: none;
  background-color: #db2828;
  color: #ffffff;
  font-size: 0.9rem;
  padding: 0.5rem;
  border: 0.063rem solid transparent;
  border-radius: 0.5rem;

  &:hover {
    background-color: #d01919;
    cursor: pointer;
  }

  &:active {
    background-color: #b21e1e;
  }
`;

const NeutralButton = styled.button`
  border: none;
  background-color: #fff;
  color: #363636;
  font-size: 0.9rem;
  padding: 0.5rem;
  border: 0.063rem solid #dbdbdb;
  border-radius: 0.5rem;

  &:hover {
    border-color: #b5b5b5;
    cursor: pointer;
  }
`;

const PositiveButton = styled.button`
  border: none;
  background-color: #1b1c1d;
  color: #fff;
  font-size: 0.9rem;
  padding: 0.5rem;
  border: 0.063rem solid transparent;
  border-radius: 0.5rem;
  margin-left: 0.75rem;

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

Modal.setAppElement("#___gatsby");

const ColorModal = ({
  index = -1,
  color = "#FFFFFF",
  position = 100,
  canBeDeleted,
  isOpen,
  setIsOpen,
  onSave,
  onDelete,
}) => {
  const [newColor, setNewColor] = useState(color);
  const [newPosition, setNewPosition] = useState(position);

  const afterOpen = () => {
    document.body.style.overflow = "hidden";
    setNewColor(color);
    setNewPosition(position);
  };

  const close = () => {
    document.body.style.overflow = "auto";
    setIsOpen(false);
  };

  const onColorUpdate = hex => {
    setNewColor(hex);
  };

  const onPositionUpdate = e => {
    setNewPosition(e.target.value);
  };

  const save = () => {
    onSave({ index, value: newColor, position: newPosition });
    close();
  };

  const deleteItem = () => {
    onDelete(index);
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
        <PickerContainer>
          <HexColorPicker color={newColor} onChange={onColorUpdate} />
          <HexColorInput color={newColor} onChange={onColorUpdate} />
        </PickerContainer>
      </FieldSet>
      <FieldSet>
        <PropertyLabel>{`Position (${newPosition})`}</PropertyLabel>
        <input
          type="range"
          min="0"
          max="100"
          value={newPosition}
          onChange={onPositionUpdate}
        />
      </FieldSet>
      <ModalFooter>
        <FlexBox>
          {canBeDeleted && (
            <NegativeButton onClick={deleteItem}>
              <TrashIcon />
            </NegativeButton>
          )}
        </FlexBox>
        <FlexBox>
          <NeutralButton onClick={close}>
            <XIcon />
          </NeutralButton>
          <PositiveButton onClick={save}>
            <CheckIcon />
          </PositiveButton>
        </FlexBox>
      </ModalFooter>
    </Modal>
  );
};

export default ColorModal;
