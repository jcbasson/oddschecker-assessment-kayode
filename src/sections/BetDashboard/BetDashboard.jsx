import React, { Component } from "react";
import BetOptions from "./BetOptions";
import BetsTable from "./BetsTable";
import BetSlip from "./BetSlip";
import { BETS_RADIO_OPTIONS, BETS_SELECT_OPTIONS } from "./constants";
import PropTypes from "prop-types";
import { getSelectedBet } from "../../utils";
import {
  StyledSection,
  StyledPanel,
  StyledPanelRight,
  StyledPanelLeft,
  StyledHeader
} from "./styles/BetsDashboard-style";

class BetDashboard extends Component {
  state = {
    selectedOdd: null
  };

  componentDidMount() {
    const { getBet } = this.props;
    getBet({ id: 1 });
  }

  handleBetSelect = e => {
    const {
      selectedMarket: { bets }
    } = this.props;

    const selectedOdd = getSelectedBet({
      bets,
      betId: +e.target.getAttribute("data-bid"),
      bookmakerCode: e.target.getAttribute("data-bk")
    });
    this.setState({ selectedOdd });
  };

  render() {
    const {
      initialValues,
      changeSelection,
      isLoading,
      selectedMarket,
      selectedDisplayFormat,
      selectedMarketName,
      errorMessage,
      event
    } = this.props;
    const { selectedOdd } = this.state;

    if (isLoading) {
      return <h1>Loading .....</h1>;
    }

    if (!isLoading && errorMessage) {
      return <h1>{errorMessage}</h1>;
    }

    return (
      <React.Fragment>
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
                onBetSelect={this.handleBetSelect}
                selectedMarket={selectedMarket}
                selectedDisplayFormat={selectedDisplayFormat}
              />
            </StyledPanelRight>
          </StyledPanel>
        </StyledSection>
        {!!selectedOdd && (
          <BetSlip
            selectedDisplayFormat={selectedDisplayFormat}
            selectedMarketName={selectedMarketName}
            selectedOdd={selectedOdd}
          />
        )}
      </React.Fragment>
    );
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.selectedMarketName !== this.props.selectedMarketName) {
      this.setState({ selectedOdd: null });
    }
  }
}

BetDashboard.defaultProps = {
  errorMessage: ""
};

BetDashboard.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  initialValues: PropTypes.object.isRequired,
  bothTeamsToScore: PropTypes.object,
  changeSelectionn: PropTypes.func,
  selectedMarketName: PropTypes.string,
  event: PropTypes.object,
  errorMessage: PropTypes.string.isRequired
};

export default BetDashboard;
