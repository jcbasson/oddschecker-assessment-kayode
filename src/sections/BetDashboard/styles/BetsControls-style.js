import styled from "styled-components";

export const Container = styled.div`
  border-right: 1px solid black;
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

export const FormContainer = styled.div``;

export const InputWrapper = styled.div`
  margin: 30px 0 0 0;
`;
