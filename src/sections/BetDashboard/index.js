import { connect } from "react-redux";
import { compose } from "redux";
import { changeSelection } from "./actions/betsVisibilityAction";
import { getBet } from "./actions/betsActions";
import {
  getSelectedMarketSelector,
  getEventNameSelector,
  getEventLoadinSelector
} from "./selectors/betSelector";
import {
  getSelectectedDisplayFormatSelector,
  getSelectedMarketNameSelector,
  getInitialValuesSelector
} from "./selectors/visibilitySelector";
import BetDashboard from "./BetDashboard";

const mapStateToProps = state => {
  return {
    initialValues: getInitialValuesSelector(state),
    isLoading: getEventLoadinSelector(state),
    selectedMarket: getSelectedMarketSelector(state),
    selectedDisplayFormat: getSelectectedDisplayFormatSelector(state),
    selectedMarketName: getSelectedMarketNameSelector(state),
    event: getEventNameSelector(state),
    errorMessage: state.betsReducer.bet.errorMessage
  };
};

const mapDispatchToProps = {
  changeSelection,
  getBet
};

export default compose(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(BetDashboard);
