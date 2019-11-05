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
    fetch("http://localhost:8765/event/1")
      .then(res => res.json())
      .then(result => {
        console.log(result);
      });
  }
  render() {
    const { changeSelection, initialValues } = this.props;
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
