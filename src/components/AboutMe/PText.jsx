import styled from "styled-components";

const PStyled = styled.div`
  color: ${(props) =>
    props.width < 768
      ? (props.number === 1 && props.height >= 500 && props.height <= 1000) ||
        (props.number === 2 && props.height >= 800 && props.height <= 1350) ||
        (props.number === 3 && props.height >= 1000 && props.height <= 1500) ||
        (props.number === 4 && props.height >= 1300 && props.height <= 1850) ||
        (props.number === 5 && props.height >= 1600 && props.height <= 2200) ||
        (props.number === 6 && props.height >= 2000 && props.height <= 2650) ||
        (props.number === 7 && props.height >= 2500 && props.height <= 3100) ||
        (props.number === 8 && props.height >= 3050 && props.height <= 3600) ||
        (props.number === 9 && props.height >= 3600 && props.height <= 4300) ||
        (props.number === 10 && props.height >= 4050 && props.height <= 4600) ||
        (props.number === 11 && props.height >= 4350 && props.height <= 4900) ||
        (props.number === 12 && props.height >= 4600 && props.height <= 5200)
        ? "white"
        : "#8A8A8D"
      : props.width < 1024
      ? (props.number === 1 && props.height >= 600 && props.height <= 1350) ||
        (props.number === 2 && props.height >= 900 && props.height <= 1600) ||
        (props.number === 3 && props.height >= 1050 && props.height <= 1800) ||
        (props.number === 4 && props.height >= 1300 && props.height <= 2000) ||
        (props.number === 5 && props.height >= 1600 && props.height <= 2300) ||
        (props.number === 6 && props.height >= 2000 && props.height <= 2700) ||
        (props.number === 7 && props.height >= 2350 && props.height <= 3000) ||
        (props.number === 8 && props.height >= 2800 && props.height <= 3400) ||
        (props.number === 9 && props.height >= 3200 && props.height <= 3950) ||
        (props.number === 10 && props.height >= 3600 && props.height <= 4230) ||
        (props.number === 11 && props.height >= 3800 && props.height <= 4500) ||
        (props.number === 12 && props.height >= 4000 && props.height <= 4750)
        ? "white"
        : "#8A8A8D"
      : props.width < 1440
      ? (props.number === 1 && props.height >= 700 && props.height <= 1450) ||
        (props.number === 2 && props.height >= 900 && props.height <= 1700) ||
        (props.number === 3 && props.height >= 1100 && props.height <= 1800) ||
        (props.number === 4 && props.height >= 1300 && props.height <= 2100) ||
        (props.number === 5 && props.height >= 1650 && props.height <= 2400) ||
        (props.number === 6 && props.height >= 2050 && props.height <= 2750) ||
        (props.number === 7 && props.height >= 2450 && props.height <= 3150) ||
        (props.number === 8 && props.height >= 2880 && props.height <= 3550) ||
        (props.number === 9 && props.height >= 3250 && props.height <= 4150) ||
        (props.number === 10 && props.height >= 3650 && props.height <= 4450) ||
        (props.number === 11 && props.height >= 3850 && props.height <= 4700) ||
        (props.number === 12 && props.height >= 4130 && props.height <= 4850)
        ? "white"
        : "#8A8A8D"
      : props.width < 1920
      ? (props.number === 1 && props.height >= 830 && props.height <= 1550) ||
        (props.number === 2 && props.height >= 1050 && props.height <= 1850) ||
        (props.number === 3 && props.height >= 1180 && props.height <= 1950) ||
        (props.number === 4 && props.height >= 1400 && props.height <= 2150) ||
        (props.number === 5 && props.height >= 1680 && props.height <= 2400) ||
        (props.number === 6 && props.height >= 1950 && props.height <= 2700) ||
        (props.number === 7 && props.height >= 2300 && props.height <= 3000) ||
        (props.number === 8 && props.height >= 2650 && props.height <= 3350) ||
        (props.number === 9 && props.height >= 3050 && props.height <= 3800) ||
        (props.number === 10 && props.height >= 3300 && props.height <= 4050) ||
        (props.number === 11 && props.height >= 3580 && props.height <= 4350) ||
        (props.number === 12 && props.height >= 3750 && props.height <= 4500)
        ? "white"
        : "#8A8A8D"
      : props.width < 2500
      ? (props.number === 1 && props.height >= 850 && props.height <= 1200) ||
        (props.number === 2 && props.height >= 1050 && props.height <= 1400) ||
        (props.number === 3 && props.height >= 1150 && props.height <= 1550) ||
        (props.number === 4 && props.height >= 1350 && props.height <= 1700) ||
        (props.number === 5 && props.height >= 1600 && props.height <= 1950) ||
        (props.number === 6 && props.height >= 1900 && props.height <= 2200) ||
        (props.number === 7 && props.height >= 2100 && props.height <= 2500) ||
        (props.number === 8 && props.height >= 2350 && props.height <= 2700) ||
        (props.number === 9 && props.height >= 2600 && props.height <= 3200) ||
        (props.number === 10 && props.height >= 2900 && props.height <= 3450) ||
        (props.number === 11 && props.height >= 3150 && props.height <= 3650) ||
        (props.number === 12 && props.height >= 3200 && props.height <= 3800)
        ? "white"
        : "#8A8A8D"
      : ""};

  margin-bottom: ${(props) => (props.number === 2 ? ".5rem" : "4rem")};
`;

export const PText = ({ height, children, number, width }) => {
  return (
    <PStyled height={height} number={number} width={width}>
      {children}
    </PStyled>
  );
};
