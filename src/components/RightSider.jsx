import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const RightSider = () => {
  return (
    <div className="flex-col items-center hidden w-4 gap-4 lg:flex fixed bottom-0 lg:right-24">
      <div className="flex flex-col gap-4 justify-end">
        <a href="https://www.linkedin.com/in/dinissilvase/" target="blank">
          <FontAwesomeIcon className="text-white h-5" icon={faGithub} />
        </a>
        <a href="https://github.com/DinisSkizee/" target="blank">
          <FontAwesomeIcon className="text-white h-5" icon={faLinkedin} />
        </a>
      </div>
      <div className="mr-2 h-16 ml-[5px] border-l border-foreground"></div>
    </div>
  );
};
