import React from "react";
import styled from "styled-components";

const Select = styled.select`
  appearance: none;
  font-size: 0.8rem;
  box-sizing: border-box;
  display: inline-block;
  background-color: #fff;
  padding: 0.5rem 0.2rem;
  width: 100%;
`;
const Options = styled.option``;

function SelectOption({ options, ...props }) {
  return (
    <Select {...props}>
      {options.map(opt => {
        return (
          <Options key={opt.value} value={opt.value}>
            {opt.label}
          </Options>
        );
      })}
    </Select>
  );
}

export default SelectOption;
