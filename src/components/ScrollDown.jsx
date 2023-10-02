import styled from "styled-components";

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
    background-color: #fff;
    border-radius: 100%;
    content: "";
    height: 10px;
    top: 10px;
    width: 10px;
  }
`;

export const ScrollDown = () => {
  return (
    <div className="text-white flex w-full justify-center items-center gap-4 mb-[20%] md:mb-[10%] lg:flex-col lg:mb-[5%] xl:mb-8">
      <ScrollDownSvg className="border-2 flex items-center w-5 h-12 rounded-full justify-center md:w-7 md:h-14" />
      <ScrollSpan className="hidden lg:flex">Scroll</ScrollSpan>
    </div>
  );
};
