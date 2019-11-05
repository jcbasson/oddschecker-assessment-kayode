import React, { Component } from "react";
import BetsContol from "./BetsControl";
import { BETS_RADIO_OPTIONS, BETS_SELECT_OPTIONS } from "./constants";
import {
  Section,
  Panel,
  PanelOne,
  PanelTwo
} from "./styles/BetsDashboard-style";

class BetDashboard extends Component {
  componentDidMount() {
    const { getBet } = this.props;
    getBet({ id: 1 });
  }

  render() {
    const { isLoading, markets, initialValues, changeSelection } = this.props;

    return (
      <Section>
        <Panel>
          <PanelOne>
            <BetsContol
              radioOptions={BETS_RADIO_OPTIONS}
              selectOptions={BETS_SELECT_OPTIONS}
              initialValues={initialValues}
              onChange={changeSelection}
            />
          </PanelOne>
          <PanelTwo></PanelTwo>
        </Panel>
      </Section>
    );
  }
}

export default BetDashboard;
