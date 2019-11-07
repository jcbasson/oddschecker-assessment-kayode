import { connect } from "react-redux";
import { compose } from "redux";
import { changeSelection } from "./actions/betsVisibilityAction";
import { getBet } from "./actions/betsActions";
import {
  getSelectedMarketSelector,
  getEventNameSelector
} from "./selectors/betSelector";
import { getSelectectedDisplayFormatSelector } from "./selectors/visibilitySelector";
import BetDashboard from "./BetDashboard";

const mapStateToProps = state => ({
  initialValues: state.betsReducer.visibility.selected,
  isLoading: state.loadingReducer.event.isLoading,
  selectedMarket: getSelectedMarketSelector(state),
  selectedDisplayFormat: getSelectectedDisplayFormatSelector(state),
  event: getEventNameSelector(state)
});

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
