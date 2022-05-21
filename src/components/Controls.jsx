import React, { useCallback, useMemo } from "react";
import Select from "react-select";
import styled from "styled-components";
import { positionOptions } from "../config";
import SplitScreen from "./SplitScreen";

const StyledSelect = styled(Select)`
  padding-bottom: 1rem;
`;

const Controls = ({ index, value, position, update }) => {
  const defaultPositionOption = useMemo(
    () => ({ value: position, label: `${position}%` }),
    [position]
  );

  const onColorUpdate = useCallback(
    event => {
      const newColor = event.target.value;
      update(index, { value: newColor, position });
    },
    [index, position, update]
  );

  const onPositionUpdate = useCallback(
    event => {
      const newPosition = event.value;
      update(index, { value, position: newPosition });
    },
    [index, value, update]
  );

  return (
    <SplitScreen>
      <div>
        <p>Color:</p>
        <input type="text" value={value} onChange={onColorUpdate} />
      </div>
      <div>
        <p>Position:</p>
        <StyledSelect
          name="Position"
          defaultValue={defaultPositionOption}
          options={positionOptions}
          onChange={onPositionUpdate}
        />
      </div>
    </SplitScreen>
  );
};

export default Controls;
