import { useThemeStore } from "../../store/store";

export const Main = () => {
  const theme = useThemeStore((state) => state.theme);
  return (
    <div className="px-5 relative top-[50%] -translate-y-[50%] md:px-8 lg:px-[15%] xl:px-[20%]">
      <div className="flex flex-col gap-4 select-none">
        <div className="flex gap-2">
          <div className="w-8 border-t-[1px] relative top-[12px] border-greeny" />
          <div className="text-greeny md:text-xl">Hi</div>
        </div>
        <div
          className={`text-4xl md:text-5xl ${
            theme === "dark" ? "text-white" : "text-bgDarkBlue"
          }`}
        >
          I&apos;m <span className="text-greeny">Dinis Silva</span>
        </div>
        <div className="text-graywhite leading-6 md:text-xl">
          A{" "}
          <span
            className={`${theme === "dark" ? "text-white" : "text-bgDarkBlue"}`}
          >
            software engineer
          </span>{" "}
          specialized in{" "}
          <span
            className={`${theme === "dark" ? "text-white" : "text-bgDarkBlue"}`}
          >
            full-stack web development
          </span>{" "}
          with a huge passion to create apps{" "}
          <span
            className={`${theme === "dark" ? "text-white" : "text-bgDarkBlue"}`}
          >
            using the latest technologies.
          </span>{" "}
          I&apos;m also a car and motorsports enthusiast, and I can&apos;t spend
          a day without music!
        </div>
        <button className="p-3 bg-greeny !rounded-lg w-fit md:text-xl md:p-4 cursor-pointer">
          Redirect to CV
        </button>
      </div>
    </div>
  );
};
