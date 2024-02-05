import styled from "styled-components";
import { breakPoints } from "../../../utils";
/* 
   Bet-DaasBoard-styles
*/
export const StyledSection = styled.section`
  padding: 0 1rem;

  @media (min-width: ${breakPoints.tablet}) {
    padding: 0 5rem;
  }
`;

export const StyledHeader = styled("header")`
  font-size: 0.8rem;

  & .title {
    margin: 0 0 20px 0;
  }

  & .sub-title {
    font-weight: normal;
    font-size: 0.9rem;
    margin: 20px 0 0 0;
  }
`;

export const StyledPanel = styled.div`
  width: 100%;

  margin: 0 auto;
  display: flex;
  flex-direction: column;
  border: 1px solid black;

  @media (min-width: ${breakPoints.laptop}) {
    flex-direction: row;
    max-width: 75rem; /* 1200px */
  }
`;

export const StyledPanelLeft = styled.aside`
  flex: 1;
  padding: 1rem;
  border-bottom: 1px solid black;
  border-right: none;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  @media (min-width: ${breakPoints.laptop}) {
    border-right: 1px solid black;
    border-bottom: none;
  }
`;

export const StyledPanelRight = styled.aside`
  flex: 4;
  padding: 0;
  overflow-x: auto;

  @media (min-width: ${breakPoints.laptop}) {
    padding: 1rem;
  }
`;

/*
   Table Component styles
*/
export const StyledTable = styled.table`
  border-collapse: separate;
  width: 100%;
  border-spacing: 0.5rem 1rem;

  th,
  td {
    padding: 1rem;
    text-align: center;
  }

  th:nth-child(1) {
    visibility: hidden;
  }

  & td.bet-title {
    text-align: right;
    padding: 1rem;
    width: 15%;
  }

  & td.odd-title {
    border: 1px solid black;
  }
`;

/* 
    Bet-Options component styles
*/

export const StyledContainer = styled.div`
  flex: 1;
  padding: 1rem;
`;

export const Header = styled.header`
  font-size: 0.8rem;

  & .title {
    margin: 0 0 20px 0;
  }

  & .sub-title {
    font-weight: normal;
    font-size: 0.9rem;
    margin: 20px 0 0 0;
  }
`;

export const StyledFormContainer = styled.div``;

export const StyledInputWrapper = styled.div`
  margin: 30px 0 0 0;
`;