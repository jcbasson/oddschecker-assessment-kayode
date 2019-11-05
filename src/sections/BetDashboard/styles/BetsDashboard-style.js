import styled from "styled-components";

export const Section = styled.section`
  padding: 0 5rem;
`;

export const Panel = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  border: 1px solid black;
`;

export const PanelOne = styled.aside`
  flex: 1;
  padding: 1rem;
  border-right: 1px solid black;
`;

export const PanelTwo = styled.aside`
  flex: 4;
  background: green;
`;
