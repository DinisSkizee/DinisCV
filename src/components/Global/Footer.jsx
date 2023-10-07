import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useThemeStore } from "../../store/store";

export const Footer = () => {
  const { theme } = useThemeStore((state) => state);
  return (
    <>
      <div
        className={`lg:hidden flex fixed bottom-0 w-full justify-between p-4 ${
          theme === "dark" ? "bg-bgBlue" : "bg-bgBright"
        }`}
      >
        <div
          className={`${
            theme === "dark" ? "text-white" : "text-bgDarkBlue"
          }  md:text-xl`}
        >
          Get In touch:
        </div>
        <div className="flex gap-4 justify-end">
          <a href="https://www.linkedin.com/in/dinissilvase/" target="blank">
            <FontAwesomeIcon
              className={`${
                theme === "dark" ? "text-white" : "text-bgDarkBlue"
              } h-5 md:h-7`}
              icon={faGithub}
            />
          </a>
          <a href="https://github.com/DinisSkizee/" target="blank">
            <FontAwesomeIcon
              className={`${
                theme === "dark" ? "text-white" : "text-bgDarkBlue"
              } h-5 md:h-7`}
              icon={faLinkedin}
            />
          </a>
          <a href="mailto:dinissilvauk@gmail.com" target="blank">
            <FontAwesomeIcon
              className={`${
                theme === "dark" ? "text-white" : "text-bgDarkBlue"
              } h-5 md:h-7`}
              icon={faEnvelope}
            />
          </a>
        </div>
      </div>
      <div
        className={`hidden: lg:visible flex justify-center text-graywhite pb-5 ${
          theme === "dark" ? "bg-bgBlue" : "bg-bgBright"
        }`}
      >
        <span>
          © 2022-2023 | <span className="font-bold"> Dinis Silva</span>
        </span>
      </div>
    </>
  );
};
