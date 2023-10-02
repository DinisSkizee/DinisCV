import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Footer = () => {
  return (
    <div className="lg:hidden flex fixed bottom-0 w-full justify-between p-4 bg-bgblue">
      <div className="text-white md:text-xl">Get In touch:</div>
      <div className="flex gap-4 justify-end">
        <a href="https://www.linkedin.com/in/dinissilvase/">
          <FontAwesomeIcon className="text-white h-5 md:h-7" icon={faGithub} />
        </a>
        <a href="https://github.com/DinisSkizee/">
          <FontAwesomeIcon
            className="text-white h-5 md:h-7"
            icon={faLinkedin}
          />
        </a>
        <a>
          <FontAwesomeIcon
            className="text-white h-5 md:h-7"
            icon={faEnvelope}
          />
        </a>
      </div>
    </div>
  );
};