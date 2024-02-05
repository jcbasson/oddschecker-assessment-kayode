import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { StyledHeader } from "./styles/BetsDashboard-style";
import { calculatePotentialWinnings } from "../../utils";
import { BETS_DISPLAY_FORMAT_DECIMAL } from "./constants";

const StyledContainer = styled("div")`
  max-width: 500px;
  margin: 0 auto;
  background: white;
  border: 1px solid black;
`;

const StyledSlipForm = styled.form``;

const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0;
`;

const NumberInput = styled.input`
  margin-right: 10px;
  border-radius: 5px;
  outline: none;
  font-size: 1rem;
  padding: 0.5rem 0;
  appearance: none;
`;

const SlipForm = ({ label, onSubmit }) => {
  const [value, setValue] = React.useState("");
  const handleChange = e => setValue(e.target.value.trim());

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <StyledSlipForm onSubmit={handleSubmit}>
      <InputWrapper>
        <NumberInput value={value} onChange={handleChange} type="number" />
        <label htmlFor={label}>
          Returns: {"  "}
          <strong>£- </strong>
        </label>
      </InputWrapper>
      <InputWrapper>
        <button>Place Bet</button>
      </InputWrapper>
    </StyledSlipForm>
  );
};

SlipForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired
};

const BetSlip = ({
  selectedOdd,
  selectedMarketName,
  selectedDisplayFormat
}) => {
  const { oddsFractional, oddsDecimal } = selectedOdd.odd;

  const isDecimal = selectedDisplayFormat === BETS_DISPLAY_FORMAT_DECIMAL;

  const handleSubmit = value => {
    alert(
      `you bet stake is ${value} and your potential winning is ${calculatePotentialWinnings(
        oddsFractional,
        value
      )}`
    );
  }; //

  return (
    <StyledContainer key={selectedMarketName}>
      <div>
        <StyledHeader>
          <h2>
            {selectedMarketName} {selectedOdd.name} @{" "}
            {isDecimal ? oddsDecimal : oddsFractional}
          </h2>
        </StyledHeader>
        <SlipForm
          label={selectedOdd.odd.bookmakerCode}
          onSubmit={handleSubmit}
        />
      </div>
    </StyledContainer>
  );
};

BetSlip.propTypes = {
  selectedOdd: PropTypes.object.isRequired,
  selectedDisplayFormat: PropTypes.string.isRequired,
  selectedMarketName: PropTypes.string.isRequired
};

export default BetSlip;
