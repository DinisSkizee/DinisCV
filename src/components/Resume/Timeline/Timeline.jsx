import { Popover } from "@headlessui/react";
import { Skills } from "./Skills";
import SubTitle from "../SubTitle";

const Timeline = () => {
  return (
    <>
      <div>
        <SubTitle>{`.timeline()`}</SubTitle>

        {/* Resume */}
        <div className="bg-bgDarkBlue mt-[2rem] w-full h-[20rem] grid grid-cols-16 grid-rows-15 p-4 pb-6 md:pb-8">
          {/* ARU */}
          <Popover className="row-start-1 row-end-3 col-start-1 col-end-7 text-white text-[.7rem] md:text-[.9rem] md:col-end-4 md:leading-5">
            {({ open }) => (
              <>
                <Popover.Button className="focus:outline-none text-left">
                  Anglia Ruskin University
                </Popover.Button>
                <Popover.Panel
                  className={`${
                    open ? "opacity-100" : "opacity-0"
                  } absolute z-10 bg-bgBlue p-3 text-xs text-white mt-2 mr-9 shadow-2xl md:text-md md:mr-16 lg:mr-[19.5%] xl:mr-[19%] `}
                >
                  <div className="flex flex-col gap-1">
                    <h1 className="text-gold">Anglia Ruskin University</h1>
                    <h2 className="font-medium">BEng Computer Science</h2>
                    <p className="text-graywhite font-bold">
                      Sep 2018 - Jun 2021
                    </p>
                    <div className="flex gap-2 flex-wrap text-[.6rem] font-bold mt-2">
                      <Skills color="gold30">Mathematics</Skills>
                      <Skills color="gold30">Databases</Skills>
                      <Skills color="gold30">Interaction & Usability</Skills>
                      <Skills color="gold30">Software Engineering</Skills>
                      <Skills color="gold30">C++ OOP</Skills>
                      <Skills color="gold30">C# OOP</Skills>
                      <Skills color="gold30">Java</Skills>
                      <Skills color="gold30">Distributed Programming</Skills>
                      <Skills color="gold30">ASP.NET MVC</Skills>
                    </div>
                  </div>
                </Popover.Panel>
                <div className="border-b-yellow-500 border-b-4" />
              </>
            )}
          </Popover>

          {/* Accenture */}
          <Popover className="row-start-4 col-start-6 col-end-15 text-white text-[.7rem] md:text-[.9rem] md:row-start-3 md:leading-6 md:col-start-5 md:col-end-17">
            {({ open }) => (
              <>
                <Popover.Button className="focus:outline-none text-left flex flex-col">
                  <span>Software Engineer</span>
                  <span className="font-bold md:-mt-2">Accenture UK</span>
                </Popover.Button>
                <Popover.Panel
                  className={`${
                    open ? "opacity-100" : "opacity-0"
                  } absolute z-10 bg-bgBlue p-3 text-xs text-white mt-2 mr-9 left-9 shadow-2xl md:text-md md:mr-16 md:ml-6 lg:left-[17%] lg:right-[13.3%] md:left-10 xl:right-[14.5%] xl:left-[17.3%] 2xl:left-[33.1%] 2xl:right-[15.5%]`}
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
                      <Skills color="accenturePurple40">Golang</Skills>
                      <Skills color="accenturePurple40">Typescript</Skills>
                      <Skills color="accenturePurple40">AWS</Skills>
                      <Skills color="accenturePurple40">AWS CDK</Skills>
                      <Skills color="accenturePurple40">APIs</Skills>
                      <Skills color="accenturePurple40">API Gateway</Skills>
                      <Skills color="accenturePurple40">Lambda</Skills>
                      <Skills color="accenturePurple40">React</Skills>
                      <Skills color="accenturePurple40">Confluence</Skills>
                      <Skills color="accenturePurple40">Jira</Skills>
                      <Skills color="accenturePurple40">Swagger</Skills>
                    </div>
                  </div>
                </Popover.Panel>
                <div className="border-b-accenturePurple border-b-4" />
              </>
            )}
          </Popover>

          {/* Full-Stack Bootcamp */}
          <Popover className="row-start-7 col-start-6 col-end-10 text-white text-[.7rem] md:text-[.9rem] md:leading-4 md:row-start-6 md:col-start-5 md:col-end-9 md:mt-1">
            {({ open }) => (
              <>
                <Popover.Button className="focus:outline-none text-left md:mb-1">
                  Full-Stack Bootcamp
                </Popover.Button>
                <Popover.Panel
                  className={`${
                    open ? "opacity-100" : "opacity-0"
                  } absolute z-10 bg-bgBlue p-3 text-xs text-white mt-2 mr-9 left-9 shadow-2xl md:text-md md:mr-16 md:ml-6 lg:left-[17%] lg:right-[13.3%] md:left-10 xl:right-[14.5%] xl:left-[17.3%] 2xl:left-[33.1%] 2xl:right-[15.5%]`}
                >
                  <div className="flex flex-col gap-1">
                    <h1 className="font-medium text-waveBlue">
                      Full-Stack Web Development Bootcamp
                    </h1>
                    <p className="text-graywhite font-bold">
                      Dec 2022 - Mar 2023
                    </p>
                    <p>
                      The 12-week bootcamp taught us key industry technologies.
                      Gave us the opportunity to work on a different project and
                      connect them into one piece and a final in-person
                      presentation.
                    </p>
                    <div className="flex gap-2 flex-wrap text-[.6rem] w-fit font-bold mt-2">
                      <Skills color="waveBlue">HTML</Skills>
                      <Skills color="waveBlue">CSS</Skills>
                      <Skills color="waveBlue">Javascript</Skills>
                      <Skills color="waveBlue">Node.js</Skills>
                      <Skills color="waveBlue">React</Skills>
                      <Skills color="waveBlue">Unit Testing</Skills>
                      <Skills color="waveBlue">MySQL</Skills>
                      <Skills color="waveBlue">Docker</Skills>
                      <Skills color="waveBlue">AWS</Skills>
                      <Skills color="waveBlue">Postman</Skills>
                    </div>
                  </div>
                </Popover.Panel>
                <div className="border-b-waveBlue border-b-4" />
              </>
            )}
          </Popover>

          {/* Tech4Good */}
          <Popover className="row-start-10 col-start-9 col-end-12 text-white text-[.7rem] md:text-[.9rem] md:row-start-9 md:col-end-11">
            {({ open }) => (
              <>
                <Popover.Button className="focus:outline-none text-left">
                  Tech4Good
                </Popover.Button>
                <Popover.Panel
                  className={`${
                    open ? "opacity-100" : "opacity-0"
                  } absolute z-10 bg-bgBlue p-3 text-xs text-white mt-2 mr-9 left-9 shadow-2xl md:text-md md:mr-16 md:ml-6 lg:left-[17%] lg:right-[13.3%] md:left-10 xl:right-[14.5%] xl:left-[17.3%] 2xl:left-[48.7%] 2xl:right-[15.5%]`}
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
                      <Skills color="tech4good">HTML</Skills>
                      <Skills color="tech4good">CSS</Skills>
                      <Skills color="tech4good">Javascript</Skills>
                      <Skills color="tech4good">React</Skills>
                      <Skills color="tech4good">Tailwind</Skills>
                      <Skills color="tech4good">Styled Components</Skills>
                      <Skills color="tech4good">Material UI</Skills>
                      <Skills color="tech4good">Figma</Skills>
                    </div>
                  </div>
                </Popover.Panel>
                <div className="border-b-tech4good border-b-4" />
              </>
            )}
          </Popover>

          {/* Major UK Postal Client */}
          <Popover className="mt-4 row-start-11 col-start-10 col-end-17 text-white text-[.7rem] md:text-[.9rem]">
            {({ open }) => (
              <>
                <Popover.Button className="focus:outline-none text-left">
                  Major UK Postal Client
                </Popover.Button>
                <Popover.Panel
                  className={`${
                    open ? "opacity-100" : "opacity-0"
                  } absolute z-10 bg-bgBlue p-3 text-xs text-white mt-2 mr-9 left-9 shadow-2xl md:text-md md:mr-16 md:ml-6 lg:left-[17%] lg:right-[13.3%] md:left-10 xl:right-[14.5%] xl:left-[17.3%] 2xl:left-[52.6%] 2xl:right-[15.5%]`}
                >
                  <div className="flex flex-col gap-1">
                    <h1 className="font-medium text-wildRed">
                      Major Accenture UK Postal Client
                    </h1>
                    <p className="text-graywhite font-bold">
                      Dec 2022 - Mar 2023
                    </p>
                    On a daily basis, I was responsible for the following:
                    <ol className="pl-4">
                      <li className="list-disc">
                        Development of APIs in Lambda functions using Golang.
                      </li>
                      <li className="list-disc">
                        Development of front-end journeys using JSON, having to
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
                      <Skills color="wildRed">Typescript</Skills>
                      <Skills color="wildRed">Golang</Skills>
                      <Skills color="wildRed">JSON</Skills>
                      <Skills color="wildRed">Unit Testing</Skills>
                      <Skills color="wildRed">AWS</Skills>
                      <Skills color="wildRed">AWS CDK</Skills>
                      <Skills color="wildRed">Lambda</Skills>
                      <Skills color="wildRed">API Gateway</Skills>
                      <Skills color="wildRed">API</Skills>
                      <Skills color="wildRed">Swagger</Skills>
                      <Skills color="wildRed">CloudWatch Logs</Skills>
                      <Skills color="wildRed">Confluence</Skills>
                      <Skills color="wildRed">Jira</Skills>
                      <Skills color="wildRed">Star Of The Month</Skills>
                      <Skills color="wildRed">Teams Cross Dependencies</Skills>
                      <Skills color="wildRed">People Champions Group</Skills>
                    </div>
                  </div>
                </Popover.Panel>
                <div className="border-b-wildRed border-b-4" />
              </>
            )}
          </Popover>

          {/* DateLine */}
          <div className="row-start-14 row-end-15 col-start-1 col-end-17 border-t-white border-t-4" />

          <div className="select-none text-white mt-2 row-start-14 row-end-15 col-start-1 col-end-3">
            2018
          </div>
          <div className="select-none text-white mt-2 row-start-14 row-end-15 col-start-3">
            2021
          </div>
          <div className="select-none text-white mt-2 row-start-14 row-end-15 col-start-5">
            2022 Dec
          </div>
          <div className="select-none text-white mt-2 row-start-14 row-end-15 col-start-7">
            Jan
          </div>
          <div className="select-none text-white mt-2 row-start-14 row-end-15 col-start-9">
            Mar
          </div>
          <div className="select-none text-white mt-2 row-start-14 row-end-15 col-start-11">
            May
          </div>
          <div className="select-none text-white mt-2 row-start-14 row-end-15 col-start-13">
            Jul
          </div>
          <div className="select-none text-white mt-2 row-start-14 row-end-15 col-start-15">
            Oct
          </div>
        </div>
      </div>
    </>
  );
};

export default Timeline;
