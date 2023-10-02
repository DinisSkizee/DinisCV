export const AboutMe = () => {
  return (
    <div className="bg-bgblue pt-[35%]">
      {/* Title */}
      <div className="w-full flex justify-center">
        <h1 className="text-white text-5xl">
          {`.about(`}
          <span className="text-greeny">{`"me"`}</span>)
        </h1>
      </div>
      {/* TEXT */}
      <div className="text-graywhite px-6 text-justify mt-[5rem] flex flex-col gap-4 pb-16 ">
        <p>
          {`I have always had a strong affinity for technology, I have had a computer since I can remember, grown being a competitive gamer participating in multiple online/lan tournaments.`}
        </p>

        <p>
          {`Fast-forward a few years, moved out of my country at 17 to study in the UK, completed a `}
          <span className="text-greeny">
            BEng in Computer Science in Cambridge ARU
          </span>
          {`, where as my final project I created a Issue/Task Tracker using ASP.NET MVC technologies`}
        </p>

        <p>{`It was clear by then that my passion within Software Engineer was in the whole web development lifecycle. While studying for interviews I covered a range of online courses, created a Full-Stack E-Commerce using React, Typescript, Firebase, Redux and Stripe.`}</p>

        <p>
          <span className="text-greeny">
            And my career started at Accenture...
          </span>
          {` with a 3 month Full-Stack Bootcamp, including HTML, CSS, Javascript, React, Unit Testing, MySQL, Docker, AWS, Postman, and others... Right after that I quickly got involved in a Tech4Good charity project, where I had the opportunity to step up and `}
          <span className="text-greeny">
            lead the dev team together an experienced designer
          </span>
          {`, hosted knowledge sharing sessions online and in-person for the team, ran client meetings and did the presentations. Got recognition from Senior Managers.`}
        </p>

        <p>
          {`While still on the Tech4Good project I joined my first`}{" "}
          {<span className="italic">&quot;real&quot;</span>}{" "}
          {`project, with devs with whom I would be able to learn from. `}
          <span className="text-greeny">
            The project was very large and complex for a major UK Client.
          </span>
          {` I learned best practices for the Jira + Confluence combo. Quickly got up to pace with Golang which I had no experience with, and in my second week I `}
          <span className="text-greeny">
            delivered an essential piece of code for a mock timeout,
          </span>
          {` which was daily used for nearly the rest of the project duration. `}
          <span className="text-greeny">
            Got awarded <span className="text-gold">Star of the Month!</span>
          </span>
        </p>
        <p>
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
        </p>
        <p>
          During the project{" "}
          <span className="text-greeny">I handled various technical tasks</span>{" "}
          including,{" "}
          <span className="text-greeny">
            <span>deploying AWS infrastructure</span>
            <span className="text-graywhite"> using </span>
            <span>AWS CDK</span>
            <span className="text-graywhite"> and </span>
            <span>Typescript for multiple Lambda functions</span>
            <span className="text-graywhite"> using </span>
            <span>API Gateway</span>
            <span className="text-graywhite"> and </span>
            <span>Cloudwatch</span>
            <span className="text-graywhite"> mainly. </span>
            <span>Created front-end journeys</span>
            <span className="text-graywhite">
              {" "}
              following the design provided,{" "}
            </span>
            <span>created enablers</span>
            <span className="text-graywhite"> for </span>
            <span>API calls</span>
            <span className="text-graywhite"> in the client, </span>
            <span>
              unit tests, understanding a complex system architecture,
              collaborating
            </span>
            <span className="text-graywhite"> and </span>
            <span>communicating effectively</span>
            <span className="text-graywhite"> with </span>
            <span>multiple teams</span>
            <span className="text-graywhite">
              {" "}
              as there were many cross dependencies.
            </span>
          </span>
        </p>
        <p>
          <span className="text-greeny">
            Took ownership on a substantial product from our team,
          </span>{" "}
          where in the absence of my tech lead, I{" "}
          <span className="text-greeny">
            collaborated with my Business Analyst and Scrum Master, to push that
            new product forward.
            <br />
            <br />
            Did the whole setup including:
            <br />
            <ol className="text-left">
              <li className="list-disc">
                Created a github repo and code structure{" "}
                <span className="text-graywhite">
                  following the project practices
                </span>
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
        </p>

        <p>
          At the end of the project I took ownership on making sure delivery
          tasks and documentation were fulfilled, I created diagrams, thorough
          documentation, tracked the progress, delivered everything early which
          allowed us for further revision sessions, and a successful complete
          delivery
        </p>

        <p>
          Within less than <span className="text-greeny">2 months</span> in my
          first project,{" "}
          <span className="text-greeny">
            I was already being extremely impactful
          </span>{" "}
          <span className="text-gold">not only within my team</span>{" "}
          <span className="text-greeny">or within</span>{" "}
          <span className="text-gold">my project,</span>{" "}
          <span className="text-greeny">but company wide.</span>{" "}
        </p>

        <p>{`Finally... participated in the Recordings of the Accenture Early Talent Recruitment, where I shared my experience as a graduate at Accenture.`}</p>
      </div>
    </div>
  );
};
