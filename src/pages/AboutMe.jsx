import { useState, useEffect } from "react";
import { PText } from "../components/AboutMe/PText";
import { AboutWhat } from "../components/AboutMe/AboutWhat";

export const AboutMe = () => {
  const [scrollHeight, setScrollHeight] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleScroll = () => {
    const scrollPosition = window.scrollY;
    setScrollHeight(scrollPosition);
  };

  const handleResize = () => {
    const newWindowWidth = window.innerWidth;
    setWindowWidth(newWindowWidth);
  };

  useEffect(() => {
    handleScroll();
    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-bgBlue pt-[35%] md:text-lg">
      {/* Title */}
      <div id="blog" className="w-full flex justify-center">
        <h1 className="text-white text-5xl">
          {`.about(`}
          <span className="text-greeny">{`"me"`}</span>
          {`)`}
        </h1>
      </div>

      {/* TEXT */}
      <div className="text-graywhite px-6 text-justify mt-[5rem] flex flex-col gap-4 md:px-12 lg:px-[18%]">
        <AboutWhat start={"true"} text="the start" />
        <PText width={windowWidth} height={scrollHeight} number={1}>
          I have always had a strong affinity for technology, I have had a
          computer since I can remember, grown being a competitive gamer
          participating in multiple online/lan tournaments.
        </PText>
        <AboutWhat text="university" />
        <PText width={windowWidth} height={scrollHeight} number={2}>
          Fast-forward a few years, moved out of my country at 17 to study in
          the UK, completed a{" "}
          <span className="text-greeny">
            BEng in Computer Science in Cambridge ARU,
          </span>{" "}
          where as my final project I created a Issue/Task Tracker using ASP.NET
          MVC technologies
        </PText>

        <PText width={windowWidth} height={scrollHeight} number={3}>
          It was clear by then that my passion within Software Engineer was in
          the whole web development lifecycle. While studying for interviews I
          covered a range of online courses, created a Full-Stack E-Commerce
          using React, Typescript, Firebase, Redux and Stripe.
        </PText>

        <AboutWhat text="accenture" />
        <PText width={windowWidth} height={scrollHeight} number={4}>
          <span className="text-greeny">
            And my career started at Accenture...
          </span>{" "}
          with a 3 month Full-Stack Bootcamp, including HTML, CSS, Javascript,
          React, Unit Testing, MySQL, Docker, AWS, Postman, and others...
          <br />
        </PText>

        <AboutWhat text="accenture/tech4good" />
        <PText width={windowWidth} height={scrollHeight} number={5}>
          Right after that I quickly got involved in a Tech4Good charity
          project, where I had the opportunity to step up and{" "}
          <span className="text-greeny">
            lead the dev team together with an experienced designer,
          </span>{" "}
          hosted knowledge sharing sessions online and in-person for the team,
          ran client meetings and did the presentations. Got recognition from
          Senior Managers.
        </PText>

        <AboutWhat text="accenture/first project" />
        <PText width={windowWidth} height={scrollHeight} number={6}>
          While still on the Tech4Good project I joined my first{" "}
          <span className="italic">&quot;real&quot;</span> project, with devs
          with whom I would be able to learn from.{" "}
          <span className="text-greeny">
            The project was very large and complex for a major UK Client.
          </span>{" "}
          I learned best practices for the Jira + Confluence combo. Quickly got
          up to pace with Golang which I had no experience with, and in my
          second week I{" "}
          <span className="text-greeny">
            delivered an essential piece of code for a mock timeout,
          </span>{" "}
          which was daily used for nearly the rest of the project duration.{" "}
          <span className="text-greeny">
            Got awarded <span className="text-gold">Star of the Month!</span>
          </span>
        </PText>

        <AboutWhat text="accenture/project/initiatives" />
        <PText width={windowWidth} height={scrollHeight} number={7}>
          <span className="text-greeny">
            Co-created the People Champions group,
          </span>{" "}
          {""}
          where we provided the project with a platform to recognize people on a
          weekly basis. We presented the results in projects calls as a form of
          celebration and over communication channels.{" "}
          <span className="text-greeny">
            Organized social activities for the monthly project call,
          </span>{" "}
          got amazing feedback from the activities, one of them being a Group
          Game where people would go on break-out rooms and decide on a startup
          idea based the few technologies they unknowingly selected beforehand.
        </PText>

        <AboutWhat text="accenture/project/technologies" />
        <PText width={windowWidth} height={scrollHeight} number={8}>
          During the project{" "}
          <span className="text-greeny">I handled various technical tasks</span>{" "}
          including,{" "}
          <span className="text-greeny">deploying AWS infrastructure</span>
          <span> using </span>
          <span className="text-greeny">AWS CDK</span>
          <span> and </span>
          <span className="text-greeny">
            Typescript for multiple Lambda functions
          </span>
          <span> using </span>
          <span className="text-greeny">API Gateway</span>
          <span> and </span>
          <span className="text-greeny">Cloudwatch</span>
          <span> mainly. </span>
          <span className="text-greeny">Created front-end journeys</span>
          <span> following the design provided, </span>
          <span className="text-greeny">created enablers</span>
          <span> for </span>
          <span className="text-greeny">API calls</span>
          <span> in the client, </span>
          <span className="text-greeny">
            unit tests, understanding a complex system architecture,
            collaborating
          </span>
          <span> and </span>
          <span className="text-greeny">communicating effectively</span>
          <span> with </span>
          <span className="text-greeny">multiple teams</span>
          <span> as there were many cross dependencies.</span>
        </PText>

        <AboutWhat text="accenture/project/leadership" />
        <PText width={windowWidth} height={scrollHeight} number={9}>
          <span className="text-greeny">
            Took ownership on a substantial product from our team,
          </span>{" "}
          where in the absence of my tech lead, I{" "}
          <span>
            collaborated with my Business Analyst and Scrum Master, to push that
            new product forward.
            <br />
            <br />
            <span className="text-greeny">Did the whole setup including:</span>
            <br />
            <ol className="text-left">
              <li className="list-disc">
                Created a github repo and code structure{" "}
                <span>following the project practices</span>
              </li>
              <li className="list-disc">
                Implemented github Actions successfully
              </li>
              <li className="list-disc">
                Created the AWS deployment infrastructure for the lambda
                function
              </li>
              <li className="list-disc">Created all required API&apos;s</li>
              <li className="list-disc">
                Completely tested and documented in Confluence
              </li>
            </ol>
            <span className="text-gold">
              Got lots of recognition from: <br />
              Delivery Lead, Product Owner, and my whole team!
            </span>
          </span>
        </PText>

        <PText width={windowWidth} height={scrollHeight} number={10}>
          At the end of the project I took ownership on making sure delivery
          tasks and documentation were fulfilled, I created diagrams, thorough
          documentation, tracked the progress, delivered everything early which
          allowed us for further revision sessions, and a successful complete
          delivery
        </PText>

        <AboutWhat text="accenture/project/impact" />
        <PText width={windowWidth} height={scrollHeight} number={11}>
          Within such a short amount of time as a Software Engineer, and{" "}
          <span className="text-greeny">
            I was already being extremely impactful
          </span>{" "}
          <span className="text-gold">not only within my team</span>{" "}
          <span className="text-greeny">or within</span>{" "}
          <span className="text-gold">my project,</span>{" "}
          <span className="text-greeny">but company wide.</span>{" "}
        </PText>

        <AboutWhat text="accenture/earlyTalentRecordings" />
        <PText width={windowWidth} height={scrollHeight} number={12}>
          Finally... participated in the Recordings of the Accenture Early
          Talent Recruitment, where I shared my experience as a graduate at
          Accenture.
        </PText>
      </div>
    </div>
  );
};
