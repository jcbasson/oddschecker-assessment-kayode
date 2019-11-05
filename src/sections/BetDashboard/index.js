import { connect } from "react-redux";
import { compose } from "redux";
import { changeSelection } from "./actions/betsVisibilityAction";
import { getBet } from "./actions/betsActions";
import BetDashboard from "./BetDashboard";

const mapStateToProps = state => {
  return {
    initialValues: state.betsReducer.visibility.selected,
    isLoading: state.loadingReducer.event.isLoading,
    markets: state.betsReducer.bet.markets,
    marketName: state.betsReducer.visibility.selected.marketName
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
