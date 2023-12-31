import { PText } from "../components/AboutMe/PText";
import { AboutWhat } from "../components/AboutMe/AboutWhat";
import MainTitle from "../components/Global/MainTitle";
import MainComponent from "../components/Global/MainComponent";

export const AboutMe = () => {
  return (
    <MainComponent id="about">
      <MainTitle>
        {`.about(`}
        <span className="text-greeny -mt-2">me</span>
        {`)`}
      </MainTitle>

      {/* TEXT */}
      <div className="text-graywhite text-justify mt-[5rem] flex flex-col 2xl:px-[10%]">
        <AboutWhat start={"true"}>the start</AboutWhat>
        <PText number={1}>
          I have always had a strong affinity for technology, I have had a
          computer since I can remember, grown being a competitive gamer
          participating in multiple online/lan tournaments.
        </PText>
        <AboutWhat>university</AboutWhat>
        <PText number={2}>
          Fast-forward a few years, moved out of my country at 17 to study in
          the UK, completed a{" "}
          <span className="text-greeny">
            BEng in Computer Science in Cambridge ARU,
          </span>{" "}
          where as my final project I created a Issue/Task Tracker using ASP.NET
          MVC technologies
        </PText>

        <PText number={3}>
          It was clear by then that my passion within Software Engineer was in
          the whole web development lifecycle. While studying for interviews I
          covered a range of online courses, created a Full-Stack E-Commerce
          using React, Typescript, Firebase, Redux and Stripe.
        </PText>

        <AboutWhat>accenture</AboutWhat>
        <PText number={4}>
          <span className="text-greeny">
            And my career started at Accenture...
          </span>{" "}
          with a 3 month Full-Stack Bootcamp, including HTML, CSS, Javascript,
          React, Unit Testing, MySQL, Docker, AWS (Amazon Web Services),
          Postman, and others...
          <br />
        </PText>

        <AboutWhat>accenture/tech4good</AboutWhat>
        <PText number={5}>
          Right after that I quickly got involved in a Tech4Good charity
          project, where I had the opportunity to step up and{" "}
          <span className="text-greeny">
            lead the dev team together with an experienced designer,
          </span>{" "}
          hosted knowledge sharing sessions online and in-person for the team,
          ran client meetings and did the presentations. Got recognition from
          Senior Managers.
        </PText>

        <AboutWhat>accenture/first_client</AboutWhat>
        <PText number={6}>
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

        <AboutWhat>accenture/first_client/initiatives</AboutWhat>
        <PText number={7}>
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

        <AboutWhat>accenture/first_client/technologies</AboutWhat>
        <PText number={8}>
          During the project{" "}
          <span className="text-greeny">I handled various technical tasks</span>{" "}
          including,{" "}
          <span className="text-greeny">
            deploying AWS (Amazon Web Services) infrastructure
          </span>
          <span> using </span>
          <span className="text-greeny">AWS (Amazon Web Services) CDK</span>
          <span> and </span>
          <span className="text-greeny">
            Typescript for multiple Lambda functions
          </span>
          <span> using </span>
          <span className="text-greeny">API Gateway</span>
          <span> and </span>
          <span className="text-greeny">CloudWatch</span>
          <span> mainly. </span>
          <span className="text-greeny">Created frontend journeys</span>
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

        <AboutWhat>accenture/first_client/leadership</AboutWhat>
        <PText number={9}>
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
                Created the AWS (Amazon Web Services) deployment infrastructure
                for the lambda function
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

        <PText number={10}>
          At the end of the project I took ownership on making sure delivery
          tasks and documentation were fulfilled, I created diagrams, thorough
          documentation, tracked the progress, delivered everything early which
          allowed us for further revision sessions, and a successful complete
          delivery
        </PText>

        <AboutWhat>accenture/first_client/impact</AboutWhat>
        <PText number={11}>
          Within such a short amount of time as a Software Engineer, and{" "}
          <span className="text-greeny">
            I was already being extremely impactful
          </span>{" "}
          <span className="text-gold">not only within my team</span>{" "}
          <span className="text-greeny">or within</span>{" "}
          <span className="text-gold">my project,</span>{" "}
          <span className="text-greeny">but company wide.</span>{" "}
        </PText>

        <AboutWhat>accenture/earlyTalentRecordings</AboutWhat>
        <PText number={12}>
          Finally... participated in the Recordings of the Accenture Early
          Talent Recruitment, where I shared my experience as a graduate at
          Accenture.
        </PText>

        <AboutWhat>accenture/second_client</AboutWhat>
        <PText number={13}>
          Joined a project as a Full-Stack Engineer for a UK{" "}
          <span className="text-gold">Energy & Gas</span> Client, using{" "}
          <span className="text-greeny">Typescript</span>,{" "}
          <span className="text-greeny">Node.js</span>,{" "}
          <span className="text-greeny">React</span>,{" "}
          <span className="text-greeny">Redux</span>,{" "}
          <span className="text-greeny">RxJs</span>, and{" "}
          <span className="text-greeny">Scss</span> to develop a large customer
          service application. This role involved balancing a range of
          responsibilities, from a performance improvement audit to strategic
          client interactions, and continuously contributing to the project
          release.
        </PText>

        <AboutWhat>accenture/second_client/audit</AboutWhat>
        <PText number={14}>
          Independently conducted a comprehensive performance audit of the
          application, leading to significant performance enhancements. My
          efforts <span className="text-greeny">resulted in an</span>{" "}
          <span className="text-gold">84%</span>{" "}
          <span className="text-greeny">reduction in load times</span> for the
          most accessed pages,{" "}
          <span className="text-greeny">
            translating into a yearly cost gain exceeding
          </span>{" "}
          <span className="text-gold">£100k</span>. I not only strategized and
          executed the audit but also presented the findings and implementation
          strategies to the client, followed by a detailed report of the process
          and outcomes.
        </PText>
      </div>
    </MainComponent>
  );
};
