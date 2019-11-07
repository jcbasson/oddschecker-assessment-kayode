import React, { Component } from "react";
import BetOptions from "./BetOptions";
import BetsTable from "./BetsTable";
import { BETS_RADIO_OPTIONS, BETS_SELECT_OPTIONS } from "./constants";
import PropTypes from "prop-types";
import {
  StyledSection,
  StyledPanel,
  StyledPanelRight,
  StyledPanelLeft,
  StyledHeader
} from "./styles/BetsDashboard-style";

class BetDashboard extends Component {
  componentDidMount() {
    const { getBet } = this.props;
    getBet({ id: 1 });
  }

  render() {
    const {
      initialValues,
      changeSelection,
      isLoading,
      selectedMarket,
      selectedDisplayFormat,
      event
    } = this.props;

    const error = false;

    if (isLoading) {
      return null;
    }

    if (!isLoading && error) {
      return <p>Something went wrong</p>;
    }

    console.log(event);

    return (
      <StyledSection>
        <StyledPanel>
          <StyledPanelLeft>
            <StyledHeader>
              <h1 className="title">Oddschecker</h1>
              <h2 className="sub-title">{event.eventName}</h2>
            </StyledHeader>
            <BetOptions
              radioOptions={BETS_RADIO_OPTIONS}
              selectOptions={BETS_SELECT_OPTIONS}
              initialValues={initialValues}
              onChange={changeSelection}
            />
          </StyledPanelLeft>
          <StyledPanelRight>
            <BetsTable
              selectedMarket={selectedMarket}
              selectedDisplayFormat={selectedDisplayFormat}
            />
          </StyledPanelRight>
        </StyledPanel>
      </StyledSection>
    );
  }
}

BetDashboard.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  initialValues: PropTypes.object.isRequired,
  bothTeamsToScore: PropTypes.object,
  changeSelectionn: PropTypes.func,
  event: PropTypes.object
};

export default BetDashboard;
