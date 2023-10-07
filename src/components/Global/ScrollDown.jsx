import styled from "styled-components";
import { useThemeStore } from "../../store/store";

const ScrollSpan = styled.span`
  animation: 2s ease infinite fadeOut;
  @keyframes fadeOut {
    0% {
      opacity: 0.2;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.2;
    }
  }
`;
const ScrollDownSvg = styled.div`
  @keyframes scrollDownAnimation {
    0% {
      opacity: 0;
      transform: translateY(-10px);
    }
    50% {
      opacity: 1;
      transform: translateY(0px);
    }
    100% {
      opacity: 0;
      transform: translateY(10px);
    }
  }

  &:before {
    animation: scrollDownAnimation 2s infinite;
    // props to see if theme is == dark or not
    background-color: ${(props) =>
      props.theme === "dark" ? "#fff" : "#101116"};
    border-radius: 100%;
    content: "";
    height: 10px;
    top: 10px;
    width: 10px;
  }
`;

export const ScrollDown = () => {
  const { theme } = useThemeStore((state) => state);
  let expression = window.innerHeight / 2;
  const handleClick = () => {
    if (window.innerWidth < 768) expression = -100;
    else if (window.innerWidth < 1024) expression = 0;
    else if (window.innerWidth < 1440) expression = 50;
    else if (window.innerWidth < 1920) expression = 100;
    else if (window.innerWidth >= 1920) expression = 150;

    window.scrollTo({
      top: window.innerHeight + expression,
      behavior: "smooth",
    });
  };
  return (
    <div
      className={`${
        theme === "dark" ? "text-white" : "text-bgDarkBlue"
      } flex w-full justify-center items-center gap-4 mb-[20%] md:mb-[10%] lg:flex-col lg:mb-[5%] xl:mb-8 cursor-pointer`}
      onClick={handleClick}
    >
      <ScrollDownSvg
        theme={theme}
        className={`border-2 flex items-center w-5 h-12 rounded-full justify-center md:w-5 md:h-12 ${
          theme === "dark" ? "" : "border-black"
        }`}
      />
      <ScrollSpan className="hidden lg:flex select-none">Scroll</ScrollSpan>
    </div>
  );
};
