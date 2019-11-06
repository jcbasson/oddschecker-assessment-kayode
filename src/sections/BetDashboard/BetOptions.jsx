import React from "react";
import PropTypes from "prop-types";
import { SelectOption, RadioInput } from "../../shared";
import {
  StyledFormContainer,
  StyledInputWrapper
} from "./styles/BetsDashboard-style";

function BetOptions({ selectOptions, radioOptions, onChange, initialValues }) {
  const [formValue, setFormValue] = React.useState(initialValues);
  const handleChange = e => {
    const name = e.target.name;
    const value = e.target.value;
    setFormValue(v => {
      return {
        ...v,
        [name]: value
      };
    });
  };

  React.useEffect(() => {
    onChange(formValue);
  }, [formValue, onChange]);

  const { displayFormat, marketName } = formValue;

  return (
    <StyledFormContainer>
      <StyledInputWrapper>
        <SelectOption
          onChange={handleChange}
          name="marketName"
          value={marketName}
          options={selectOptions}
        />
      </StyledInputWrapper>

      <StyledInputWrapper>
        {radioOptions.map(item => {
          return (
            <RadioInput
              key={item.value}
              name="displayFormat"
              checked={item.value === displayFormat}
              onChange={handleChange}
              {...item}
            />
          );
        })}
      </StyledInputWrapper>
    </StyledFormContainer>
  );
}

BetOptions.defaultProps = {
  initialValues: {},
  radioOptions: [],
  selectOptions: [],
  eventName: ""
};

BetOptions.propTypes = {
  initialValues: PropTypes.exact({
    displayFormat: PropTypes.string.isRequired,
    marketName: PropTypes.string.isRequired
  }),
  radionOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }).isRequired
  ),
  selectOptions: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired
    }).isRequired
  ),
  onChange: PropTypes.func.isRequired
};

export default BetOptions;
