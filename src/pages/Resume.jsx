import Timeline from "../components/Resume/Timeline";

const Resume = () => {
  return (
    <div className="bg-bgblue pt-[35%] md:text-lg pb-16 px-5 lg:px-[18%] md:px-12">
      {/* Title */}
      <h1 className="text-white text-5xl">{`.resume()`}</h1>

      <Timeline />
      <div>
        <h3 className="text-white text-3xl ml-1 pt-12 mb-[15rem]">{`.workExperience()`}</h3>
      </div>
    </div>
  );
};

export default Resume;
