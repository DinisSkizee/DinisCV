import MainComponent from "../components/Global/MainComponent";
import MainTitle from "../components/Global/MainTitle";

const Contact = () => {
  return (
    <MainComponent id="contact">
      <MainTitle>.contact()</MainTitle>
      <div className=" mt-8 flex justify-center">
        <span className="text-center text-graywhite 2xl:w-[50%]">
          I&apos;m never too busy to talk about new{" "}
          <span className="text-white">opportunities</span>,{" "}
          <span className="text-white">ideas</span> or just to chat about some{" "}
          <span className="text-white">cool stuff</span>. Feel free to reach out
          to me at any time!
          <br />
          dinissilvauk@gmail.com
        </span>
      </div>
    </MainComponent>
  );
};

export default Contact;
