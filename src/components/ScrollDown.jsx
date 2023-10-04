import styled from "styled-components";

const ScrollSpan = styled.span`
  animation: 2s ease infinite fadeOut;
  @keyframes fadeOut {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.2;
    }
    100% {
      opacity: 1;
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
    background-color: #fff;
    border-radius: 100%;
    content: "";
    height: 10px;
    top: 10px;
    width: 10px;
  }
`;

export const ScrollDown = () => {
  let expression = window.innerHeight / 2;
  const handleClick = () => {
    if (window.innerWidth < 768) expression = 0;
    else if (window.innerWidth < 1024) expression = 100;
    else if (window.innerWidth < 1440) expression = window.innerHeight / 5;
    else if (window.innerWidth < 1920) expression = window.innerHeight / 3;
    else if (window.innerWidth > 1920) expression = window.innerHeight / 1.5;

    window.scrollTo({
      top: window.innerHeight + expression,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="text-white flex w-full justify-center items-center gap-4 mb-[20%] md:mb-[10%] lg:flex-col lg:mb-[5%] xl:mb-8 cursor-pointer"
      onClick={handleClick}
    >
      <ScrollDownSvg className="border-2 flex items-center w-5 h-12 rounded-full justify-center md:w-5 md:h-12" />
      <ScrollSpan className="hidden lg:flex select-none">Scroll</ScrollSpan>
    </div>
  );
};
