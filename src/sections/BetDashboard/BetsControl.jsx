import React from "react";
import PropTypes from "prop-types";
import { SelectOption, RadioInput } from "../../shared";
import {
  Header,
  FormContainer,
  InputWrapper
} from "./styles/BetsControls-style";
import { BETS_MARKET_NAME, BETS_DISPLAY_FORMAT } from "./constants";

function BetsControl({ selectOptions, radioOptions, onChange, initialValues }) {
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
    <React.Fragment>
      <Header className="header">
        <h1 className="title">Oddschecker</h1>
        <h2 className="sub-title">Dortsmund vs Milan</h2>
      </Header>
      <FormContainer>
        <InputWrapper>
          <SelectOption
            onChange={handleChange}
            name="marketName"
            value={marketName}
            options={selectOptions}
          />
        </InputWrapper>

        <InputWrapper>
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
        </InputWrapper>
      </FormContainer>
    </React.Fragment>
  );
}

BetsControl.defaultProps = {
  initialValues: {
    displayFormat: BETS_DISPLAY_FORMAT,
    marketName: BETS_MARKET_NAME
  },
  radioOptions: [],
  selectOptions: []
};

BetsControl.propTypes = {
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

export default BetsControl;
