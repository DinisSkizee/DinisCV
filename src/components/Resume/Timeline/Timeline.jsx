import SubTitle from "../../Global/SubTitle";
import { Popover } from "@headlessui/react";
import { useThemeStore } from "../../../store/store";
import { SkillsSquare } from "../../Global/SkillsSquare";

const Timeline = () => {
  const TimelineDate = ({ children, className }) => {
    return (
      <div
        className={`row-start-14 row-end-15 select-none mt-2 ${className} ${
          theme === "dark" ? "text-white" : "text-bgDarkBlue"
        }`}
      >
        {children}
      </div>
    );
  };
  const { theme } = useThemeStore((state) => state);
  return (
    <>
      <div>
        <SubTitle>{`.timeline()`}</SubTitle>

        {/* Resume */}
        <div
          className={`${
            theme === "dark" ? "bg-bgDarkBlue" : "bg-inactiveBlue"
          } mt-[2rem] w-full h-[20rem] grid grid-cols-16 grid-rows-15 p-4 pb-6 md:pb-8`}
        >
          {/* ARU */}
          <Popover
            className={`${
              theme === "dark" ? "text-white" : "text-bgDarkBlue"
            } row-start-1 row-end-3 col-start-1 col-end-2 text-[.7rem] md:text-[.9rem] md:col-end-2 md:leading-5`}
          >
            {({ open }) => (
              <>
                <Popover.Button className="focus:outline-none text-left">
                  ARU
                </Popover.Button>
                <Popover.Panel
                  className={`${open ? "opacity-100" : "opacity-0"} ${
                    theme === "dark"
                      ? "bg-bgBlue text-white"
                      : "bg-bgBright text-bgDarkBlue"
                  } absolute z-10 p-3 text-xs mt-2 mr-9 shadow-2xl md:text-md md:mr-16 lg:mr-[19.5%] xl:mr-[19%] `}
                >
                  <div className="flex flex-col gap-1">
                    <h1
                      className={`${
                        theme !== "dark" ? "font-extrabold" : ""
                      } text-gold`}
                    >
                      Anglia Ruskin University
                    </h1>
                    <h2 className="font-medium">BEng Computer Science</h2>
                    <p className="text-graywhite font-bold">
                      Sep 2018 - Jun 2021
                    </p>
                    <div className="flex gap-2 flex-wrap text-[.6rem] font-bold mt-2">
                      <SkillsSquare color="gold30">Mathematics</SkillsSquare>
                      <SkillsSquare color="gold30">Databases</SkillsSquare>
                      <SkillsSquare color="gold30">
                        Interaction & Usability
                      </SkillsSquare>
                      <SkillsSquare color="gold30">
                        Software Engineering
                      </SkillsSquare>
                      <SkillsSquare color="gold30">C++ OOP</SkillsSquare>
                      <SkillsSquare color="gold30">C# OOP</SkillsSquare>
                      <SkillsSquare color="gold30">Java</SkillsSquare>
                      <SkillsSquare color="gold30">
                        Distributed Programming
                      </SkillsSquare>
                      <SkillsSquare color="gold30">ASP.NET MVC</SkillsSquare>
                    </div>
                  </div>
                </Popover.Panel>
                <div className="border-b-yellow-500 border-b-4" />
              </>
            )}
          </Popover>

          {/* Accenture */}
          <Popover
            className={`${
              theme === "dark" ? "text-white" : "text-bgDarkBlue"
            } row-start-2 col-start-2 col-end-18 text-[.7rem] md:text-[.9rem] md:row-start-1 md:leading-6 md:col-start-3 md:col-end-17`}
          >
            {({ open }) => (
              <>
                <Popover.Button className="focus:outline-none text-left">
                  <span>
                    Software Engineer -{" "}
                    <span className="font-bold md:-mt-2">Accenture UK</span>
                  </span>
                </Popover.Button>
                <Popover.Panel
                  className={`${open ? "opacity-100" : "opacity-0"} ${
                    theme === "dark"
                      ? "bg-bgBlue text-white"
                      : "bg-bgBright text-bgDarkBlue"
                  } absolute z-10 p-3 text-xs mt-2 mr-9 left-9 shadow-2xl md:text-md md:mr-16 md:ml-6 lg:left-[17%] lg:right-[13.3%] md:left-10 xl:right-[14.5%] xl:left-[17.3%] 2xl:left-[33.1%] 2xl:right-[17.5%]`}
                >
                  <div className="flex flex-col gap-1">
                    <h2 className="font-medium text-accenturePurple">
                      Accenture UK
                    </h2>
                    <h1>Software Engineer</h1>
                    <p className="text-graywhite font-bold">
                      Dec 2022 - Present
                    </p>
                    <p>
                      During my time at Accenture, I made a significant impact
                      by leading a Tech4Good project, playing a crucial role in
                      a major UK postal client project, and participating in
                      early talent promotional videos.
                    </p>
                    <div className="flex gap-2 flex-wrap text-[.6rem] w-fit font-bold mt-2">
                      <SkillsSquare color="accenturePurple40">
                        Golang
                      </SkillsSquare>
                      <SkillsSquare color="accenturePurple40">
                        Typescript
                      </SkillsSquare>
                      <SkillsSquare color="accenturePurple40">
                        AWS (Amazon Web Services)
                      </SkillsSquare>
                      <SkillsSquare color="accenturePurple40">
                        AWS CDK
                      </SkillsSquare>
                      <SkillsSquare color="accenturePurple40">
                        APIs
                      </SkillsSquare>
                      <SkillsSquare color="accenturePurple40">
                        API Gateway
                      </SkillsSquare>
                      <SkillsSquare color="accenturePurple40">
                        Lambda
                      </SkillsSquare>
                      <SkillsSquare color="accenturePurple40">
                        React
                      </SkillsSquare>
                      <SkillsSquare color="accenturePurple40">
                        Confluence
                      </SkillsSquare>
                      <SkillsSquare color="accenturePurple40">
                        Jira
                      </SkillsSquare>
                      <SkillsSquare color="accenturePurple40">
                        Swagger
                      </SkillsSquare>
                    </div>
                  </div>
                </Popover.Panel>
                <div className="border-b-accenturePurple border-b-4" />
              </>
            )}
          </Popover>

          {/* Tech4Good */}
          <Popover
            className={`${
              theme === "dark" ? "text-white" : "text-bgDarkBlue"
            } row-start-4 col-start-6 col-end-8 text-[.7rem] md:text-[.9rem] md:row-start-3 md:col-start-6 md:col-end-8 lg:col-start-5 lg:col-end-8`}
          >
            {({ open }) => (
              <>
                <Popover.Button className="focus:outline-none text-left relative right-2 md:right-0">
                  Tech4Good
                </Popover.Button>
                <Popover.Panel
                  className={`${open ? "opacity-100" : "opacity-0"} ${
                    theme === "dark"
                      ? "bg-bgBlue text-white"
                      : "bg-bgBright text-bgDarkBlue"
                  } absolute z-10 p-3 text-xs mt-2 mr-9 left-9 shadow-2xl md:text-md md:mr-16 md:ml-6 lg:left-[17%] lg:right-[13.3%] md:left-10 xl:right-[14.5%] xl:left-[17.3%] 2xl:left-[48.7%] 2xl:right-[17.5%]`}
                >
                  <div className="flex flex-col gap-1">
                    <h1 className="font-medium text-tech4good">
                      Tech4Good Charity Project
                    </h1>
                    <p className="text-graywhite font-bold">
                      Mar 2022 - May 2023
                    </p>
                    <p>
                      In this project, we had to create a website to allow this
                      charity to get businesses to support their cause with a
                      monthly subscription. And create a network of supporters
                      to help them help more people.
                    </p>
                    <div className="flex gap-2 flex-wrap text-[.6rem] w-fit font-bold mt-2">
                      <SkillsSquare color="tech4good">HTML</SkillsSquare>
                      <SkillsSquare color="tech4good">CSS</SkillsSquare>
                      <SkillsSquare color="tech4good">Javascript</SkillsSquare>
                      <SkillsSquare color="tech4good">React</SkillsSquare>
                      <SkillsSquare color="tech4good">
                        Tailwind CSS
                      </SkillsSquare>
                      <SkillsSquare color="tech4good">
                        Styled Components
                      </SkillsSquare>
                      <SkillsSquare color="tech4good">Material UI</SkillsSquare>
                      <SkillsSquare color="tech4good">Figma</SkillsSquare>
                    </div>
                  </div>
                </Popover.Panel>
                <div className="border-b-tech4good border-b-4" />
              </>
            )}
          </Popover>

          {/* Postal Services */}
          <Popover
            className={`${
              theme === "dark" ? "text-white" : "text-bgDarkBlue"
            } mt-4 row-start-5 col-start-7 col-end-12 text-[.7rem] md:text-[.9rem] md:row-start-4 md:col-end-11`}
          >
            {({ open }) => (
              <>
                <Popover.Button className="focus:outline-none text-left">
                  Postal Services
                </Popover.Button>
                <Popover.Panel
                  className={`${open ? "opacity-100" : "opacity-0"} ${
                    theme === "dark"
                      ? "bg-bgBlue text-white"
                      : "bg-bgBright text-bgDarkBlue"
                  } absolute z-10 p-3 text-xs mt-2 mr-9 left-9 shadow-2xl md:text-md md:mr-16 md:ml-6 lg:left-[17%] lg:right-[13.3%] md:left-10 xl:right-[14.5%] xl:left-[17.3%] 2xl:left-[52.6%] 2xl:right-[17.5%]`}
                >
                  <div className="flex flex-col gap-1">
                    <h1 className="font-medium text-wildRed">
                      Accenture UK Postal Client
                    </h1>
                    <p className="text-graywhite font-bold">
                      May 2023 - Nov 2023
                    </p>
                    On a daily basis, I was responsible for the following:
                    <ol className="pl-4">
                      <li className="list-disc">
                        Development of APIs in Lambda functions using Golang.
                      </li>
                      <li className="list-disc">
                        Development of frontend journeys using JSON, having to
                        navigate through a complex engine documentation.
                      </li>
                      <li className="list-disc">
                        Deployment of APIs using AWS CDK and TypeScript.
                      </li>
                      <li className="list-disc">
                        Ownership of the entire happy path in one of our
                        team&apos;s products.
                      </li>
                      <li className="list-disc">
                        Active participation in creating initiatives as part of
                        the People Champions Group.
                      </li>
                    </ol>
                    <div className="flex gap-2 flex-wrap text-[.6rem] w-fit font-bold mt-2">
                      <SkillsSquare color="wildRed">Typescript</SkillsSquare>
                      <SkillsSquare color="wildRed">Golang</SkillsSquare>
                      <SkillsSquare color="wildRed">JSON</SkillsSquare>
                      <SkillsSquare color="wildRed">Unit Testing</SkillsSquare>
                      <SkillsSquare color="wildRed">
                        AWS (Amazon Web Services)
                      </SkillsSquare>
                      <SkillsSquare color="wildRed">AWS CDK</SkillsSquare>
                      <SkillsSquare color="wildRed">Lambda</SkillsSquare>
                      <SkillsSquare color="wildRed">API Gateway</SkillsSquare>
                      <SkillsSquare color="wildRed">API</SkillsSquare>
                      <SkillsSquare color="wildRed">Swagger</SkillsSquare>
                      <SkillsSquare color="wildRed">
                        CloudWatch Logs
                      </SkillsSquare>
                      <SkillsSquare color="wildRed">Confluence</SkillsSquare>
                      <SkillsSquare color="wildRed">Jira</SkillsSquare>
                      <SkillsSquare color="wildRed">
                        Star Of The Month
                      </SkillsSquare>
                      <SkillsSquare color="wildRed">
                        Teams Cross Dependencies
                      </SkillsSquare>
                      <SkillsSquare color="wildRed">
                        People Champions Group
                      </SkillsSquare>
                    </div>
                  </div>
                </Popover.Panel>
                <div className="border-b-wildRed border-b-4" />
              </>
            )}
          </Popover>

          {/* Gas & Energy React Redux */}
          <Popover
            className={`${
              theme === "dark" ? "text-white" : "text-bgDarkBlue"
            } mt-4 row-start-7 col-start-12 col-end-14 text-[.7rem] md:text-[.9rem] md:row-start-6 md:col-start-11 md:col-end-13`}
          >
            {({ open }) => (
              <>
                <Popover.Button className="focus:outline-none text-left flex flex-col">
                  <span className="w-[6rem] -ml-[1rem] md:w-[7rem] md:-ml-[1rem]">
                    Gas & Energy
                  </span>
                  <span className="hidden md:block md:w-[12rem] md:-ml-[3rem]">
                    (React, Redux, RxJs)
                  </span>
                </Popover.Button>
                <Popover.Panel
                  className={`${open ? "opacity-100" : "opacity-0"} ${
                    theme === "dark"
                      ? "bg-bgBlue text-white"
                      : "bg-bgBright text-bgDarkBlue"
                  } absolute z-10 p-3 text-xs mt-2 mr-9 left-9 shadow-2xl md:text-md md:mr-16 md:ml-6 lg:left-[17%] lg:right-[13.3%] md:left-10 xl:right-[14.5%] xl:left-[17.3%] 2xl:left-[52.6%] 2xl:right-[17.5%]`}
                >
                  <div className="flex flex-col gap-1">
                    <h1 className="font-medium text-greeny">
                      Accenture UK Gas & Energy Client
                    </h1>
                    <p className="text-graywhite font-bold">
                      Nov 2023 - Dec 2023
                    </p>
                    On a daily basis, I was responsible for the following:
                    <ol className="pl-4">
                      <li className="list-disc">
                        Conducted a comprehensive performance audit of the main
                        Customer Service application, identifying key areas for
                        optimization.
                      </li>
                      <li className="list-disc">
                        Implemented performance enhancements, achieving an 84%
                        reduction in loading times on the most accessed pages.
                      </li>
                      <li className="list-disc">
                        Developed and presented a strategic implementation plan
                        to the client, followed by detailed documentation and
                        reporting.
                      </li>
                      <li className="list-disc">
                        Balanced audit responsibilities with active
                        contributions to ongoing project release and development
                        tasks.
                      </li>
                      <li className="list-disc">
                        Suggested and implemented best practices to improve
                        project efficiency and effectiveness, enhancing overall
                        team productivity.
                      </li>
                    </ol>
                    <div className="flex gap-2 flex-wrap text-[.6rem] w-fit font-bold mt-2">
                      <SkillsSquare color="greeny">Typescript</SkillsSquare>
                      <SkillsSquare color="greeny">Node.js</SkillsSquare>
                      <SkillsSquare color="greeny">React</SkillsSquare>
                      <SkillsSquare color="greeny">Redux</SkillsSquare>
                      <SkillsSquare color="greeny">RxJs</SkillsSquare>
                      <SkillsSquare color="greeny">Scss</SkillsSquare>
                      <SkillsSquare color="greeny">
                        Performance Optimization
                      </SkillsSquare>
                      <SkillsSquare color="greeny">
                        Client Relations
                      </SkillsSquare>
                    </div>
                  </div>
                </Popover.Panel>
                <div className="border-b-greeny border-b-4" />
              </>
            )}
          </Popover>

          {/* Gas & Energy Go & AWS */}
          <Popover
            className={`${
              theme === "dark" ? "text-white" : "text-bgDarkBlue"
            } mt-4 row-start-9 col-start-14 col-end-17 text-[.7rem] md:text-[.9rem] md:col-start-13`}
          >
            {({ open }) => (
              <>
                <Popover.Button className="focus:outline-none text-left flex flex-col">
                  <span className="w-[6rem] -ml-2 md:w-[12rem] md:ml-[2rem]">
                    Gas & Energy
                  </span>
                  <span className="hidden md:block md:w-[12rem] md:-ml-2">
                    (Go, Terraform, AWS)
                  </span>
                </Popover.Button>
                <Popover.Panel
                  className={`${open ? "opacity-100" : "opacity-0"} ${
                    theme === "dark"
                      ? "bg-bgBlue text-white"
                      : "bg-bgBright text-bgDarkBlue"
                  } absolute z-10 p-3 text-xs mt-2 mr-9 left-9 shadow-2xl md:text-md md:mr-16 md:ml-6 lg:left-[17%] lg:right-[13.3%] md:left-10 xl:right-[14.5%] xl:left-[17.3%] 2xl:left-[52.6%] 2xl:right-[17.5%]`}
                >
                  <div className="flex flex-col gap-1">
                    <h1 className="font-medium text-greeny">
                      Accenture UK Gas & Energy Client
                    </h1>
                    <p className="text-graywhite font-bold">
                      Nov 2023 - Dec 2023
                    </p>
                    On a daily basis, I was responsible for the following:
                    <ol className="pl-4">
                      <li className="list-disc">
                        Suggested and implemented best practices to improve
                        project efficiency and effectiveness, enhancing overall
                        team productivity.
                      </li>
                    </ol>
                    <div className="flex gap-2 flex-wrap text-[.6rem] w-fit font-bold mt-2">
                      <SkillsSquare color="greeny">Typescript</SkillsSquare>
                      <SkillsSquare color="greeny">Node.js</SkillsSquare>
                      <SkillsSquare color="greeny">React</SkillsSquare>
                      <SkillsSquare color="greeny">Redux</SkillsSquare>
                      <SkillsSquare color="greeny">RxJs</SkillsSquare>
                      <SkillsSquare color="greeny">Scss</SkillsSquare>
                      <SkillsSquare color="greeny">
                        Performance Optimization
                      </SkillsSquare>
                      <SkillsSquare color="greeny">
                        Client Relations
                      </SkillsSquare>
                    </div>
                  </div>
                </Popover.Panel>
                <div className="border-b-greeny border-b-4" />
              </>
            )}
          </Popover>

          {/* DateLine */}
          <div
            className={`${
              theme === "dark" ? "border-t-white" : "border-t-inactiveContrast"
            } row-start-14 row-end-15 col-start-1 col-end-17 border-t-4`}
          />

          <TimelineDate className="col-start-1 hidden md:visible">
            2018
          </TimelineDate>
          <TimelineDate className="col-start-1">2021</TimelineDate>
          <TimelineDate className="col-start-3">2022 Dec</TimelineDate>
          <TimelineDate className="col-start-5">Jan</TimelineDate>
          <TimelineDate className="col-start-7">May</TimelineDate>
          <TimelineDate className="col-start-9">May</TimelineDate>
          <TimelineDate className="col-start-11">Nov</TimelineDate>
          <TimelineDate className="col-start-13">2024</TimelineDate>
          <TimelineDate className="col-start-15">July</TimelineDate>
        </div>
      </div>
    </>
  );
};

export default Timeline;
