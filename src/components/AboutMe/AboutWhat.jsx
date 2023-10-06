import styled from "styled-components";

const TitleAbout = styled.div`
  display: flex;
  justify-content: center;
  color: rgb(255 209 102);
  margin-top: ${(props) =>
    props.start === "true" ? "0rem !important" : "2rem"};
`;

export const AboutWhat = ({ children, start }) => {
  return (
    <TitleAbout className="text-[.9rem] lg:text-[1.2rem]" start={start}>
      {children}
    </TitleAbout>
  );
};
