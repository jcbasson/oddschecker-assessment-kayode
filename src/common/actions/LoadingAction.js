import { START_LOADING, FINISH_LOADING } from "../constants";

export const startLoading = ({ title }) => {
  return {
    type: START_LOADING,
    payload: { title }
  };
};

export const finishLoading = ({ title }) => {
  return {
    type: FINISH_LOADING,
    payload: { title }
  };
};
