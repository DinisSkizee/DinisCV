import MainComponent from "../components/Global/MainComponent";
import MainTitle from "../components/Global/MainTitle";
import { useThemeStore } from "../store/store";

const Contact = () => {
  const { theme } = useThemeStore((state) => state);
  return (
    <MainComponent id="contact">
      <MainTitle>.contact()</MainTitle>
      <div className=" mt-8 flex justify-center">
        <span className="text-center text-graywhite 2xl:w-[50%] md:w-[90%]">
          I&apos;m never too busy to talk about new{" "}
          <span
            className={`${theme === "dark" ? "text-white" : "text-bgDarkBlue"}`}
          >
            opportunities
          </span>
          ,{" "}
          <span
            className={`${theme === "dark" ? "text-white" : "text-bgDarkBlue"}`}
          >
            ideas
          </span>{" "}
          or just to chat about some{" "}
          <span
            className={`${theme === "dark" ? "text-white" : "text-bgDarkBlue"}`}
          >
            cool stuff
          </span>
          . Feel free to reach out to me any time!
          <br />
          dinissilvauk@gmail.com
        </span>
      </div>
    </MainComponent>
  );
};

export default Contact;
