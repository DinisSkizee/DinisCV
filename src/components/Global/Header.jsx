import { useThemeStore } from "../../store/store";

import { useState } from "react";
import styled from "styled-components";

const scrollToAbout = () => {
  const aboutSection = document.getElementById("about");
  const rect = aboutSection.getBoundingClientRect();
  const offset =
    window.innerWidth < 1440
      ? 50
      : window.innerWidth < 1920
      ? 150
      : window.innerWidth < 2560
      ? 250
      : 150;
  scrollToSpot(rect, offset);
};
const scrollToResume = () => {
  const resumeSection = document.getElementById("resume");
  const rect = resumeSection.getBoundingClientRect();
  const offset =
    window.innerWidth < 1440
      ? 50
      : window.innerWidth < 1920
      ? 150
      : window.innerWidth < 2560
      ? 250
      : window.innerWidth < 3840
      ? 350
      : 400;
  scrollToSpot(rect, offset);
};
const scrollToProjects = () => {
  const projectsSection = document.getElementById("projects");
  const rect = projectsSection.getBoundingClientRect();
  const offset =
    window.innerWidth < 1440
      ? 50
      : window.innerWidth < 1920
      ? 150
      : window.innerWidth < 2560
      ? 250
      : window.innerWidth < 3840
      ? 350
      : 400;
  scrollToSpot(rect, offset);
};
const scrollToContact = () => {
  const contactSection = document.getElementById("contact");
  const rect = contactSection.getBoundingClientRect();
  const offset =
    window.innerWidth < 1440
      ? 50
      : window.innerWidth < 1920
      ? 150
      : window.innerWidth < 2560
      ? 250
      : window.innerWidth < 3840
      ? 350
      : 400;
  scrollToSpot(rect, offset);
};

const scrollToSpot = (rect, off) => {
  const scrollTop = window.scrollY || document.documentElement.scrollTop;
  const offsetTop = rect.top + scrollTop + off;
  window.scrollTo({ top: offsetTop, behavior: "smooth" });
};

const AnimatedSvg = styled.svg`
  animation: appearAnimation 0.5s ease-in-out forwards;

  @keyframes appearAnimation {
    0% {
      transform: scale(0) rotate(0deg);
      opacity: 0;
    }
    25% {
      transform: scale(0.7) rotate(90deg);
      opacity: 1;
    }
    50% {
      transform: scale(1.2) rotate(180deg);
      opacity: 1;
    }

    100% {
      transform: scale(1) rotate(380deg);
      opacity: 1;
    }
  }

  &.hidden {
    animation: disappearAnimation 0.5s ease-in-out forwards;
  }

  @keyframes disappearAnimation {
    0% {
      transform: scale(1) rotate(0);
      opacity: 1;
    }
    100% {
      transform: scale(0) rotate(360deg);
      opacity: 0;
    }
  }
`;

export const Header = () => {
  const { toggleTheme, theme } = useThemeStore((state) => state);
  const [isLight, setIsLight] = useState(false);

  const toggleLight = () => {
    setIsLight(!isLight);
    toggleTheme();
  };

  return (
    <div
      className={`flex w-full justify-between px-5 py-9 fixed z-40 lg:px-12 items-center ${
        theme === "dark" ? "bg-bgBlue" : "bg-bgBright"
      }`}
    >
      <div
        className={`${
          theme === "dark" ? "text-white" : "text-bgDarkBlue"
        } flex justify-start pl-4 gap-2 leading-tight md:text-xl items-center select-none cursor-pointer group`}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
      >
        <div className="group-hover:drop-shadow-lgDrop">
          DINIS
          <br />
          SILVA
        </div>
        <span className="font-extrabold group-hover:drop-shadow-lgDrop">{`</>`}</span>
      </div>
      <div
        className={`lg:justify-center gap-4 hidden lg:flex lg:text-lg select-none cursor-pointer ${
          theme === "dark" ? "lg:text-white" : "lg:text-bgDarkBlue"
        }`}
      >
        <div className="hover:text-greeny" onClick={scrollToAbout}>
          .about()
        </div>
        <div className="hover:text-greeny" onClick={scrollToResume}>
          .resume()
        </div>
        <div className="hover:text-greeny" onClick={scrollToProjects}>
          .projects()
        </div>
        <div className="hover:text-greeny" onClick={scrollToContact}>
          .contact()
        </div>
      </div>
      <div className="flex cursor-pointer justify-center items-center">
        <AnimatedSvg
          onClick={toggleLight}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke={theme === "dark" ? "#ffffffff" : "#101116"}
          aria-hidden="true"
          className={`absolute h-6 w-6 rotate-0 scale-100 text-foreground transition-all md:h-8 md:w-8 hover:stroke-greeny hover:drop-shadow-moonDrop ${
            isLight ? "" : "hidden"
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
          ></path>
        </AnimatedSvg>
        <AnimatedSvg
          onClick={toggleLight}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke={theme === "dark" ? "#ffffffff" : "#101116"}
          aria-hidden="true"
          className={`absolute h-6 w-6 rotate-0 scale-100 text-foreground transition-all md:h-8 md:w-8 hover:stroke-greeny hover:drop-shadow-moonDrop ${
            isLight ? "hidden" : ""
          }`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
          ></path>
        </AnimatedSvg>
      </div>
    </div>
  );
};
