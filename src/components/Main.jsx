export const Main = () => {
  return (
    <div className="px-5 relative top-[50%] -translate-y-[50%] md:px-8 lg:px-[15%] xl:px-[20%]">
      <div className="flex flex-col gap-4">
        <div className="flex gap-2">
          <div className="w-8 border-t-[1px] relative top-[12px] border-greeny" />
          <div className="text-greeny md:text-xl">Hi</div>
        </div>
        <div className="text-4xl text-white md:text-5xl">
          I&apos;m <span className="text-greeny">Dinis Silva</span>
        </div>
        <div className="text-graywhite leading-6 md:text-xl">
          A <span className="text-white">software engineer</span> specialized in{" "}
          <span className="text-white">full-stack web development</span> with a
          huge passion to create apps{" "}
          <span className="text-white">using the latest technologies.</span>{" "}
          I&apos;m also a car and motorsports enthusiast, and I can&apos;t spend
          a day without music!
        </div>
        <div className="p-3 bg-greeny !rounded-lg w-fit md:text-xl md:p-4">
          Redirect to CV
        </div>
      </div>
    </div>
  );
};
