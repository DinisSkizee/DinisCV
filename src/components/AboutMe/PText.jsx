import styled from "styled-components";

const PStyled = styled.div`
  margin-bottom: ${(props) => (props.number === 2 ? ".5rem" : "4rem")};
`;

export const PText = ({ children, number }) => {
  return <PStyled number={number}>{children}</PStyled>;
};
