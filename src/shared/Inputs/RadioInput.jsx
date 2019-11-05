import React from "react";
import styled from "styled-components";

const Radio = styled.input``;

const InputWrapper = styled.div``;

function RadioInput({ value, label, ...props }) {
  return (
    <InputWrapper>
      <Radio type="radio" id={value} value={value} {...props} />
      <label id={value}>{label}</label>
    </InputWrapper>
  );
}

export default RadioInput;
